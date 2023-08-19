import utils from '@canechair-cli/utils';

process.on("uncaughtException", (e) => printErrorLog(e, "Error")); // 未捕获的异常会导致进程退出 (process.exit(1)) 而不是打印异常信息 (console.error(err))

process.on("unhandledRejection", (e) => printErrorLog(e, "Promise Error")); // 未捕获的异常会导致进程退出 (process.exit(1)) 而不是打印异常信息 (console.error(err))

function printErrorLog(err, type) {
  if (utils.isDebugMode()) {
    utils.log.error(type, err.message, err); // 如果是调试模式, 则打印完整的异常堆栈信息, 否则只打印异常信息, 不打印异常堆栈信息, 例如: Error: cccli 需要安装 v12.0.0 以上版本的 Node.js
  }
  else {
    utils.log.error(type, err.message);  // 如果是非调试模式, 则只打印异常信息, 不打印异常堆栈信息, 例如: Error: cccli 需要安装 v12.0.0 以上版本的 Node.js
  }
}