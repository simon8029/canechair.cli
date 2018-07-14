require('rootpath')();
const generator = require('gen/common/generator');
let editorconfig_template = require('lib/templates/editorconfig_template.json');

module.exports = function() {
	generator(editorconfig_template);
};
