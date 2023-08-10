import Command from "@canechair-cli/command";
import * as utils from "@canechair-cli/utils";

class InitCommand extends Command {
  constructor(instance) {
    super(instance);
    this.program = instance; // 将传入的实例赋值给 this.program

    this.program // 调用实例的 command 方法
      .command(this.command) // 命令名称  
      .description('初始化项目') // 命令描述
      .option('-f, --force', '是否强制初始化项目')  // 参数配置
      .action((name, opts) => { // 命令的具体实现 
        console.log("init", name, opts) // 打印 init name opts
      })
  }

  get command() {
    return 'init [name]'; // 返回命令名称
  }
  get description() {
    return 'init project'; // 返回命令描述
  }

  get options() {
    return [
      ['-f, --force', 'overwrite target directory if it exist'], // 返回参数配置 ,
      ['--debug', 'display debug logs']
    ]
  }

  action(name, opts) {
    utils.log.verbose("init", name, opts);
  }
}

function Init(instance) {
  return new InitCommand(instance);
}

export default Init;