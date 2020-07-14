import { Meteor } from 'meteor/meteor';

import {VirtualWorld} from './../virtual-world.js';

Meteor.publish('server-world', function(id) {
  console.log('publishing connection for meteor client and java app', id);
  return VirtualWorld.find();
});


