#!/usr/bin/env node

import importLocal from "import-local";
import utils from "@canechair-cli/utils";
import entry from "../lib/index.js";
import { filename } from "dirname-filename-esm"

if (importLocal(filename(import.meta))) {
    utils.log.info("cli", "正在使用 cccli 本地版本");
} else {
    // console.log(`process.argv:`, process.argv);
    entry(process.argv.slice(2));
}
