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

var orm = require('./config/orm.js');

var routes = require('./controllers/controllers.js');

require('./emoji.js');
require('./passport.js')(passport);
require('./chalk.js');

// require('./socketIO.js')

app.use("/", routes);

//test
orm.selectWhere("chatTable", "link", "https://www.google1.com/");

orm.selectRole("role", "username", "verifiedUser", "userTable", "role", "user");
orm.selectRole("role", "username", "verifiedUser", "userTable", "role", "mod");
orm.selectRole("role", "username", "verifiedUser", "userTable", "role", "admin");

orm.selectLinkTable("title", "description", "link", "facebook", "twitter", "other", "linksTable");

orm.selectUserTable("userName", "userScore", "role", "verifiedUser", "userTable");


// This calls out the user information of those who have been flagged 3 or more times
orm.selectFlagged("userTable", "flagged", 2, "flagged");

// This calls out the questions and asnwers from the FAQ table
orm.selectFAQ("questions", "answers", "faqTable");

app.listen(port, function () {
    console.log("Listening on PORT " + port);
});



