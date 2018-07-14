require('rootpath')();

const colors = require('colors');
const inquirer = require('inquirer');
const rimraf = require('rimraf');

// const { types } = require('./values');
const gen_editorconfig = require('gen/common/gen_editorconfig');
const gen_package_json = require('gen/common/gen_package_json');
const gen_tsconfig_json = require('gen/common/gen_tsconfig_json');
const gen_tslint_json = require('gen/common/gen_tslint_json');
const gen_public_index_html = require('gen/public/gen_public_index_html');
const gen_index_tsx = require('gen/src/gen_index_tsx');
const gen_app_tsx = require('gen/src/Components/gen_app_tsx');
const gen_store_ts = require('gen/src/Store/gen_store_ts');
// const gen_root_reducer_ts = require('gen/src/Reducers/RootReducer_ts');
const gen_component_sample = require('./src/Components/gen_component_sample');

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
	rimraf(`${currentWorkingFolder}/*`, function() {});

	inquirer.prompt(questions).then(function(answers) {
		// Generate .editorconfig file
		gen_editorconfig(answers.appName);

		// Generate package.json file
		gen_package_json(answers.appName);

		// Generate tsconfig.json file.
		gen_tsconfig_json();

		// // Generate tslint.json file.
		gen_tslint_json();

		// // Generate public/index.html file.
		gen_public_index_html(answers.appName);

		// // Generate index.tsx file
		gen_index_tsx(answers.componentName);

		// // Generate Components/App.tsx file
		gen_app_tsx(answers.componentName);

		// // Generate Store.ts
		gen_store_ts();

		// Generate RootReducer.ts
		// gen_root_reducer_ts();
		// Genrate StoreStateType.ts
		// Generate Settings/Path.ts

		// Generate [ComponentName]StateType.ts
		// Generate [ComponentName]ModelType.ts
		// Generate [ComponentName]ActionType.ts

		// Generate [ComponentName]Reducer.ts

		// Generate I[ComponentName]ActionInterface.ts

		// Generate [ComponentName]Actions.ts

		// Generate [ComponentName]Services.ts

		// Generate Sample Components
		// gen_component_sample(answers.ComponentName);
	});
};
