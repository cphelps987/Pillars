var express = require("express");
var router = express.Router();
var passport = require("passport");

router.get('/', function(req, res) {

  res.render("index.handlebars");

});

router.get('/admin', function(req, res) {

  res.render("admin.handlebars");

});

router.get('/plinth', function(req, res) {

  res.render("chat.handlebars");

});

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
        failureRedirect: '/register',
        failureFlash: true
    })
);



module.exports = router;