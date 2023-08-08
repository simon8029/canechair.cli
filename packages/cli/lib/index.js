const commander = require('commander');
const { program } = commander;
const pkg = require('../package.json');

module.exports = function (args, options) {
  console.log('args', args); // 打印 args
  program
    .name(Object.keys(pkg.bin)[0])
    .usage('<command> [options]')
    .version(pkg.version)
    .option('-d, --debug', '是否开启调试模式???', false);



  program.parse(process.argv);
}