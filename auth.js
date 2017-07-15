var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    user = { // This a hard-coded user
        _id: 1,
        username: 'john',
        email: 'john@doe.com',
        password: 'password'
    };

// Register a login strategy
passport.use('login', new LocalStrategy(
    function(username, password, done) {
        // This should check again db
        if (username === user.username && password === user.password) {
            return done(null, user);
        } else {
            done(null, false, {
                message: 'Invalid username and password.'
            });
        }
    }
));

// Required for storing user info into session
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

// Required for retrieving user from session
passport.deserializeUser(function(id, done) {
    // The user should be queried against db
    // using the id
    done(null, user);
});

module.exports = passport;