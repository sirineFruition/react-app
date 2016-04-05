/**
 * Created by sirine on 29/03/16.
 */

var React = require('react');
var MUI = require('material-ui');
var TextField = MUI.TextField;
var RaisedButton = MUI.RaisedButton;
var MyActions = require('../actions/MyActions');
var ReactPropTypes = React.PropTypes;
var Link = require('react-router/lib/Link');

var ENTER_KEY_CODE = 13;
const style = {
    margin: 12,
};
var Login = React.createClass({
    propTypes: {
        className: ReactPropTypes.string,
        placeholder: ReactPropTypes.string,
        onLogin: ReactPropTypes.func,
        value: ReactPropTypes.string
    },

    getInitialState: function() {
        return {
            value: ''
        };
    },

    _onLogin: function(text) {
        console.log("this is the type of text:  " +typeof (text));

        console.log("this is the text:  " + text);

        if (text.trim()){
            MyActions.login(text);
        }

    },
    _save: function() {
        this._onLogin(this.state.value);
        this.setState({
            value: ''
        });
    },
    _onChange: function(/*object*/ event) {
        this.setState({
            value: event.target.value
        });
    },
    _onKeyDown: function(event) {
        console.log("key down");
        if (event.keyCode === ENTER_KEY_CODE) {
            this._save();
        }
    },
    render: function () {
        return (
            <div>

            <div className="large-3 medium-6 large-centered medium-centered columns">
                <h1>Login </h1>
                <div>
                    <TextField
                        hintText= "username"
                        onBlur={this._save}
                        onChange={this._onChange}
                        onKeyDown={this._onKeyDown}
                        value={this.state.value}
                    />
                    <RaisedButton label="Log In" primary={true} style={style} onTouchTap={this._onKeyDown} />
                </div>
                <Link to="/MesTerroirs"> Continue</Link>
            </div>
            </div>
        );
    }
});
module.exports = Login;
