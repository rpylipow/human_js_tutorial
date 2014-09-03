var View = require('ampersand-view');
var templates = require('../templates');
var UserView = require('../views/user');

module.exports = View.extend({
  template: templates.pages.users,
  initialize: function () {
    // Collection passed in from router
    this.collection.fetch();
  },
  pageTitle: 'Users',
  autoRender: true,
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, UserView, this.getByRole('user-list'));
  }
});