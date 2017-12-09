process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const
  // configureMongoose = require('./config/mongoose'),
  // configurePassport = require('./config/passport'),
  // db = configureMongoose(),
  // passport = configurePassport();
  Express = require('../settings/cc.settings.express'),
  Path = require('path'),
  Open = require('open'),
  Chalk = require('chalk'),
  App = Express(),
  Port = 8029;


App.get('/', (req, res) => {
  res.sendFile(Path.join(__dirname, '../src/index.html'));
});

App.listen(Port, (err) => {
  if (err) {
    console.log(err);
  } else {
    Open('http://localhost:' + Port);
  }
});

module.exports = App;

console.log(Chalk.green(`[dev-mode] Server running at http://localhost:${Port}`));
