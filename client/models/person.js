var Model = require('ampersand-model');

module.exports = Model.extend({
  props: {
    id: 'number',
    givenName: 'string',
    familyName: 'string',
    awesomeness: 'number'
  },
  derived: {
    fullName: {
      deps: ['givenName', 'familyName'],
      fn: function () {
        if (!this.givenName) return '';
        return this.givenName + ' ' + this.familyName;
      }
    },
    avatarURL: {
      deps: ['givenName'],
      fn: function () {
        if (!this.givenName) return '';
        return 'http://robohash.org/' + this.givenName;
      }
    },
    viewUrl: {
      deps: ['id'],
      fn: function () {
        return 'users/' + this.id;
      }
    }
  }
});