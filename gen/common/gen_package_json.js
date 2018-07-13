require('rootpath')();
const generator = require('gen/common/generator');
let package_json_template = require('lib/templates/package_json_template.json');

module.exports = function(appName) {
	generator(package_json_template, appName);
};
