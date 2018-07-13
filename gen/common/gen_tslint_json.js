require('rootpath')();
const generator = require('gen/common/generator');

const tslint_json_template = require('lib/templates/tslint_json_template.json');

module.exports = function() {
	generator(tslint_json_template);
};
