
var injectTapEventPlugin = require("react-tap-event-plugin");
var MUI = require ('material-ui');
var RaisedButton =MUI.RaisedButton;
var React = require('react');
var AppBar = MUI.AppBar;
var LeftNav = MUI.LeftNav;
var MenuItem = MUI.MenuItem;
var FlatButton = MUI.FlatButton;
var Link = require('react-router/lib/Link');

var Main = React.createClass({

  getInitialState: function() {
return {open : false};
  },

  componentDidMount: function(){
    injectTapEventPlugin();

  },
  _handleClick: function () {
   this.setState({open: !this.state.open})
  },
  handleClose: function() {
    this.setState({open: false})
  },
  /**
   * @return {object}
   */
  render: function() {

    return (
        <div>
          <AppBar
              title="Mon Terroir"
              onClick={this._handleClick}

          />
          <LeftNav
              docked={false}
              width={400}
              open={this.state.open}
              onRequestChange={this.reqchange}
          >
              <AppBar
                  title="Mon Terroir"
                  onClick={this._handleClick}

              />
            <MenuItem onClick={this.handleClose}><Link to="/Login">Login</Link></MenuItem>
            <MenuItem onClick={this.handleClose}><Link to="/MesTerroirs">Mes Terroirs</Link></MenuItem>
            <MenuItem onClick={this.handleClose}><Link to="/Search">Search</Link></MenuItem>


          </LeftNav>


          {this.props.children}
        </div>
    )
  },



});


module.exports = Main;
