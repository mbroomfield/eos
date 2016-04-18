var Firebase = require('firebase');

var Database = (function() {

    var _db = new Firebase('https://brilliant-inferno-2015.firebaseio.com/eos');
	
	function getData( child ) {
		var db = _db;
		if ( child )
			db = db.child( child );
		return db.once( 'value' );
	}
	
	function setData( child, data ) {
		var db = _db;
		if ( child )
			db = db.child( child );
		return db.update( data );
	}

    return {
		getData   : getData
		, setData : setData
    }

})();

module.exports = Database;
