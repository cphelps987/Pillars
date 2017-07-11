//express and body parser
var express = require("express");
var flash = require('connect-flash');
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var session = require('express-session');
var passport = require('passport');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//flash to show a message if there's an incorrect login
//app.use(flash());

//passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

orm = require('./config/orm.js');

var routes = require('./controllers/controllers.js');

require('./passport.js');
require('./emoji.js');
require('./chalk.js');
// require('./socketIO.js')

app.use("/", routes);

orm.selectWhere("chatTable", "link", "https");

app.listen(port, function () {
    console.log("Listening on PORT " + port);
});



