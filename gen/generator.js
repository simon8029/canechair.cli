const fs = require('fs-extra');
const colors = require('colors');

// Generate file base on template, placeholder, and replace value
module.exports = function(template, answers) {
	// Get file folder
	const fileFolder = `${process.cwd()}/${template.folder}`;

	// Prepare the file's Fully Qualified Name
	let fileFullyQualifiedName = '';
	let replaceValue = answers === undefined ? '' : answers.componentName;
	switch (template.type) {
		case 'common':
			// Create folder if not exists
			fs.ensureDirSync(fileFolder);

			fileFullyQualifiedName = `${fileFolder}${template.fileName}${
				template.extension
			}`;
			replaceValue = answers === undefined ? '' : answers.appName;
			break;
		case 'StateType':
		case 'ModelType':
		case 'ActionType':
			{
				// Create folder if not exists
				let folderPath = `${process.cwd()}/src/${
					answers.moduleName
				}/Types`;
				fs.ensureDirSync(folderPath);

				fileFullyQualifiedName = `${folderPath}/${
					answers.componentName
				}${template.type}.ts`;
			}
			break;
		case 'ActionInterface':
			{
				// Create folder if not exists
				let folderPath = `${process.cwd()}/src/${
					answers.moduleName
				}/Actions`;
				fs.ensureDirSync(folderPath);

				fileFullyQualifiedName = `${folderPath}/I${
					answers.componentName
				}Action.ts`;
			}
			break;
		case 'Action':
		case 'Service':
		case 'Reducer':
			{
				// Create folder if not exists
				let folderPath = `${process.cwd()}/src/${answers.moduleName}/${
					template.type
				}s`;
				fs.ensureDirSync(folderPath);

				fileFullyQualifiedName = `${folderPath}/${
					answers.componentName
				}${template.type}.ts`;
			}
			break;
		case 'Component':
			{
				// Create folder if not exists
				let folderPath = `${process.cwd()}/src/${answers.moduleName}/${
					template.type
				}s`;
				fs.ensureDirSync(folderPath);

				fileFullyQualifiedName = `${folderPath}/${
					answers.componentName
				}${template.Surffix}.ts`;
			}
			break;

		default:
			break;
	}

	// Replace keywords
	let content = template.content.join('');
	let regex = new RegExp(template.placeholder, 'g');

	let replacedContent = content.replace(regex, replaceValue);

	// Generate file
	fs.writeFile(fileFullyQualifiedName, replacedContent, (err) => {
		if (err) throw err;
		console.log(
			`${fileFullyQualifiedName} .......... ${colors.green('Done.')}`
		);
	});
};
