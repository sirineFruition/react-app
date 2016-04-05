/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var MyActions = require('../actions/MyActions');
var TodoTextInput = require('./TodoTextInput.react');

var classNames = require('classnames');
var MUI = require('material-ui');
var List = MUI.List;
var ListItem = MUI.ListItem;
var MenuItem = MUI.MenuItem
var IconMenu = MUI.IconMenu;
var IconButton = MUI.IconButton;
var TodoItem = React.createClass({

  propTypes: {
    todo: ReactPropTypes.string.isRequired
  },

  getInitialState: function() {
    return {
      isEditing: false
    };
  },

  /**
   * @return {object}
   */
  render: function() {
var buttontyle = {
  float: 'right'
  };
    var todo = this.props.todo;
    const iconButtonElement = (
        <IconButton
            touch={true}
            tooltip="more"
            style={{
    color: '#757575',
     fill: '#FF9800'


  }}
            tooltipPosition="bottom-left"
        >
        </IconButton>
    );
    var input;
    const rightIconMenu = (
        <IconMenu iconStyle={{    color: '#757575',     fill: '#FF9800'}} iconButtonElement={iconButtonElement}>
          <MenuItem  >Add Terroir</MenuItem>
        </IconMenu>
    );
    if (this.state.isEditing) {
      input =
          <TodoTextInput
              className="edit"
              value={todo}
          />;
    }

    // List items should get the class 'editing' when editing
    // and 'completed' when marked as completed.
    // Note that 'completed' is a classification while 'complete' is a state.
    // This differentiation between classification and state becomes important
    // in the naming of view actions toggleComplete() vs. destroyCompleted().
    return (
        <div>

        <ListItem
            className={classNames({
          'completed': todo.complete,
          'editing': this.state.isEditing
        })}
            key={todo.id}>
          <div className="view">

            <label >
              {todo}
            </label>
            <button className="destroy" style = {buttontyle} onClick={this._onDestroyClick} rightIconButton={rightIconMenu} > Delete </button>
          </div>
          {input}
        </ListItem>
          </div>
    );
  },

  _onToggleComplete: function() {
    MyActions.toggleComplete(this.props.todo);
  },



  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param  {string} text
   */
  _onSave: function(text) {
    MyActions.updateText(this.props.todo.id, text);
    this.setState({isEditing: false});
  },

  _onDestroyClick: function() {
    MyActions.destroy(this.props.todo.id);
  }

});

module.exports = TodoItem;
