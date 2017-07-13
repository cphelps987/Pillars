/**
 * Created by courtneyphelps on 7/13/17.
 */
var express = require("express");
var router = express.Router();
var passport = require("passport");
var orm = require('../config/orm.js');

/*
 orm.selectWhere("chatTable", "link", "https://www.google1.com/");
 orm.selectRole("role", "username", "verifiedUser", "userTable", "role", "user");
 orm.selectRole("role", "username", "verifiedUser", "userTable", "role", "mod");
 orm.selectRole("role", "username", "verifiedUser", "userTable", "role", "admin");
 orm.selectLinkTable("title", "description", "link", "facebook", "twitter", "other", "linksTable");
 orm.selectUserTable("userName", "userScore", "role", "verifiedUser", "userTable");
 orm.selectFlagged("userTable", "flagged", 2, "flagged");
 orm.selectFAQ("questions", "answers", "faqTable");
 */

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
    orm.selectFAQ("questions", "answers", "faqTable", function (err, results) {
        /* if (err) {
         throw err;
         }
         var faqData = results;
         console.log(faqData)*/

    });

    res.render("faq.handlebars", {faqtable: results})
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

    connection.query("SELECT * FROM usertable;", function(err, data) {
        if (err) {
            throw err;
        }
        res.render("admin.handlebars", { usertable: data });
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

});

router.post('/login',
    passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true
    })
);

module.exports = router;