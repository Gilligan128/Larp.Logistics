var React = require('react');
var ReactDOM = require('react-dom');
var seq =  require('../shared/sequences.js');

var createCharacterApp = module.exports = React.createClass({
  getInitialState: function(){
    return { }
  },
  render: function() {
    var categories = ['Race','Abilities','Resources'];
    var priorities = [30, 15, 2];
    return (
      <form>
      <ul>
        {seq.permute(categories)
          .map((c, i) => $`{c} ({priorities[i]})`)
          .map(c => (<li>{c}</li>))
        }
        </ul>
      </form>
    )}
});
