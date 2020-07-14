import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { UserBlocks } from './blocks.js';

Meteor.methods({

  'saveBlocks'({username, ws, level}) {

    console.log('saving blocks in server')
    // Validate data types
    check(username, String);
    check(ws, String);
    check(level, Number);

    // check if the user has data for the given level/copy
    var potential_ob = UserBlocks.findOne({username: username, level: level});
    if (potential_ob) {
      console.log('user data exists for this level, override it');
      UserBlocks.update({_id: potential_ob._id}, {$set:{ws:ws}})
    } else {
      console.log('user data does not exist for this level, insert it');
      UserBlocks.insert({
        username: username, 
        ws: ws, 
        level: level
      });
    }
  },

});