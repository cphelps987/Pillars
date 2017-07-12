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

//flash to show a message on incorrect login
app.use(flash());

//passport middleware
 app.use(passport.initialize());
 app.use(passport.session());

//express-session to keep the user logged in
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}));

orm = require('./config/orm.js');

var routes = require('./controllers/controllers.js');

require('./emoji.js');
require('./passport.js')(passport);
require('./chalk.js');

// require('./socketIO.js')

app.use("/", routes);

orm.selectWhere("chatTable", "link", "https://www.google1.com/");
//orm.selectwhere("")



// This calls out the user information of those who have been flagged 3 times
orm.selectWhere("userTable", "flagged", 3);

orm.selectFlagged("userTable", "flagged", 2, "flagged");

app.listen(port, function () {
    console.log("Listening on PORT " + port);
});



