var React = require('react');
var Database = require( './Database' );
var Utils    = require( './Utils' );

var Records = React.createClass({
	getInitialState : function() {
		return { records : [] };
	}
	, componentDidMount: function() {
		Database.getData( 'answers/user/1/form/1' )
		        .then( ( data ) => {
					this.generateRecordData( data.val() );
				} );
	}
	, generateRecordData : function( resp ) {
		var records = [];
	
		var dates = Object.keys( resp );
		for ( var i = 0; i < dates.length; i++ ) {
			var date = dates[ i ];
			var form = resp[ date ];
			var questions = [];
			console.log( form );
			var qkeys = Object.keys( form.responses );

			for ( var j = 0; j < qkeys.length; j++ ) {
				var qkey = qkeys[ j ];
				var question = form.responses[ qkey ];
				questions.push( question );
			}

			date = Utils.getDateStringFromTimestamp( new Date( parseInt( date, 10 ) ) );
			records.push( {
				date        : date
				, questions : questions
			});
		}
		this.setState( {
			records : records
		} );
	}
    , render: function() {
        return (
			<div className="records">
                { this.state.records.map( function( el, idx ) {
					return ( 
						<div className="record" key={idx}>
							<h2>{ el.date }</h2>
							{
								el.questions.map( function( e, i ) {
									return (
										<div className="question" key={i}>
											<div className="question__text">
												{ e.question }
											</div>
											<div className="question__answer">
												{ e.answer }
											</div>
										</div>
									)
								} )
							}
						</div>
					);
				} ) }
			</div>
        );
    }
});

module.exports = Records;
