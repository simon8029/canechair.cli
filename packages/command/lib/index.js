class Command { // 定义 Command 类  
  constructor(instance) { // 构造函数
    if (!instance) {  // 如果没有传入 Command 实例 
      throw new Error('Command instance is required'); // 抛出错误
    }

    this.program = instance; // 将传入的实例赋值给 this.program

    this.program // 调用实例的 command 方法
      .command(this.command) // 命令名称  
      .description('初始化项目') // 命令描述
      .option('-f, --force', '是否强制初始化项目')  // 参数配置
      .action((name, opts) => { // 命令的具体实现 
        console.log("init", name, opts) // 打印 init name opts
      })

  }
  get command() { throw new Error('command() needs to be implemented') }
}

module.exports = Command;  // 导出 Command 类
