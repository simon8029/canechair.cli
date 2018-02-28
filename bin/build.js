#!/usr/bin/env node

require('shelljs/global');
const figlet = require('figlet');
const chalk = require('chalk');

const build = (appName, template) => {
    cp('-r', __dirname + '/../canechair-template.ts/.', appName);
    // if (template === "ts") {
    //     cp('-r', __dirname + '/../canechair-template.ts/.', appName);
    // } else if (template === "flow") {
    //     cp('-r', __dirname + '/../canechair-template.flow/.', appName);
    // } else {
    //     cp('-r', __dirname + '/../canechair-template/.', appName);
    // }
    console.log('----------------------------------------------------------');
    figlet('CaneChair.Cli', function (err, data) {
        if (err) {
            return;
        }
        console.log(data);
        console.log('----------------------------------------------------------');
        console.log(chalk.green.bold('Enjoy the rocking!'));
        console.log('----------------------------------------------------------');
        cd(appName);
    });
}
module.exports = build;