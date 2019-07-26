let csvData;
let csvHeader;
let userInput;
let collegeNames = {
  "0": "No College Designated",
  "A": "Antoinette Westphal College of Media Arts & Design",
  "AS": "College of Arts and Sciences",
  "B": "Bennett S. LeBow College of Business",
  "C": "Close School of Entrepreneurship",
  "CH": "Center for Food & Hospitality Managements",
  "CI": "College of Computing & Informatics",
  "CV": "Center for Civic Engagement",
  "E": "College of Engineering",
  "GC": "Goodwin College of Professional Studies",
  "GD": "Graduate College",
  "NH": "College of Nursing and Health Professions",
  "PE":"Pennoni Honors College",
  "PH": "Dornsife School of Public Health",
  "QQ": "COM School Biomedical Science & Professional Studies",
  "R": "School of Biomedical Engineering, Science and Health Systems",
  "T": "School of Education",
  "X": "Miscellaneous"
}
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

  // using findResult for troubleshooting.
  let findResult = csvData.findIndex((row) => {
    return row["Cat Course"] === "BMES 302";
  });
  
  console.log(findResult);
  console.log(arrayOfRows[findResult + 1]);
  
  

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
      console.log(`${obj['Cat Course']} was found in the data! And it looks like ${obj['Cat Preq Course']} with a grade of ${obj['Cat Preq Min Grde']} or better is a pre-req for ${obj['Cat Course']}. This course is offered by the ${collegeNames[obj['Coll Code']]}.`);
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