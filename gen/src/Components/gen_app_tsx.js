require('rootpath')();

const fs = require('fs');
const colors = require('colors');

let { app_tsx } = require('lib/templates/src/Components/App.js');

const srcFolder = 'src/Components';

module.exports = function(ComponentName) {
	// Create folder if not exists
	if (!fs.existsSync(srcFolder)) {
		fs.mkdirSync(srcFolder);
	}

	// Replace keywords
	var replaceAppTsx = app_tsx.replace(/___ComponentName___/g, ComponentName);

	// Generate file
	fs.writeFile('src/Components/App.tsx', replaceAppTsx, (err) => {
		if (err) throw err;
		console.log(colors.green(`Components/App.tsx`) + ` generated.`);
	});
};
