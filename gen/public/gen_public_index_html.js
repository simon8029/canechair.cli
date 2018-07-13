require('rootpath')();
const generator = require('gen/common/generator');

let index_html_template = require('lib/templates/public/index_html_template.json');

module.exports = function(appName) {
	generator(index_html_template, appName);
};
