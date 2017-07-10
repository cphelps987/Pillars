var express = require("express");
var router = express.Router();

router.get('/', function(req, res) {

  res.render("index.handlebars");

});

router.get('/admin', function(req, res) {

  res.render("admin.handlebars");

});

router.get('/plinth', function(req, res) {

  res.render("chat.handlebars");

});

module.exports = router;