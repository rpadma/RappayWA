var express     = require('express');
var logger      = require('morgan');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var read = require('read-yaml');
var _ = require('lodash');


//Route configuration file reference

var AuthRoutes = require('./Routes/RouteAuth');


// Load Configurations
var config = read.sync('./configuration/configuration.yaml');
var database_config = config.Database;
var server_config = config.Server;
var comments_config = config.StatusMessages;


var hasCredentials = !(_.isEmpty(database_config.user) || _.isEmpty(database_config.password));

if (hasCredentials) {
    mongoose.connect('mongodb://' +
        database_config.user + ':' +
        database_config.password + '@' +
        database_config.host + ':' +
        database_config.port + '/' +
        database_config.database,
        function (err) {
            // If there is an Error, Log a Connection Error
            if (err) console.log(comments_config.connectionError);
            // Otherwise, Log that the Connection was Successful
            else console.log(comments_config.connectionSuccess);
        });
}
// If No Username or Password is Provided, then Attempt to Connect
// Without the Credentials.
else {
    mongoose.connect('mongodb://' +
        database_config.host + ':' +
        database_config.port + '/' +
        database_config.database,
        function (err) {
            // If there is an Error, Log a Connection Error
            if (err) console.log(comments_config.connectionError);
            // Otherwise, Log that the Connection was Successful
            else console.log(comments_config.connectionSuccess);
        });
}


// Launching Express
var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', AuthRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ message: "Error" });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
      res.json({ message: "Prod Error" });

});


module.exports = app;



var listening_port = process.env.PORT || server_config.port;
