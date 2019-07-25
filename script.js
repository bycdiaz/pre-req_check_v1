let csvData;
let csvHeader;
let userInput;
const button = document.querySelector('button')

// testing url in fetch()
fetch('https://bycdiaz.github.io/pre-req_check/all_courses_pre-reqs _no_duplicates.csv')
 .then((response) => {
    return response.text();
  })
  .then((csv) => {
    parseCSV(csv);
    prepInputField(button);
    // console.log(csvData[30]);
  });



function parseCSV(csv) {
  const arrayOfRows = csv.split('\n');

  // iterate through array of strings and split on comma
	const arrayOfCSVData = arrayOfRows.map((row) => {
		return row.split(',');
	});

	const header = arrayOfCSVData[0];
	const body = arrayOfCSVData.slice(1, -1);

	// map header values to body values
	const jsonData = body.map((arrayOfValues) => {
		const rowData = {};
		for(let i = 0; i < arrayOfValues.length; i++) {
			rowData[header[i]] = arrayOfValues[i];
		}

		return rowData;
	});

	csvHeader = header;
  csvData = jsonData;

	// updateDom()
}

function prepInputField(button) {
  button.addEventListener('click', () => {
    userInput = document.getElementById("entered-course").value;
    console.log(`The user entered ${userInput}`);
    courseLookup(userInput);
  });
};

function courseLookup(userInput) {
  csvData.forEach(function(obj) {
    if (obj['Cat Course'] === userInput) {
      console.log(`${obj['Cat Course']} was found in the data! And it looks like ${obj['Cat Preq Course']} with a grade of ${obj['Cat Preq Min Grde']} or better is a pre-req for ${obj['Cat Course']}.`);
    }
  });
}

// function courseLookup(userInput) {
//   csvData.forEach(function(obj) {
//     if (obj['Cat Course'] === userInput) {
//       console.log("The course was found!");
//     }
//   });
// }