const fs = require('fs');
const colors = require('colors');

// module.exports = function(template, folder, componentName, surffix, extension) {
// 	// Create folder if not exists
// 	if (!fs.existsSync(folder)) {
// 		fs.mkdirSync(folder);
// 	}

// 	// Replace keywords
// 	var replacedTsx = template.replace(/___ComponentName___/g, componentName);

// 	// Generate file
// 	fs.writeFile(
// 		`${folder}/${componentName}${surffix}.${extension}`,
// 		replacedTsx,
// 		(err) => {
// 			if (err) throw err;
// 			console.log(
// 				colors.green(
// 					`${folder}/${componentName}${surffix}.${extension}`
// 				) + ` generated.`
// 			);
// 		}
// 	);
// };

module.exports = function(template, appName, componentName) {
	let fileFolder = `${process.cwd()}/${template.folder}`;
	let fileFullyQualifiedName = '';
	let content = template.content.join('');

	// Create folder if not exists
	if (!fs.existsSync(fileFolder)) {
		fs.mkdirSync(fileFolder);
	}

	// Prepare the file's Fully Qualified Name
	switch (template.type) {
		case 'common':
			fileFullyQualifiedName = `${fileFolder}/${template.fileName}.${
				template.extension
			}`;
			break;

		default:
			break;
	}

	// Replace keywords
	let replacedContent = content
		.replace(/___appName___/g, appName)
		.replace(/___componentName___/g, componentName);

	// Generate file
	fs.writeFile(fileFullyQualifiedName, replacedContent, (err) => {
		if (err) throw err;
		console.log(colors.green(``) + ` generated.`);
	});
};
