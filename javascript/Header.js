var React = require('react');
var Database = require( './Database' );
var Utils    = require( './Utils' );

var Header = React.createClass({
	getInitialState : function() {
		return { date : [] };
	}
	, componentDidMount: function() {
		var weekSunday = Utils.getWeekObjFromSunday();
		this.setState( {
			date : Utils.getDateStringFromTimestamp( weekSunday )
		} );
	}
    , render: function() {
        return (
			<div className="header">
				<div className="header__week">
					<span>Week of </span><span id="display_week">{ this.state.date }</span>
				</div>
				<div className="header__status" id="status_bar" />
			</div>
        );
    }
});

module.exports = Header;
