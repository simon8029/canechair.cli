require('rootpath')();

const fs = require('fs');
const colors = require('colors');

let { store_ts } = require('lib/templates/src/Store/Store.js');

const srcFolder = 'src/Store';

module.exports = function(ComponentName) {
	// Create folder if not exists
	if (!fs.existsSync(srcFolder)) {
		fs.mkdirSync(srcFolder);
	}

	// Replace keywords
	var replacedContent = store_ts.replace(
		/___ComponentName___/g,
		ComponentName
	);

	// Generate file
	fs.writeFile('src/Store/Store.ts', replacedContent, (err) => {
		if (err) throw err;
		console.log(colors.green(`Store/Store.ts`) + ` generated.`);
	});
};
