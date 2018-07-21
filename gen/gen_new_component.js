require('rootpath')();

const colors = require('colors');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const generator = require('gen/generator');
const updater = require('gen/updater');
const Types_StoreStateType_ts_template = require('lib/templates/src/Types/StoreStateType_ts_template.json');
const Components_App_tsx_template = require('lib/templates/src/Components/App_tsx_template.json');
const Reducers_RootReducer_ts_template = require('lib/templates/src/Reducers/RootReducer_ts_template.json');
// const editorconfig_template = require('lib/templates/editorconfig_template.json');
// const package_json_template = require('lib/templates/package_json_template.json');
// const tsconfig_json_template = require('lib/templates/tsconfig_json_template.json');
// const tslint_json_template = require('lib/templates/tslint_json_template.json');
// const index_html_template = require('lib/templates/public/index_html_template.json');
const index_tsx_template = require('lib/templates/src/index_tsx_template.json');
// const Components_app_tsx_template = require('lib/templates/src/Components/App_tsx_template.json');
// const Store_ts_template = require('lib/templates/src/Store/Store_ts_template.json');
// const Reducers_RootReducer_ts_template = require('lib/templates/src/Reducers/RootReducer_ts_template.json');
// const Types_StateTypes_StoreStateType_ts_template = require('lib/templates/src/Types/StateTypes/StoreStateType_ts_template.json');
// const Settings_Path_ts_template = require('lib/templates/src/Settings/Path_ts_template.json');
const Types_StateType_ts_template = require('lib/templates/src/Types/StateType_ts_template.json');
const Types_ModelType_ts_template = require('lib/templates/src/Types/ModelType_ts_template.json');
const Types_ActionType_ts_template = require('lib/templates/src/Types/ActionType_ts_template.json');
const Reducers_Reducer_ts_template = require('lib/templates/src/Reducers/Reducer_ts_template.json');
const Actions_Interfaces_IAction_ts_template = require('lib/templates/src/Actions/IAction_ts_template.json');
const Actions_Action_ts_template = require('lib/templates/src/Actions/Action_ts_template.json');
const Services_Service_ts_template = require('lib/templates/src/Services/Service_ts_template.json');
const Components_Main_tsx_template = require('lib/templates/src/Components/Main_tsx_template.json');
const Component_List_tsx_template = require('lib/templates/src/Components/List_tsx_template.json');
const Component_Details_tsx_template = require('lib/templates/src/Components/Details_tsx_template.json');

const regexPattern_appName = /___appName___/g;
const placeholder_componentName = '___componentName___';
// let regexpattern_BlockTemplate_ImportBlock = /\/\/ #endregion \[REGION_CODE_BLUE\] import block/g;
// let regexpattern_BlockTemplate_StatementBlock = /\/\/ #endregion \[REGION_CODE_GOLD\] statement block/g;
// let regexpattern_mapStateToPropsBlock = /\/\/ #endregion \[REGION_CODE_GOLD\] mapStateToProps block/g;
// let regexpattern_rootIndexRouteBlock = /<Route path=\"\" component={FourOhFour} \/>/;
const questions = [
	{
		type: 'input',
		name: 'moduleName',
		message: 'Module Name:'
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
	inquirer.prompt(questions).then(function(answers) {
		// #region [REGION_CODE_GOLD] Update Common Files

		// Update StoreStateType.ts file
		// updater(
		// 	Types_StateTypes_StoreStateType_ts_template,
		// 	placeholder_componentName,
		// 	answers.moduleName
		// );

		// // Add new import and route to the Components/App.tsx file
		// updater(Components_App_tsx_template, answers.moduleName);

		// // Add new import and Reducer to the RootReducer.ts
		// updater(Reducers_RootReducer_ts_template, answers.moduleName);

		// // Add Route to the index.tsx file
		// updater(index_tsx_template, answers.moduleName);
		// #endregion [REGION_CODE_GOLD] Update Common Files

		// #region [REGION_CODE_BLUE] Generate Dynamic Files

		// Generate [ComponentName]StateType.ts
		generator(Types_StateType_ts_template, answers);

		// Generate [ComponentName]ModelType.ts
		generator(Types_ModelType_ts_template, answers);

		// Generate [ComponentName]ActionType.ts
		generator(Types_ActionType_ts_template, answers);

		// Generate [ComponentName]Reducer.ts
		generator(Reducers_Reducer_ts_template, answers);

		// Generate I[ComponentName]ActionInterface.ts
		generator(Actions_Interfaces_IAction_ts_template, answers);

		// Generate [ComponentName]Actions.ts
		generator(Actions_Action_ts_template, answers);

		// Generate [ComponentName]Services.ts
		generator(Services_Service_ts_template, answers);

		// Generate  Components
		generator(Components_Main_tsx_template, answers);
		generator(Component_List_tsx_template, answers);
		generator(Component_Details_tsx_template, answers);
		// #endregion [REGION_CODE_BLUE] Generate Dynamic Files
	});
};
