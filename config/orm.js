connection = require("./connection.js");

var orm = {
    selectWhere: function (tableInput, colToSearch, valOfCol, cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
           //console.log('SelectWhere Result ', result);
            cb(result);
        });
    },
    selectChat: function (col, col2, col3, table, cb) {
        var queryString = "SELECT ??, ??, ?? FROM ??";
        //SELECT `title`, `moderators`, `moderation_level` FROM `chatTable`;
        connection.query(queryString, [col, col2, col3, table], function (err, result) {
            //console.log('Linktable Result ', result);
            cb(result);
        });
    },

    selectRole: function (col, col2, col3, table, col4, val, cb) {
        var queryString = "SELECT ?? ,?? ,?? FROM ?? WHERE ?? = ?";
       // console.log("QS", queryString);
        //SELECT `role`, `username`, `verifiedUser` FROM `userTable` WHERE `verifiedUser` = 'verified' OR 'notVerified';
        connection.query(queryString, [col, col2, col3, table, col4, val], function (err, result) {
            //console.log('Role result ', result);
            cb(result);
        })
    },

    selectLinkTable: function (col, col2, col3, col4, col5, col6, col7, table, cb) {
        var queryString = "SELECT ?? ,?? ,??, ??, ??, ?? , ?? FROM ??";
        //SELECT `title`, `description`, `link`, `facebook`, `twitter`, `other` FROM `linksTable`;
        connection.query(queryString, [col, col2, col3, col4, col5, col6, col7, table], function (err, result) {
           //console.log('Linktable Result ', result);
            cb(result);
        });
    },
    selectUserTable: function (col, col2, col3, col4, col5, col6, table, cb) {
        var queryString = "SELECT ?? ,?? ,??, ??, ??, ?? FROM ??";
        //SELECT `userName`, `userScore`, `role`, `verifiedUser`, `userScore`, `flagged` FROM `userTable`;
        connection.query(queryString, [col, col2, col3, col4, col5, col6, table], function (err, result) {
            //console.log('User Table Result ', result);
            cb(result);
        });
    },


    selectFlagged: function (tableInput, colToSearch, valOfCol, colSearch, cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? > ? ORDER BY ?? ASC";
        connection.query(queryString, [tableInput, colToSearch, valOfCol, colSearch], function (err, result) {
           //console.log('flagged', result);
            cb(result);
        });
    },

    selectFAQ: function (colToSearch, colSearch, tableInput, cb) {
        var queryString = "SELECT ??, ?? FROM ??";
        connection.query(queryString, [colToSearch, colSearch, tableInput], function (err, result) {
            //console.log('faq', result);
            cb(result);
        });


    }


};//end of orm
        // console.log("QS", queryString);
        //SELECT `role`, `username`, `verifiedUser` FROM `userTable` WHERE `verifiedUser` = 'verified' OR 'notVerified';



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
