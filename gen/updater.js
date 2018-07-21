// Update existing code when add new component

const fs = require('fs-extra');
const colors = require('colors');

module.exports = function(template, componentName) {
	// Prepare the file's Fully Qualified Name
	const fileAbsolutePath = `${process.cwd()}/${template.folder}${
		template.fileName
	}${template.extension}`;
	let currentFileContent = fs.readFileSync(fileAbsolutePath).toString();

	// Get template of to be replaced content
	let joinedTemplateContent_BlockTemplate_ImportBlock =
		template.BlockTemplate_ImportBlock &&
		template.BlockTemplate_ImportBlock.join('');
	let joinedTemplateContent_BlockTemplate_StatementBlock =
		template.BlockTemplate_StatementBlock &&
		template.BlockTemplate_StatementBlock.join('');
	let joinedTemplateContent_mapStateToPropsBlock =
		template.mapStateToPropsBlock && template.mapStateToPropsBlock.join('');

	// This only happens in root index.tsx file
	let joinedTemplateContent_BlockTemplate_Root_Index_tsx_RouteBlock =
		template.BlockTemplate_Root_Index_tsx_RouteBlock &&
		template.BlockTemplate_Root_Index_tsx_RouteBlock.join('');

	let newFileContent;

	let toBeAddedContent_BlockTemplate_ImportBlock = getToBeAddedContent(
		joinedTemplateContent_BlockTemplate_ImportBlock,
		componentName
	);
	let toBeAddedContent_BlockTemplate_StatementBlock = getToBeAddedContent(
		joinedTemplateContent_BlockTemplate_StatementBlock,
		componentName
	);
	let toBeAddedContent_mapStateToPropsBlock = getToBeAddedContent(
		joinedTemplateContent_mapStateToPropsBlock,
		componentName
	);
	let toBeAddedContent_RootIndexTsxRouteBlock = getToBeAddedContent(
		joinedTemplateContent_BlockTemplate_Root_Index_tsx_RouteBlock,
		componentName
	);

	newFileContent = currentFileContent
		.replace(
			regex_pattern_BlockTemplate_ImportBlock,
			toBeAddedContent_BlockTemplate_ImportBlock
		)
		.replace(
			regex_pattern_BlockTemplate_StatementBlock,
			toBeAddedContent_BlockTemplate_StatementBlock
		)
		.replace(
			regex_pattern_mapStateToPropsBlock,
			toBeAddedContent_mapStateToPropsBlock
		)
		.replace(
			regex_pattern_rootIndexRouteBlock,
			toBeAddedContent_RootIndexTsxRouteBlock
		);

	// write back to file
	fs.writeFile(fileAbsolutePath, newFileContent, (err) => {
		if (err) throw err;
		console.log(colors.yellow(fileAbsolutePath) + ` updated.`);
	});
};

getToBeAddedContent = (template, componentName) => {
	if (template)
		return `${template.replace(/___componentName___/g, componentName)}\n$&`;
	return '';
};
