require('rootpath')();

const colors = require('colors');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const generator = require('gen/common/generator');

// const { types } = require('./values');
// const gen_editorconfig = require('gen/common/gen_editorconfig');
// const gen_package_json = require('gen/common/gen_package_json');
// const gen_tsconfig_json = require('gen/common/gen_tsconfig_json');
// const gen_tslint_json = require('gen/common/gen_tslint_json');
// const gen_public_index_html = require('gen/public/gen_public_index_html');
// const gen_index_tsx = require('gen/src/gen_index_tsx');
// const gen_app_tsx = require('gen/src/Components/gen_app_tsx');
// const gen_Store_ts = require('gen/src/Store/gen_Store_ts');
// const gen_RootReducer_ts = require('gen/src/Reducers/gen_RootReducer_ts');
// const gen_StoreStateType_ts = require('gen/src/Types/StateTypes/gen_StoreStateType_ts');
// const gen_Settings_Path_ts = require('gen/common/gen_Settings_Path_ts');
// const gen_component_sample = require('./src/Components/gen_component_sample');

const editorconfig_template = require('lib/templates/editorconfig_template.json');
const package_json_template = require('lib/templates/package_json_template.json');
const tsconfig_json_template = require('lib/templates/tsconfig_json_template.json');
const tslint_json_template = require('lib/templates/tslint_json_template.json');
const index_html_template = require('lib/templates/public/index_html_template.json');
const src_index_tsx_template = require('lib/templates/src/index_tsx_template.json');
const src_Components_app_tsx_template = require('lib/templates/src/Components/App_tsx_template.json');
const src_Store_ts_template = require('lib/templates/src/Store/Store_ts_template.json');
const src_Reducers_RootReducer_ts_template = require('lib/templates/src/Reducers/RootReducer_ts_template.json');
let src_Types_StateTypes_StoreStateType_ts_template = require('lib/templates/src/Types/StateTypes/StoreStateType_ts_template.json');
const src_Settings_Path_ts_template = require('lib/templates/src/Settings/Path_ts_template.json');

const questions = [
	{
		type: 'input',
		name: 'appName',
		message: 'App Name:'
		// 	default: false
	},
	{
		type: 'input',
		name: 'componentName',
		message: 'Component Name:'
		// 	default: false
	}
];

module.exports = function() {
	// Remove everything from current working folder
	let currentWorkingFolder = process.cwd();
	fs.emptyDirSync(currentWorkingFolder);

	inquirer.prompt(questions).then(function(answers) {
		// #region [REGION_CODE_GOLD] Generate Common Files

		// Generate .editorconfig file
		generator(editorconfig_template);

		// Generate package.json file
		generator(package_json_template, answers.appName);

		// Generate tsconfig.json file.
		generator(tsconfig_json_template);

		// Generate tslint.json file.
		generator(tslint_json_template);

		// Generate public/index.html file.
		generator(index_html_template, answers.appName);

		// Generate index.tsx file
		generator(src_index_tsx_template, '', answers.componentName);

		// Generate Components/App.tsx file
		generator(src_Components_app_tsx_template, '', answers.componentName);

		// Generate Store.ts
		generator(src_Store_ts_template, '', answers.componentName);

		// Generate RootReducer.ts
		generator(
			src_Reducers_RootReducer_ts_template,
			'',
			answers.componentName
		);

		//Genrate StoreStateType.ts
		generator(
			src_Types_StateTypes_StoreStateType_ts_template,
			'',
			answers.componentName
		);

		//  Generate Settings/Path.ts
		generator(src_Settings_Path_ts_template);

		// #endregion [REGION_CODE_GOLD] Generate Common Files

		// #region [REGION_CODE_BLUE] Generate Dynamic Files
		// Generate [ComponentName]StateType.ts
		// Generate [ComponentName]ModelType.ts
		// Generate [ComponentName]ActionType.ts

		// Generate [ComponentName]Reducer.ts

		// Generate I[ComponentName]ActionInterface.ts

		// Generate [ComponentName]Actions.ts

		// Generate [ComponentName]Services.ts

		// Generate Sample Components
		// gen_component_sample(answers.ComponentName);
		// #endregion [REGION_CODE_BLUE] Generate Dynamic Files
	});
};
