const Express = require('express'), //Fast, unopinionated, minimalist web framework for node
  Morgan = require('morgan'), //HTTP request logger middleware for node.js
  Compression = require('compression'), //Node.js compression middleware. Support deflate ang gzip
  BodyParser = require('body-parser'), // Node.js body parsing middleware. Parse incoming request bodies
  MethodOverride = require('method-override'), //  use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
  Session = require('express-session'), // Create a session middleware with the given options.
  Passport = require('passport'), // Authentication middleware for Node.js
  ConnectFlash = require('connect-flash'), // A special area of the session used for storing messages.
  CCSettings = require('./cc.settings');

module.exports = function () {
  // Create a new instance of an Express application.
  const App = Express();

  if (process.env.NODE_ENV === 'dev') {
    App.use(Morgan('dev'));
  } else if (process.env.NODE_ENV === 'prod') {
    App.use(compress());
  }

  App.use(BodyParser.urlencoded({
    extended: true
  }));

  App.use(BodyParser.json());

  App.use(MethodOverride());

  // The session middleware adds a session object to all request objects in the Application. Using this session object to set or get any property that use in the current session.
  // Uncomment below if using session.
  // App.use(Session({
  //   saveUninitialized: true,
  //   resave: true,
  //   secret: "your secret string here"
  // }));

  // Uncomment if using ejs
  // App.set('views', './App/views');
  // App.set('view engine', 'ejs');

  App.use(ConnectFlash());

  App.use(Passport.initialize());
  App.use(Passport.session());

  // Require routing file and call it as a function, passing it the Application instance as an argument.
  // example: require('../App/routes/index.server.routes.js')(App);


  // The Express.static() middleware takes one argument to detemine the location of the "static" folder. 
  // Should be placed below the call for the routing file. This order matters because if it were above it, Express would first try to look for HTTP request paths in the static files folder. This would make the response a lot slower as it would have to wait for a filesystem I/O operation.
  //App.use(Express.static('./public'));

  return App;
}
