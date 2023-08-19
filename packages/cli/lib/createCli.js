import utils from '@canechair-cli/utils';
import chalk from 'chalk';
import { program } from 'commander';
import { dirname } from 'dirname-filename-esm';
import fse from 'fs-extra';
import path from 'node:path';
import { gte } from 'semver';

const pkgPath = path.resolve(dirname(import.meta), '../package.json');
const pkg = fse.readJsonSync(pkgPath);

function checkNodeVersion() {
  const currentVersion = process.version;
  const lowestVersion = pkg.engines.node;

  utils.log.verbose('ndoe version', 'current Node Version', currentVersion);
  if (!gte(currentVersion, lowestVersion)) { // 如果当前 Node.js 版本小于指定的最低版本, 则抛出异常, 例如: cccli 需要安装 v12.0.0 以上版本的 Node.js
    throw new Error(chalk.red(`cccli 需要安装 v${lowestVersion} 以上版本的 Node.js`));
  }
}

function preAction() {
  checkNodeVersion(); // 检查 Node.js 版本 
}
export default function createCli() {
  // utils.log.info('package version', pkg.version);  // 打印 cccli 的版本号, 例如: 1.0.0


  program
    .name(Object.keys(pkg.bin)[0])
    .usage('<command> [options]')
    .version(pkg.version)
    .option('-d, --debug', '是否开启调试模式', false)
    .hook('preAction', preAction);

  program.on('command:*', function (obj) {
    utils.log.error('未知的命令:', obj[0]); // 如果输入了未知的命令, 则打印未知的命令, 例如: cccli init1

    const availableCommands = program.commands.map(cmd => cmd.name()); // 获取所有可用的命令, 例如: init
    console.log(`availableCommands:`, availableCommands);
    if (availableCommands.length > 0) {
      utils.log.info('可用命令:', availableCommands.join(', ')); // 打印可用的命令, 例如: init
    }
  });

  program.on('option:debug', function () {
    if (program.opts().debug) {
      utils.log.verbose('debug', '开启 debug 模式'); // 如果开启了 debug 模式, 则打印 debug 开启 debug 模式
    }

  });

  return program;
}