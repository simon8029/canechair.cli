// Update existing code when add new component

const fs = require('fs-extra');
const colors = require('colors');

module.exports = function (template, componentName) {
	let fileFolder = `${process.cwd()}/${template.folder}`;
	let joinedTemplateContent_importBlock =
		template.importBlock && template.importBlock.join('');
	let joinedTemplateContent_statementBlock =
		template.statementBlock && template.statementBlock.join('');
	let joinedTemplateContent_mapStateToPropsBlock =
		template.mapStateToPropsBlock && template.mapStateToPropsBlock.join('');

	// This only happens in root index.tsx file
	let joinedTemplateContent_BlockTemplate_Root_Index_tsx_RouteBlock =
		template.BlockTemplate_Root_Index_tsx_RouteBlock &&
		template.BlockTemplate_Root_Index_tsx_RouteBlock.join('');

	// Prepare the file's Fully Qualified Name
	const fileAbsolutePath = `${process.cwd()}/${template.folder}${
		template.fileName
		}${template.extension}`;
	let currentFileContent = fs.readFileSync(fileAbsolutePath).toString();
	let newFileContent;

	let regex_pattern_importBlock = /\/\/ #endregion \[REGION_CODE_BLUE\] import block/g;
	let regex_pattern_statementBlock = /\/\/ #endregion \[REGION_CODE_GOLD\] statement block/g;
	let regex_pattern_mapStateToPropsBlock = /\/\/ #endregion \[REGION_CODE_GOLD\] mapStateToProps block/g;
	let regex_pattern_rootIndexRouteBlock = /<Route path=\"\" component={FourOhFour} \/>/;

	let toBeAddedContent_importBlock = getToBeAddedContent(
		joinedTemplateContent_importBlock,
		componentName
	);
	let toBeAddedContent_statementBlock = getToBeAddedContent(
		joinedTemplateContent_statementBlock,
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

	console.log(
		`toBeAddedContent_RootIndexTsxRouteBlock:`,
		toBeAddedContent_RootIndexTsxRouteBlock
	);
	let re = RegExp(template.RegPattern_Root_Index_tsx_RouteBlock);
	console.log(
		`template.RegPattern_Root_Index_tsx_RouteBlock:`,
		template.RegPattern_Root_Index_tsx_RouteBlock
	);
	console.log(
		colors.blue(`re.test(currentFileContent):`, re.test(currentFileContent))
	);

	newFileContent = currentFileContent
		.replace(regex_pattern_importBlock, toBeAddedContent_importBlock)
		.replace(regex_pattern_statementBlock, toBeAddedContent_statementBlock)
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
