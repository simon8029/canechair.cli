class Command { // 定义 Command 类  
  constructor(instance) { // 构造函数
    if (!instance) {  // 如果没有传入 Command 实例 
      throw new Error('Command instance is required'); // 抛出错误
    }

    this.program = instance;
    const cmd = this.program.command(this.command); // 调用实例的 command 方法
    cmd.description(this.description); // 命令描述
    cmd.hook('preAction', () => { // 注册 preAction 钩子  
      this.preAction();
    })

    cmd.hook('postAction', () => { // 注册 postAction 钩子
      this.postAction();
    })

    if (this.options?.length > 0) { // 如果有参数配置, 则遍历参数配置, 依次调用 option 方法, 为命令添加参数, 例如: -f, --force, 是否强制初始化项目, 用法: init [name] -f, --force
      this.options.forEach(option => {
        cmd.option(...option);
      })
    }
    cmd.action((...args) => {// 命令的具体实现
      this.action(...args);
    })
  }


  get command() { // 定义 command 方法
    throw new Error('command() method should be implemented'); // 抛出错误
  }
  get description() {
    throw new Error('description() method should be implemented'); // 抛出错误
  }

  get options() {
    return []; // 返回参数配置
  }

  action([name, opts]) {
    console.log("init", name, opts)
  }

  preAction() {
    return () => { }
  }

  postAction() {
    return () => { }
  }

}

export default Command;  // 导出 Command 类
