require('rootpath')();
const generator = require('gen/common/generator');

let index_tsx_template = require('lib/templates/src/index_tsx_template.json');

module.exports = function(componentName) {
	console.log(`componentName:`, componentName);
	generator(index_tsx_template, '', componentName);
};
