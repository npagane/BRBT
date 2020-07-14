import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.publish('getPoints', function(username) {

  console.log('accessing points from server')
  // Validate data types
  check(username, String);

  return Meteor.users.find({username: username}, {fields: {atp: 1}});
});