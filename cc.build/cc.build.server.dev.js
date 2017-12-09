process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// const
// configureMongoose = require('./config/mongoose'),
// configurePassport = require('./config/passport'),
// db = configureMongoose(),
// passport = configurePassport();
const Express = require('../settings/cc.settings.express');
import Path from 'path';
import Open from 'open';
import Chalk from 'chalk';
import Webpack from 'webpack';
import WebpackConfigDev from '../webpack.config.dev';

const
  App = Express(),
  Port = 8029,
  Compiler = Webpack(WebpackConfigDev);

App.use(require('webpack-dev-middleware')(Compiler, {
  noInfo: true,
  publicPath: WebpackConfigDev.output.publicPath
}))

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
