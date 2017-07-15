
var express = require("express");
var router = express.Router();
var passport = require("passport");
var orm = require('../config/orm.js');

//orm.selectWhere("chatTable", "link", "https://www.google1.com/");
//orm.selectRole("role", "username", "verifiedUser", "userTable", "role", "user");
//orm.selectRole("role", "username", "verifiedUser", "userTable", "role", "mod");
//orm.selectRole("role", "username", "verifiedUser", "userTable", "role", "admin");
//orm.selectLinkTable("title", "description", "link", "facebook", "twitter", "other", "linksTable");
//orm.selectUserTable("userName", "userScore", "role", "verifiedUser", "userTable");
//orm.selectFlagged("userTable", "flagged", 2, "flagged");
//orm.selectFAQ("questions", "answers", "faqTable");


//BASE
router.get('/', function(req, res) {

    console.log(req.session.passport);

    if (req.session.passport != undefined) {

        res.render("index", {loginUser: req.session.passport});

    } else {
        res.render("index")
    }

});

router.get('/about', function(req, res) {

    res.render("about.handlebars");

});

router.get('/faq', function(req, res) {

    // This calls out the questions and answers from the FAQ table
    orm.selectFAQ("questions", "answers", "faqTable", function (faq){
        res.render("../views/faq.handlebars", {faqtable: faq})
    });
});

//RESOURSES
router.get('/chapiter', function(req, res) {
    orm.selectLinkTable("title", "description", "link", "facebook", "twitter", "other", "linksTable", function(resource){
       //console.log(resource);
        res.render("../views/resources.handlebars", {resourceThis: resource});
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

router.get('/plinth/:title', function(req, res) {
    connection.query("SELECT * FROM chattable where title = ?", [req.params.title], function(err, data) {

        if (err) {
            throw err;
        }

        if (data) {
            res.render("chatroom.handlebars", { chattable: data });
            console.log("RoomData", data);

        } else {

            res.render("error.handlebars");
            console.log("MF ERROR MF");
        }

    });
});

//ADMIN
router.get('/admin', function(req, res) {
    orm.selectUserTable("userName", "userScore", "role", "verifiedUser", "userScore", "flagged", "userTable", function(data){
        res.render("admin.handlebars", {adminTable: data});
    });
});

router.get('/adminResources', function(req, res) {
    orm.selectLinkTable("title", "description", "link", "facebook", "twitter", "other", "resourceScore", "linksTable", function(data){
        //console.log(data);
        res.render("admin.resources.handlebars", {resourceTable: data});
    });
});

router.post("/create_resource", function(req, res) {

    var resource = {
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        other: req.body.other,
        //other_link: req.body.other_link
    };

    connection.query("INSERT INTO linkstable SET ?", resource, function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/admin');

        console.log("User Input", this);

    });
});


router.get('/adminUser', function(req, res) {
    orm.selectUserTable("userName", "userScore", "role", "verifiedUser", "userScore", "flagged", "userTable", function(data){
        //console.log(data);
        res.render("admin.user.handlebars", {userTable: data});
    });
});

router.get('/adminChats', function(req, res) {
    orm.selectUserTable("userName", "userScore", "role", "verifiedUser", "flagged", "userScore", "userTable", function(data){
        //console.log(data);
        res.render("admin.chats.handlebars", {chatsTable: data});
    });
});

router.get('/adminFaq', function(req, res) {
    orm.selectFAQ("questions", "answers", "faqTable", function(data){
        //console.log(data);
        res.render("admin.faq.handlebars", {faqTable: data});
    });
});


//);
//orm.selectFlagged("userTable", "flagged", 2, "flagged");



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

});

router.post('/login',
    passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true
    })
);

module.exports = router;
