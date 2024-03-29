var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');

module.exports = FormView.extend({
  fields: function () {
    return [
      new InputView({
        name: 'givenName',
        label: 'Given Name',
        placeholder: 'Ryan',
        parent: this,
        required: true,
        value: this.model && this.model.givenName,
        tests: [
          function (val) {
            if (val.length < 4) return 'Must be more than 3 characters.';
          }
        ]
      }),
      new InputView({
        name: 'familyName',
        label: 'Family Name',
        placeholder: 'Pylipow',
        parent: this,
        required: true,
        value: this.model && this.model.familyName,
        tests: [
          function (val) {
            if (val.length < 4) return 'Must be more than 3 characters.';
          }
        ]
      })
    ] 
  }
});