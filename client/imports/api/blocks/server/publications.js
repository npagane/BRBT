import { Meteor } from 'meteor/meteor';
import { UserBlocks } from './../blocks.js'; 
import { check } from 'meteor/check';

Meteor.publish('loadBlocks', function(username, level) {

  console.log('loading blocks from server')
  // Validate data types
  check(username, String);
  check(level, Number);

  return UserBlocks.find({username: username, level: level});
});