connection = require("./connection.js");

var orm = {
    selectWhere: function (tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
           //console.log('SelectWhere Result ', result);
        });
    },

    selectUser: function (col, col2, col3, table, col4, val) {
        var queryString = "SELECT ?? ,?? ,?? FROM ?? WHERE ?? = ?";
       // console.log("QS", queryString);
        //SELECT `role`, `username`, `verifiedUser` FROM `userTable` WHERE `verifiedUser` = 'verified' OR 'notVerified';
        connection.query(queryString, [col, col2, col3, table, col4, val], function (err, result) {
            console.log('User Result ', result);
        });
    },
    adminView: function (table, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [table,], function (err, result) {
            //console.log('adminView Result ', result);
        });
    }

};//end of orm


var records = [
    { id: 1, username: 'jack', password: 'secret', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] }
    , { id: 2, username: 'jill', password: 'birthday', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
];

exports.findById = function(id, cb) {
    process.nextTick(function() {
        var idx = id - 1;
        if (records[idx]) {
            cb(null, records[idx]);
        } else {
            cb(new Error('User ' + id + ' does not exist'));
        }
    });
}

exports.findByUsername = function(username, cb) {
    process.nextTick(function() {
        for (var i = 0, len = records.length; i < len; i++) {
            var record = records[i];
            if (record.username === username) {
                return cb(null, record);
            }
        }
        return cb(null, null);
    });

exports.connectToDB = function(id, cb){
    connection.connect(function(err){
        if (err) {
            console.error('error connection:', err.stack);
            return
        }
        console.log('connected to MySQL DB')
    });
}

module.exports.connectToDB = connectToDB;

// passport login select database query
function findUser(username, callback){
    connection.query('SELECT * FROM userTable WHERE ?', {username: username}, function(err, user){
        callback(err, user)
    })
}
module.exports.findUser = findUser;
}

// GIVE ADMIN ALL ACCESS
// GIVE USER LIMITED ACCESS

module.exports = orm;
