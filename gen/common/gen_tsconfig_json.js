require('rootpath')();
const generator = require('gen/common/generator');
const tsconfig_json_template = require('lib/templates/tsconfig_json_template.json');

module.exports = function() {
	generator(tsconfig_json_template);
};
