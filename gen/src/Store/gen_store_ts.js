require('rootpath')();
const generator = require('gen/common/generator');

let store_ts_template = require('lib/templates/src/Store/Store_ts_template.json');

module.exports = function(componentName) {
	generator(store_ts_template, '', componentName);
};
