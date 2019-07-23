const csvfile = document.getElementById('fileItem').files[0];

const config = {
	quotes: false, //or array of booleans
	quoteChar: '"',
	escapeChar: '"',
	delimiter: ",",
	header: true,
	newline: "\r\n",
	skipEmptyLines: false, //or 'greedy',
	columns: null //or array of strings
}

const data = Papa.parse(csvfile, config)

console.log(data)