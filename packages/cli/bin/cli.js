#!/usr/bin/env node

import importLocal from "import-local";
import * as utils from "@canechair-cli/utils";
import entry from "../lib/index.js";

console.log(`process.argv:`, process.argv);

if (importLocal(new URL(import.meta.url).pathname)) {
    utils.default.log.info("cli", "正在使用 cccli 本地版本");
} else {
    entry(process.argv.slice(2));
}
