import { program } from 'commander';
import chalk from 'chalk';
import pkg from '../package.json' assert { type: "json" };
import createInitCommand from '@canechair-cli/init';
import * as utils from '@canechair-cli/utils';
import { gte } from 'semver';

export default function (args, options) {
  utils.default.log.info('package version', pkg.version);

  function checkNodeVersion() {
    const currentVersion = process.version;
    const lowestVersion = pkg.engines.node;

    utils.default.log.verbose('ndoe version', 'current Node Version', currentVersion);
    if (!gte(currentVersion, lowestVersion)) {
      throw new Error(chalk.red(`cccli 需要安装 v${lowestVersion} 以上版本的 Node.js`));
    }
  }

  function preAction(cmd) {
    checkNodeVersion();
  }

  process.on('uncaughtException', (err) => {
    // log.error(err.message);
    if (utils.default.isDebugMode()) {
      utils.default.log.verbose(err);
    }
    else {
      utils.default.log.error(err.message);
    }

    process.exit(1);
  });


  program
    .name(Object.keys(pkg.bin)[0])
    .usage('<command> [options]')
    .version(pkg.version)
    .option('-d, --debug', '是否开启调试模式', false)
    .hook('preAction', preAction);


  createInitCommand(program);

  program.parse(process.argv);
}