require('rootpath')();
const generator = require('gen/common/generator');

let RootReducer_ts_template = require('lib/templates/src/Reducers/RootReducer_ts_template.json');

module.exports = function(componentName) {
	generator(RootReducer_ts_template, '', componentName);
};
