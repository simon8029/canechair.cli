#!/usr/bin/env node

const program = require('commander');

// import function to list coffeee menu
const init = require('../gen/init');

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

// Order a coffee
// $ coffee-shop order
// $ coffee-shop o
// program
// 	.command('new') // sub-command name
// 	.alias('n') // alternative sub-command is `n`
// 	.description('Order a coffee') // command description

// 	// function to execute when command is uses
// 	.action(function() {
// 		order();
// 	});

// allow commander to parse `process.argv`
program.parse(process.argv);
