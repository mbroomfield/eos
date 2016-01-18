var React = require('react');

var Textarea = React.createClass({
    render: function() {
        return (
            <textarea className="question__prompt">
            </textarea>
        );
    }
});

var Text = React.createClass({
    render: function() {
        return (
            <input type="text" className="question__prompt" />
        );
    }
});

var Question = React.createClass({
    setQuestionMarkup : function() {
        switch( this.props.question.type ) {
            case 'Text':
                return <Text/>;
            break;
            case 'Textarea':
                return <Textarea />;
            break;
        }
    },
    render: function() {
        return (
            <div className={"question  " + this.props.question.type.toLowerCase()}>
                <div className="question__text">
                    {this.props.question.text}
                </div>
                {this.setQuestionMarkup()}
            </div>
        );
    }
});

module.exports = {
    Question : Question
}
