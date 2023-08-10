import log from "npmlog";
import isDebugMode from "./isDebugMode.js";

if (isDebugMode()) {
  log.level = "verbose";
} else {
  log.level = process.env.LOG_LEVEL || "info";
}

log.heading = "CCCli";

export default log;