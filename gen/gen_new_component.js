require('rootpath')();

const colors = require('colors');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const generator = require('gen/generator');
const updater = require('gen/updater');
const src_Types_StateTypes_StoreStateType_ts_template = require('lib/templates/src/Types/StateTypes/StoreStateType_ts_template.json');
const src_Components_App_tsx_template = require('lib/templates/src/Components/App_tsx_template.json');
const src_Reducers_RootReducer_ts_template = require('lib/templates/src/Reducers/RootReducer_ts_template.json');
// const editorconfig_template = require('lib/templates/editorconfig_template.json');
// const package_json_template = require('lib/templates/package_json_template.json');
// const tsconfig_json_template = require('lib/templates/tsconfig_json_template.json');
// const tslint_json_template = require('lib/templates/tslint_json_template.json');
// const index_html_template = require('lib/templates/public/index_html_template.json');
const src_index_tsx_template = require('lib/templates/src/index_tsx_template.json');
// const src_Components_app_tsx_template = require('lib/templates/src/Components/App_tsx_template.json');
// const src_Store_ts_template = require('lib/templates/src/Store/Store_ts_template.json');
// const src_Reducers_RootReducer_ts_template = require('lib/templates/src/Reducers/RootReducer_ts_template.json');
// const src_Types_StateTypes_StoreStateType_ts_template = require('lib/templates/src/Types/StateTypes/StoreStateType_ts_template.json');
// const src_Settings_Path_ts_template = require('lib/templates/src/Settings/Path_ts_template.json');
const src_Types_StateTypes_ComponentStateType_ts_template = require('lib/templates/src/Types/StateTypes/ComponentStateType_ts_template.json');
const src_Types_ModelTypes_ComponentModelType_ts_template = require('lib/templates/src/Types/ModelTypes/ComponentModelType_ts_template.json');
const src_Types_ActionTypes_ComponentActionType_ts_template = require('lib/templates/src/Types/ActionTypes/ComponentActionType_ts_template.json');
const src_Reducers_ComponentReducer_ts_template = require('lib/templates/src/Reducers/ComponentReducer_ts_template.json');
const src_Actions_Interfaces_IComponentAction_ts_template = require('lib/templates/src/Actions/Interfaces/IComponentAction_ts_template.json');
const src_Actions_ComponentAction_ts_template = require('lib/templates/src/Actions/ComponentAction_ts_template.json');
const src_Services_ComponentService_ts_template = require('lib/templates/src/Services/ComponentService_ts_template.json');
const src_Components_Main_tsx_template = require('lib/templates/src/Components/Main_tsx_template.json');
const src_Component_List_tsx_template = require('lib/templates/src/Components/List_tsx_template.json');
const src_Component_Details_tsx_template = require('lib/templates/src/Components/Details_tsx_template.json');

const questions = [
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
		updater(
			src_Types_StateTypes_StoreStateType_ts_template,
			answers.componentName
		);

		// Add new import and route to the Components/App.tsx file
		updater(src_Components_App_tsx_template, answers.componentName);

		// Add new import and Reducer to the RootReducer.ts
		updater(src_Reducers_RootReducer_ts_template, answers.componentName);

		// Add Route to the index.tsx file
		updater(src_index_tsx_template, answers.componentName);
		// #endregion [REGION_CODE_GOLD] Update Common Files

		// #region [REGION_CODE_BLUE] Generate Dynamic Files

		// Generate [ComponentName]StateType.ts
		generator(
			src_Types_StateTypes_ComponentStateType_ts_template,
			'',
			answers.componentName
		);

		// Generate [ComponentName]ModelType.ts
		generator(
			src_Types_ModelTypes_ComponentModelType_ts_template,
			'',
			answers.componentName
		);

		// Generate [ComponentName]ActionType.ts
		generator(
			src_Types_ActionTypes_ComponentActionType_ts_template,
			'',
			answers.componentName
		);

		// Generate [ComponentName]Reducer.ts
		generator(
			src_Reducers_ComponentReducer_ts_template,
			'',
			answers.componentName
		);

		// Generate I[ComponentName]ActionInterface.ts
		generator(
			src_Actions_Interfaces_IComponentAction_ts_template,
			'',
			answers.componentName
		);

		// Generate [ComponentName]Actions.ts
		generator(
			src_Actions_ComponentAction_ts_template,
			'',
			answers.componentName
		);

		// Generate [ComponentName]Services.ts
		generator(
			src_Services_ComponentService_ts_template,
			'',
			answers.componentName
		);

		// Generate  Components
		generator(src_Components_Main_tsx_template, '', answers.componentName);
		generator(src_Component_List_tsx_template, '', answers.componentName);
		generator(
			src_Component_Details_tsx_template,
			'',
			answers.componentName
		);
		// #endregion [REGION_CODE_BLUE] Generate Dynamic Files
	});
};
