var Firebase = require('firebase');

var Database = (function() {

    var _db;

    function initDb() {
        _db = new Firebase('https://brilliant-inferno-2015.firebaseio.com');
        console.log( _db );
    }

    return {
        init : initDb
    }

})();

module.exports = Database;
