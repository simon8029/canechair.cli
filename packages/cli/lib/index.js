import './exception.js'; // 为了让异常处理生效, 必须在最前面引入, 否则会被后面的代码覆盖, 从而导致异常处理失效, 例如: 未捕获的异常会导致进程退出 (process.exit(1)) 而不是打印异常信息 (console.error(err)) 
import createInitCommand from '@canechair-cli/init';
import createCli from './createCli.js';

export default function (args) {
  const program = createCli(); // 创建 init 命令
  createInitCommand(program); // 解析命令行参数,
  program.parse(process.argv); // 如果没有传递任何参数, 则打印帮助信息.
}