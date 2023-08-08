'use strict';

const Command = require("@canechair-cli/command");


class InitCommand extends Command {
  constructor(instance) {
    super(instance);

  }
}

function Init() {
  return new InitCommand();
}

module.exports = Init;