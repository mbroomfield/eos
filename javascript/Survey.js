var React = require('react');
var Question = require( './Questions' );
var Database = require( './Database' );
var Utils    = require( './Utils' );

var Survey = React.createClass({
	getInitialState : function() {
		return { questions : [] };
	}
	, componentDidMount: function() {
		Database.getData( 'forms/1' )
		        .then( ( data ) => {
					// use data to create survey
					this.createSurveyMarkup( data.val().template );
				} );
	}
    /** EVENTS **/
    , handleSubmit : function( e ) {
		e.preventDefault();
        var request = {};
		var questions = this.state.questions;
        for ( var i = 0; i < questions.length; i++ ) {
            var q = this.refs['question' + i ];
            request['question' + i] = {};
            request['question' + i].question = q.getQuestionText();
            request['question' + i].answer   = q.getValue();
			request['question' + i].type     = q.getType();
        }
        console.log( request );
		
		var dateObj = Utils.getWeekObjFromSunday();
		Database.setData( 'answers/user/1/form/1/' + dateObj.getTime() + '/responses', request )
				.then( ( data ) => {
					console.log( data, "here" );
				} );
		return false;
    }
    /** RENDERS **/
    , createSurveyMarkup : function( questions ) {
		// handle data here
		var markup = [];
		var questionKeys = Object.keys( questions );
		for ( var i = 0; i < questionKeys.length; i++ ) {
			var question = questions[ questionKeys[ i ] ];
			markup.push( question={question} );
		}
		this.setState( { questions : markup } );
    }
    , createSubmitButton : function() {
        return (
			<input type="submit" className="submit" />
		)
    }
    , render: function() {
        return (
            <form className="survey" onSubmit={this.handleSubmit}>
                { this.state.questions.map( function( el, idx ) {
					return ( <Question.Question
					index={idx}
					key={idx}
					question={el.question}
					ref={"question" + idx}
					/> );
				} ) }
                { this.createSubmitButton() }
            </form>
        );
    }
});

module.exports = Survey;
