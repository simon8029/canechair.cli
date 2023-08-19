import path from "node:path";
import { execa } from "execa";

const cccLi = path.join(__dirname, "../bin/cli.js");
const bin = () => (...args) => execa(cccLi, args);

it("should run jest properly", () => {
  expect(1 + 1).toBe(2);
});

test("run error command", async () => {  // 测试 cccli aaa 命令, 期望打印 error
  const { stderr } = await bin()("aaa");
  console.log(`stderr:`, stderr);
  expect(stderr).toContain("CCCli ERR! 未知的命令: aaa");
})

it("should not throw error when use --help/-h", async () => {
  let error = null;
  try {
    await bin()("--help");
  }
  catch (e) {
    error = e;
  }
  expect(error).toBeNull();
});

it("should be able to show version correctly when use '--version'", async () => {
  const { stdout } = await bin()("--version");
  expect(stdout).toContain(require("../package.json").version);
});

it("should be able to enable debug node", async () => {
  let error = null
  try {
    await bin()("--debug");
  } catch (e) {
    console.log(`e:`, e);
    error = e;
  }

  expect(error.message).toContain("开启 debug 模式");
});