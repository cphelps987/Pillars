/**
 * Created by courtneyphelps on 7/6/17.
 */
/**
 * Created by courtneyphelps on 7/3/17.
 */
//express and body parser
var express = require ("express");
var bodyParser = require ("body-parser");
var exphbs = require ("express-handlebars");

var app = express();
var port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false}));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine","handlebars");

var routes = require('./controllers/controllers.js');
require('./passport.js')

app.use("/", routes);


app.listen(port, function () {
    console.log("Listening on PORT " + port);
});