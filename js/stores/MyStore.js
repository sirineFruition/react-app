/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * MyStore
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MyConstants = require('../constants/MyConstants');
var assign = require('object-assign');
var $ = require('jquery');
var CHANGE_EVENT = 'change';
var searcharray = [];
var terrList =[];


function login(text) {
  $.ajax({
    url: 'http://localhost:3000/users/signin',
    type: 'POST',
    data: {username: text},

    success: function (data) {
      if (data === 'error') {
        console.log('auth failed !');
      }
      else {
        console.log('auth reussie !');
        username = text;
        terrList = data;

      }
    }.bind(
        this),
    error: function (xhr, status, err) {
      console.log('didnt connect');
      console.error(this.props.url, status, err.toString());
    }.bind(this)
  });

}

function addterroir(text) {
  terrList.push(text)
}


function pushsearch(text) {
  searcharray.push(text);
}

function destroy(id) {
  var index = terrList.indexOf(id) +1;
  terrList.splice(index, 1);

}


var MyStore = assign({}, EventEmitter.prototype, {
  getSearchList: function(){
    return searcharray;
  },
  getterrList: function() {
    return terrList;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case MyConstants.TODO_LOGIN:
      text = action.text.trim();
      if (text !== '') {
        login(text);
        MyStore.emitChange();
      }
      break;




   case MyConstants.ADD_TERROIR:
      text = action.text.trim();
      if (text !== '') {
        addterroir( text);
        MyStore.emitChange();
      }
      break;
    case MyConstants.SEARCH_SELECTION:
      text = action.text.trim();
      if (text !== '') {
        pushsearch( text);
        MyStore.emitChange();
      }
      break;

    case MyConstants.TODO_DESTROY:
      destroy(action.id);
      MyStore.emitChange();
      break;


    default:
      // no op
  }
});

module.exports = MyStore;
