require('rootpath')();

const fs = require('fs');
const colors = require('colors');

let Template = require('lib/templates/src/Types/ActionTypes/ActionTypes');
const Folder = 'src/Types/ActionTypes';

module.exports = function(Template, Folder, ComponentName, Surffix) {
	// const srcFolder = `src/Types/ActionTypes/`;

	// Create folder if not exists
	if (!fs.existsSync(Folder)) {
		fs.mkdirSync(Folder);
	}

	// Replace keywords
	var replacedTsx = Template.replace(/___ComponentName___/g, ComponentName);

	// Generate file
	fs.writeFile(
		`${srcFolder}/${ComponentName}${Surffix}.tsx`,
		replacedTsx,
		(err) => {
			if (err) throw err;
			console.log(
				colors.green(`${Folder}/${ComponentName}${Surffix}.tsx`) +
					` generated.`
			);
		}
	);
};
