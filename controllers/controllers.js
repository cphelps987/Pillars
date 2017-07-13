var express = require("express");
var router = express.Router();
var passport = require("passport");

var orm = require('../config/orm.js');


orm.selectWhere("chatTable", "link", "https://www.google1.com/");

orm.selectUser("role", "username", "verifiedUser", "userTable", "verifiedUser", "verified");
orm.selectUser("role", "username", "verifiedUser", "userTable", "verifiedUser", "notVerified");
orm.adminView();

//orm.selectwhere("")


//(tableInput, colToSearch, valOfCol)


// This calls out the user information of those who have been flagged 3 or more times
orm.selectFlagged("userTable", "flagged", 2, "flagged");

// This calls out the questions and asnwers from the FAQ table
orm.selectFAQ("questions", "answers", "faqTable");

//BASE
router.get('/', function(req, res) {

  res.render("index.handlebars");

});

router.get('/about', function(req, res) {

  res.render("about.handlebars");

});

router.get('/faq', function(req, res) {

  connection.query("SELECT * FROM faqtable;", function(err, data) {
    if (err) {
      throw err;
    }
    res.render("faq.handlebars", { faqtable: data });
  });

});

router.get('/search', function(req, res) {

  res.render("search.handlebars");

});

router.get('/termsofservice', function(req, res) {

  res.render("termsofservice.handlebars");

});

router.get('/tos', function(req, res) {

  res.render("termsofservice.handlebars");

});

//USER
router.get('/admin', function(req, res) {

  res.render("admin.handlebars");

});


router.get('/user', function(req, res) {

  res.render("user.handlebars");

});

router.get('/signup', function(req, res) {

  res.render("signup.handlebars");

});

//CHAT
router.get('/plinth', function(req, res) {

  res.render("chat.handlebars");

});

//RESOURSES
router.get('/chapiter', function(req, res) {

  res.render("resources.handlebars");

});

//TEST LINKS
router.get('/chattest', function(req, res) {

  res.render("chattest.handlebars");

});

router.get('/register', function(req, res) {

    res.render("signup");

});

router.post('/register',
    passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    })
);

router.get('/login', function(req, res) {

    res.render("login");
    console.log("LOGIN WORKKSSSSSSSSSS");

});

router.post('/login',
    passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true
    })
);

module.exports = router;