// Must use CommonJs and ES5 since this file isn't transpiled.

// Register babel to transpile before the tests run
require('babel-register')();

// disable webpack features the Mocha doesn't understand
require.extensions['css'] = function () { };
