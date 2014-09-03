var API = require('hapi-dummy-api');

module.exports = new API({
  data: [
    {
      id: 0,
      givenName: 'Mary',
      familyName: 'Smith'
    },
    {
      id: 1,
      givenName: 'Bob',
      familyName: 'Sanders'
    }
  ],
  rootUrl: '/api/people',
  delay: 200,
  name: 'fake-people-api',
  version: '0.0.1'
});
