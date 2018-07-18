#!/usr/bin/env node

const program = require('commander');

// import function to list coffeee menu
const init = require('../gen/init');
const gen_new_component = require('../gen/gen_new_component');

// import function to order a coffee
// const order = require('../lib/order');

/*******************************************/

program
	.command('init') // sub-command name
	.alias('i') // alternative sub-command is `al`
	.description('Initiate new project') // command description

	// function to execute when command is uses
	.action(function() {
		init();
	});

program
	.command('new') // sub-command name
	.alias('n') // alternative sub-command is `n`
	.description('Create New Component') // command description

	// function to execute when command is uses
	.action(function() {
		gen_new_component();
	});

// allow commander to parse `process.argv`
program.parse(process.argv);
