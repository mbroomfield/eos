var Utils = (function() {

    var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

	function getWeekObjFromSunday( date ) {
		if ( !date )
			date = new Date();
		var diff = date.getDay();
		var sunday = new Date(  date.getFullYear(), date.getMonth(), date.getDate() - diff );
		return sunday;
	}
	
	function getDateStringFromTimestamp( timeObj ) {
		console.log( timeObj );
		return months[ timeObj.getMonth() ] + " " + timeObj.getDate() + ", " + timeObj.getFullYear();
	}

    return {
		getWeekObjFromSunday         : getWeekObjFromSunday
		, getDateStringFromTimestamp : getDateStringFromTimestamp
    }

})();

module.exports = Utils;
