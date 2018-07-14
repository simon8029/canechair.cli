require('rootpath')();
const generator = require('gen/common/generator');

let StoreStateType_ts_template = require('lib/templates/src/Types/StateTypes/StoreStateType_ts_template.json');

module.exports = function(componentName) {
	generator(StoreStateType_ts_template, '', componentName);
};
