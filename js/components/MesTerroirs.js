
var React = require('react');
var MainSection = require('./MainSection.react');
var  $  = require('jquery');
var  jQuery  = require('jquery');
var MyStore = require('../stores/MyStore');
var Login = require('./Login.react');

var Link = require('react-router/lib/Link');
window.$ = $;
window.jQuery = jQuery;

function getTodoState() {
  return {
    terrList: MyStore.getterrList(),
    open : false
  };
}

var MesTerroirs = React.createClass({

  getInitialState: function() {
    return getTodoState();
    console.log(this.state.terrList)
  },
  handleToggle: function () {
    this.setState({open: !this.state.open});
    console.log('hi !');
  },

  handleClose: function () {
    this.setState({open: true});
  },
  reqchange: function(open){
    console.log("something");
    this.setState({open : !this.state.open})
  },
  componentDidMount: function() {
    MyStore.addChangeListener(this._onChange);

  },

  componentWillUnmount: function() {
    MyStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {

    return (
      <div>
        <MainSection
          allTerroirs={this.state.terrList}
        />
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the MyStore
   */
  _onChange: function() {
    this.setState(getTodoState());
  }

});

module.exports = MesTerroirs;
