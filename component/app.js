(function() {
  var React = require('react'),
      ReactDOM = require('react-dom'),
  Main = require('./main/Main.js');
  var remote = window.require('remote');

  window.React = React;

  ReactDOM.render(<Main />, document.getElementById("gemini-app"));
})();
