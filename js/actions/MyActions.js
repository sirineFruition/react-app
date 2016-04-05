var AppDispatcher = require('../dispatcher/AppDispatcher');
var MyConstants = require('../constants/MyConstants');

var MyActions = {

  /**
   * @param  {string} text
   */
  login: function(text) {
    AppDispatcher.dispatch({
      actionType: MyConstants.TODO_LOGIN,
      text: text
    });
  },
  create: function(text) {
    AppDispatcher.dispatch({
      actionType: MyConstants.TODO_CREATE,
      text: text
    });
  },
  searchselection: function(text) {
    AppDispatcher.dispatch({
      actionType: MyConstants.SEARCH_SELECTION,
      text: text
    });
  },
  addTerroir: function(text) {
    AppDispatcher.dispatch({
      actionType: MyConstants.ADD_TERROIR,
      text: text
    });
  },

  /**
   * @param  {string} id The ID of the ToDo item
   * @param  {string} text
   */
  updateText: function(id, text) {
    AppDispatcher.dispatch({
      actionType: MyConstants.TODO_UPDATE_TEXT,
      id: id,
      text: text
    });
  },

  /**destroy
   * Toggle whether a single ToDo is complete
   * @param  {object} todo
   */
  toggleComplete: function(todo) {
    var id = todo.id;
    var actionType = todo.complete ?
        MyConstants.TODO_UNDO_COMPLETE :
        MyConstants.TODO_COMPLETE;

    AppDispatcher.dispatch({
      actionType: actionType,
      id: id
    });
  },

  /**
   * Mark all ToDos as complete
   */
  toggleCompleteAll: function() {
    AppDispatcher.dispatch({
      actionType: MyConstants.TODO_TOGGLE_COMPLETE_ALL
    });
  },

  /**
   * @param  {string} id
   */
  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: MyConstants.TODO_DESTROY,
      id: id
    });
  },

  /**
   * Delete all the completed ToDos
   */
  destroyCompleted: function() {
    AppDispatcher.dispatch({
      actionType: MyConstants.TODO_DESTROY_COMPLETED
    });
  }

};

module.exports = MyActions;
