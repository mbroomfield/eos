var React = require('react');
var Question = require( './Questions' );

var Survey = React.createClass({
    init: function() {
        
    }
    , createSurveyMarkup : function() {
        var questions = [ 'textarea', 'textarea', 'textarea' ];
        var markup = [];
        for ( var i = 0; i < questions.length; i++ ) {
            markup.push( <Question.Textarea  key={i} /> );
        }
        return markup;
    }
    , render: function() {
        return (
            <div className="survey">
                {this.createSurveyMarkup()}
            </div>
        );
    }
});

module.exports = Survey;
