// Update existing code when add new component

const fs = require('fs-extra');
const colors = require('colors');

module.exports = function(
	template_import_block,
	template_statement_block,
	componentName
) {
	let fileFolder = `${process.cwd()}/${template.folder}`;
	let fileFullyQualifiedName = '';
	let content = template.content.join('');

	// Create folder if not exists
	fs.ensureDirSync(fileFolder);

	// Prepare the file's Fully Qualified Name
	console.log(colors.red(`template.type:`, template.type));
	const fileAbsolutePath = `${process.cwd()}/${template.fileRelativePath}`;
	let currentFileContent = fs.readFileSync(fileAbsolutePath).toString();
	let newFileContent;
	switch (template.type) {
		case 'import_block': {
			let pattern_importBlock = /\/\/ #endregion \[REGION_CODE_BLUE\] import block/g;

			let toBeAddedContent = `${content.replace(
				/___componentName___/g,
				componentName
			)}\n$&`;

			newFileContent = currentFileContent.replace(
				pattern_importBlock,
				toBeAddedContent
			);

			// write back to file
			fs.writeFile(fileAbsolutePath, newFileContent, (err) => {
				if (err) throw err;
				console.log(colors.yellow(fileAbsolutePath) + ` updated.`);
			});
			break;
		}
		case 'statement_block':
			{
				// Get current file
				const fileAbsolutePath = `${process.cwd()}/${
					template.fileRelativePath
				}`;
				let currentFileContent = fs
					.readFileSync(fileAbsolutePath)
					.toString();

				let pattern_statementBlock = /\/\/ #endregion \[REGION_CODE_BLUE\] statement block/g;

				let toBeAddedContent = `${content.replace(
					/___componentName___/g,
					componentName
				)}\n$&`;

				let newFileContent = currentFileContent.replace(
					pattern_statementBlock,
					toBeAddedContent
				);
				console.log(colors.red(`newFileContent:`, newFileContent));
				// add new block

				// insert module statement

				// write back to file
				fs.writeFile(fileAbsolutePath, newFileContent, (err) => {
					if (err) throw err;
					console.log(colors.yellow(fileAbsolutePath) + ` updated.`);
				});
			}
			break;

		default:
			break;
	}

	// // Replace keywords
	// let replacedContent = content.replace(
	// 	/___componentName___/g,
	// 	componentName
	// );

	// // Generate file
	// fs.writeFile(fileFullyQualifiedName, replacedContent, (err) => {
	// 	if (err) throw err;
	// 	console.log(colors.green(fileFullyQualifiedName) + ` generated.`);
	// });
};
