var React = require('react');
var Question = require( './Questions' );

var Survey = React.createClass({
    init: function() {

    }
    /** DATA **/
    , getQuestions : function() {
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
        return questions;
    }
    /** EVENTS **/
    , handleSubmit : function() {
        var request = {};
        for ( var i = 0; i < this.markup.length; i++ ) {
            var q = this.refs['question' + i ];
            request['question' + i] = {};
            request['question' + i].question = q.getQuestionText();
            request['question' + i].answer   = q.getValue();
        }
        console.log( request );
    }
    /** RENDERS **/
    , createSurveyMarkup : function() {
        // grab questions
        questions = this.getQuestions();

        // create markup
        this.markup = [];
        for ( var i = 0; i < questions.length; i++ ) {
            var question = questions[i];
            this.markup.push(
                <Question.Question
                key={i}
                question={question}
                ref={"question" + i}
                /> );
        }
        return this.markup;
    }
    , createSubmitButton : function() {
        return <input type="submit" className="submit" onClick={this.handleSubmit}/>;
    }
    , render: function() {
        return (
            <div className="survey">
                {this.createSurveyMarkup()}
                {this.createSubmitButton()}
            </div>
        );
    }
});

module.exports = Survey;
