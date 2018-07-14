const fs = require('fs-extra');
const colors = require('colors');

module.exports = function(template, appName, componentName) {
	let fileFolder = `${process.cwd()}/${template.folder}`;
	let fileFullyQualifiedName = '';
	let content = template.content.join('');

	// Create folder if not exists
	fs.ensureDirSync(fileFolder);

	// Prepare the file's Fully Qualified Name
	switch (template.type) {
		case 'common':
			fileFullyQualifiedName = `${fileFolder}${template.fileName}${
				template.extension
			}`;
			break;
		case 'component':
			fileFullyQualifiedName = `${fileFolder}${componentName}${
				template.surffix
			}.${template.extension}`;
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
		console.log(colors.green(fileFullyQualifiedName) + ` generated.`);
	});
};
