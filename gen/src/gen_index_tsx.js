require('rootpath')();

const fs = require('fs');
const colors = require('colors');

const { index_js } = require('lib/templates/src/index.js');

const srcFolder = 'src';

module.exports = function() {
	if (!fs.existsSync(srcFolder)) {
		fs.mkdirSync(srcFolder);
	}
	fs.writeFile('src/index.tsx', index_js, (err) => {
		if (err) throw err;
		console.log(colors.green(`index.tsx`) + ` generated.`);
	});
};
