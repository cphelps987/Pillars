var express = require('express'),
    app = express(),
    session = require('express-session'),
    flash = require('connect-flash'),
    session = require('express-session'),
    auth = require('./auth.js'),
    bodyParser = require('body-parser');

app.use('/', express.static(__dirname + '/public'));

app.use(session({
    secret: 'some-secret',
    saveUninitialized: false,
    resave: true
}));

// For parsing post request's data/body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Tells app to use password session
app.use(auth.initialize());
app.use(auth.session());

app.use(flash());

// Set up routes
app.get('/', function (req, res) {
    if (req.user) {
        res.send(
            '<p>You\'re logged in as <strong>' + req.user.username + '</strong>.</p>'
            + '<p><a href="/logout">Log out</a></p>'
        );
    }
    else {
        res.send('<p><a href="/login">Login</a></p>');
    }
});

app.get('/login', function (req, res) {
    res.send(
        '<form action="/login" method="POST">'
        + '<h2>Login</h2>'
        + '<p><input name="username"></p>'
        + '<p><input name="password"></p>'
        + '<p><input type="submit" value="Login"></p>'
        + '<p style="color: red;">' + req.flash('error') + '</p>'
        + '</form>'
    );
});

app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

app.post('/login',
    auth.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
);

var server = app.listen(3000, function () {
    var port = server.address().port;

    console.log('Server running on http://127.0.0.1:%s', port);
});