let csvData;
let csvHeader;
let userInput;
const button = document.querySelector('button')

// testing url in fetch()
fetch('https://bycdiaz.github.io/pre-req_check/all_courses_pre-reqs.csv')
 .then((response) => {
    return response.text();
  })
  .then((csv) => {
    parseCSV(csv);
    prepInputField(button);
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
    console.log('click works!');
    
    userInput = document.getElementById("entered-course").value;
  });
};