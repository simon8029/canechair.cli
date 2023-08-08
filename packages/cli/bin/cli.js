#!/usr/bin/env node

const importLocal = require("import-local");
const log = require("npmlog");
const entry = require("../lib");

if(importLocal(__filename)) { 
    log.info("cli", "正在使用 cccli 本地版本");
} else {
    entry(process.argv.slice(2));
}
