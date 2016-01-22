var React = require('react');

var Textarea = React.createClass({
    getValue : function() {
        return this.refs.q.value;
    }
    , render: function() {
        return (
            <textarea ref='q' className="question__prompt">
            </textarea>
        );
    }
});

var Text = React.createClass({
    getValue : function() {
        return this.refs.q.value;
    }
    , render: function() {
        return (
            <input ref='q' type="text" className="question__prompt" />
        );
    }
});

var Question = React.createClass({
    setQuestionMarkup : function() {
        switch( this.props.question.type ) {
            case 'Text':
                return <Text ref='q' />;
            break;
            case 'Textarea':
                return <Textarea ref='q' />;
            break;
        }
    }
    , getValue : function() {
        return this.refs.q.getValue();
    }
    , render: function() {
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
