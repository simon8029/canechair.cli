function isDebugMode() {
  const isDebugMode = process.argv.includes("--debug") || process.argv.includes("-d");
  return isDebugMode;
}

export default isDebugMode;