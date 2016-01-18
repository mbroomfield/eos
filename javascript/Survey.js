var React = require('react');
var Question = require( './Questions' );

var Survey = React.createClass({
    init: function() {
        
    }
    , createSurveyMarkup : function() {
        var questions = [
            {
                type: 'Textarea',
                text: 'What is your name?'
            },
            {
                type: 'Text',
                text: 'What is your address?'
            },
            {
                type: 'Textarea',
                text: 'What is your sign?'
            },
        ];
        var markup = [];
        for ( var i = 0; i < questions.length; i++ ) {
            var question = questions[i];
            markup.push( <Question.Question  key={i}  question={question} /> );
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
