require('rootpath')();

const generator = require('gen/common/generator');
let { Main_tsx } = require('lib/templates/src/Components/Sample/Main.js');

let { List_tsx } = require('lib/templates/src/Components/Sample/List.js');
let { Details_tsx } = require('lib/templates/src/Components/Sample/Details.js');

// let gen_component = require('./gen_component');

module.exports = function(ComponentName) {
	// #region [REGION_CODE_GOLD] Generate Component
	// Generate main.tsx file
	generator(
		Main_tsx,
		`src/Components/${ComponentName}`,
		ComponentName,
		'Main'
	);

	// Generate List.tsx file
	generator(
		List_tsx,
		`src/Components/${ComponentName}`,
		ComponentName,
		'List'
	);

	// Generate Details.tsx file
	generator(
		Details_tsx,
		`src/Components/${ComponentName}`,
		ComponentName,
		'Details'
	);

	// #endregion End of Generate Component

	// #region [REGION_CODE_BLUE] Generate Types
	// Generate main.tsx file
	// gen_component(Main_tsx, ComponentName, 'Main');

	// Generate List.tsx file
	// gen_component(List_tsx, ComponentName, 'List');

	// Generate Details.tsx file
	// gen_component(Details_tsx, ComponentName, 'Details');

	// #endregion End of Generate Types
};
