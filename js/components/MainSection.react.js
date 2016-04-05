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
var TodoItem = require('./TodoItem.react');

var MainSection = React.createClass({

  propTypes: {
    allTerroirs: ReactPropTypes.array.isRequired,
  },

  /**
   * @return {object}
   */
  render: function() {
    // This section should be hidden by default
    // and shown when there are terroirs.
    if (Object.keys(this.props.allTerroirs).length < 1) {
      return null;
    }

    var allTerroirs = this.props.allTerroirs;
    var terroirs = [];

    for (var key in allTerroirs) {
      terroirs.push(<TodoItem key={key} todo={allTerroirs[key]} />);
    }
    return (
      <section id="main">
        <h2>Mes Terroirs</h2>
        <ul id="todo-list">{terroirs}</ul>
      </section>
    );
  },

  /**
   * Event handler to mark all TODOs as complete
   */
  _onToggleCompleteAll: function() {
    MyActions.toggleCompleteAll();
  }

});

module.exports = MainSection;
