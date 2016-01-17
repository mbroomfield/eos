var React = require('react');

var Textarea = React.createClass({
    render: function() {
        return (
            <div className="question  textarea">
                <textarea className="question__prompt">
                </textarea>
            </div>
        );
    }
});

module.exports = {
    Textarea : Textarea
}
