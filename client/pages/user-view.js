var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
  template: templates.pages.userView,
  pageTitle: 'View User',
  bindings: {
    'model.avatarURL': {
      type: 'attribute',
      name: 'src',
      role: 'user-avatar'
    },
    'model.fullName': {
      type: 'text',
      role: 'user-name'
    },
    'model.awesomeness': {
      type: 'text',
      role: 'user-awesomeness'
    }
  },
  initialize: function (spec) {
    var self = this;
    this.collection.getOrFetch(spec.id, function (err, model) {
      if (err) throw err;
      self.model = model;
    });
  },
  autoRender: true
});