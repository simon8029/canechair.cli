require('rootpath')();
const generator = require('gen/common/generator');

const Path_ts_template = require('lib/templates/src/Settings/Path_ts_template.json');

module.exports = function() {
	generator(Path_ts_template);
};
