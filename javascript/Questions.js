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

var Radio = React.createClass({
    getValue : function() {
		var dataKeys = Object.keys( this.props.data )
		for ( var i = 0; i < dataKeys.length; i++ ) {
			if ( this.refs['q'+i].checked )
				return this.refs['q'+i].value;
		}
		return 1;
      //  return this.refs.q.value;
    }
    , render: function() {
		var data = this.props.data;
		var index = this.props.index;
		var dataKeys = Object.keys( this.props.data );
        return (
            <div className="question__prompt">
                { dataKeys.map( function( el, idx ) {
					return (
						<div key={idx}>
							<input type="radio" ref={'q'+idx} name={"group"+index} value={data[el]} />
							{el}
						</div>
					)
				} ) }
            </div>
        );
    }
});

var Question = React.createClass({
    setQuestionMarkup : function() {
        switch( this.props.question.type ) {
            case 'text':
                return <Text ref='q' />;
            break;
            case 'textarea':
                return <Textarea ref='q' />;
            break;
            case 'radio':
                return <Radio ref='q' index={this.props.index} data={this.props.question.data} />;
            break;
        }
    }
    , getQuestionText : function() {
        return this.props.question.text;
    }
    , getValue : function() {
        return this.refs.q.getValue();
    }
	, getType : function() {
		return this.props.question.type;
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
