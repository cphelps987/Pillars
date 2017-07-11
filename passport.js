/*
var express = require('express');
var path = require('path');


module.exports = function (app) {

    console.log("Passport Linked");
    var passport = require('passport');
    var Strategy = require('passport-local').Strategy;
// Create a new Express application.
    var app = express();
    var db = app.use('./db', express.static(path.join(__dirname, 'db')));


    // Configure the local strategy for use by Passport.
    //
    // The local strategy require a `verify` function which receives the credentials
    // (`username` and `password`) submitted by the user.  The function must verify
    // that the password is correct and then invoke `cb` with a user object, which
    // will be set at `req.user` in route handlers after authentication.
    passport.use(new Strategy(
        function (username, password, cb) {
            db.users.findByUsername(username, function (err, user) {
                if (err) {
                    return cb(err);
                }
                if (!user) {
                    return cb(null, false);
                }
                if (user.password != password) {
                    return cb(null, false);
                }
                return cb(null, user);
            });
        }));

    // Configure Passport authenticated session persistence.
    //
    // In order to restore authentication state across HTTP requests, Passport needs
    // to serialize users into and deserialize users out of the session.  The
    // typical implementation of this is as simple as supplying the user ID when
    // serializing, and querying the user record by ID from the database when
    // deserializing.
    passport.serializeUser(function (user, cb) {
        cb(null, user.id);
    });

    passport.deserializeUser(function (id, cb) {
        db.users.findById(id, function (err, user) {
            if (err) {
                return cb(err);
            }
            cb(null, user);
        });
    });

    // Configure view engine to render EJS templates.
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');

    // Use application-level middleware for common functionality, including
    // logging, parsing, and session handling.
    app.use(require('morgan')('combined'));
    app.use(require('cookie-parser')());
    app.use(require('body-parser').urlencoded({extended: true}));
    app.use(require('express-session')({secret: 'keyboard cat', resave: false, saveUninitialized: false}));

    // Initialize Passport and restore authentication state, if any, from the
    // session.
    app.use(passport.initialize());
    app.use(passport.session());

    // Define routes.
    app.get('/',
        function (req, res) {
            res.render('home', {user: req.user});
        });

    app.get('/login',
        function (req, res) {
            res.render('login');
        });

    app.post('/login',
        passport.authenticate('local', {failureRedirect: '/login'}),
        function (req, res) {
            res.redirect('/');
        });

    app.get('/logout',
        function (req, res) {
            req.logout();
            res.redirect('/');
        });

    app.get('/profile',
        require('connect-ensure-login').ensureLoggedIn(),
        function (req, res) {
            res.render('profile', {user: req.user});
        });

}*/

var LocalStrategy   = require('passport-local').Strategy;

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: "userDB"
});

//connection.query('USE usertest');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(userName, done) {
        done(null, userName);
    });

    // used to deserialize the user
    passport.deserializeUser(function(obj,done){
        done(null, obj);
    });


    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'userName',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, userName, password, done) {

            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            connection.query("SELECT * from userTable where userName = '"+userName+"'",function(err,rows){
                console.log(rows);
                console.log("above row object");
                if (err)
                    return done(err);
                if (rows.length) {
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                } else {

                    // if there is no user with that email
                    // create the user
                    var newUserMysql = new Object();

                    newUserMysql.userName    = userName;
                    newUserMysql.password = password; // use the generateHash function in our user model

                    var insertQuery = "INSERT INTO userTable ( userName, password ) values ('" + userName +"','"+ password +"')";
                    console.log(insertQuery);
                    connection.query(insertQuery,function(err,rows){
                        //newUserMysql.id = rows.insertId;

                        return done(null, newUserMysql);
                    });
                }
            });
        }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'userName',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, userName, password, done) { // callback with email and password from our form

            connection.query("SELECT * FROM `userTable` WHERE `userName` = '" + userName + "'",function(err,rows){
                if (err)
                    return done(err);
                if (!rows.length) {
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                }

                // if the user is found but the password is wrong
                if (!( rows[0].password == password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

                // all is well, return successful user
                return done(null, rows[0]);

            });



        }));

};
