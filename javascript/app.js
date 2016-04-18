var React = require('react');
var ReactDOM = require('react-dom');
var Header   = require('./Header');
var Survey   = require('./Survey');
var Records  = require('./Records');

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <Survey />,
  document.getElementById('form')
);

ReactDOM.render(
  <Records />,
  document.getElementById('records')
);