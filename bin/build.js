#!/usr/bin/env node

require('shelljs/global');
const figlet = require('figlet');
const chalk = require('chalk');

const build = (appName) => {
    cp('-r', __dirname + '/../canechair-template/.', appName);
    console.log('----------------------------------------------------------');
    figlet('CaneChair.Cli', function (err, data) {
        if (err) {
            return;
        }
        console.log(data);
        console.log('----------------------------------------------------------');
        console.log(chalk.green.bold('Welcome to canechair.cli!'));
        console.log('----------------------------------------------------------');
        cd(appName);
    });
}
module.exports = build;