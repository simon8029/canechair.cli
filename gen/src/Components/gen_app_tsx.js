require('rootpath')();
const generator = require('gen/common/generator');

let app_tsx_template = require('lib/templates/src/Components/App_tsx_template.json');

module.exports = function(componentName) {
	generator(app_tsx_template, '', componentName);
};
