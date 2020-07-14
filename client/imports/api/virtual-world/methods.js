import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import {VirtualWorld} from './virtual-world.js';

// set identifier so that same world is changed each time

Meteor.methods({
    'initiateWorld': function() {
        VirtualWorld.remove({});
        console.log('initiating world for connection to java app');
        VirtualWorld.insert({message:'initiating'})
    },

    'setWorld': function(world) {
        // check for correct format
        check(world.message, String);
        check(world.x_tiles, Number);
        check(world.y_tiles, Number);

        var potential_ob = VirtualWorld.findOne({message:'initiating'});
        if (potential_ob) {
            console.log('setting the world graphics');
            VirtualWorld.update({_id: potential_ob._id}, {$set:
                {
                    message: world.message,
                    x_tiles: world.x_tiles,
                    y_tiles: world.y_tiles,
                }
            })
        } else {
            console.log('cannot set world');
            Meteor.call('initiateWorld');
        }
    },

    'updateWorld': function(world) {
        // check for correct format
        check(world.message, String);
        check(world.x_tiles, Number);
        check(world.y_tiles, Number);

        var ob = VirtualWorld.findOne();
        //var ob2 = VirtualWorld.update();
        //var ob = VirtualWorld.findOne({message:'modified'});
        if (ob) {
            console.log('found, trying to update');
            VirtualWorld.update({_id: ob._id}, {$set:
                {
                    message: world.message,
                    x_tiles: world.x_tiles,
                    y_tiles: world.y_tiles,
                    agents: world.agents,
                  }
            })
            ob = VirtualWorld.findOne();
            console.log('updated: ' + String(ob._id));
            //console.log(String(ob._id));
            console.log(ob);
        } else {
            console.log('cannot update world');
        }
    },

    'simulateWorld': function() {
        var potential_ob = VirtualWorld.findOne({message:'setting'});
        if (potential_ob) {
            console.log('beginning the simulation');
            VirtualWorld.update({_id: potential_ob._id}, {$set: 
                {
                    message: 'ready!'
                    //agents: world.agents
                }
            })
        } else {
            console.log('cannot simulate');
        }
    },

    'clickSimulate': function() {
        var potential_ob = VirtualWorld.findOne();
        if (potential_ob) {
            console.log('you clicked simulate');
            VirtualWorld.update({_id: potential_ob._id}, {$set: 
                {
                    message: 'clicked simulate',
                }
            })
        } else {
            console.log('click sim DNE');
        }
    },

    'clickSimulateAgain': function() {
        var potential_ob = VirtualWorld.findOne();
        if (potential_ob) {
            console.log('you clicked simulate again');
            VirtualWorld.update({_id: potential_ob._id}, {$set: 
                {
                    message: 'clicked simulate again',
                }
            })
        } else {
            console.log('click sim again DNE');
        }
    },

    'move': function() {
        var potential_ob = VirtualWorld.findOne();
        if (potential_ob) {
            console.log('you clicked move');
            VirtualWorld.update({_id: potential_ob._id}, {$set: 
                {
                    message: 'cell movement',
                }
            })
        } else {
            console.log('move DNE');
        }
    },

    'grow': function() {
        var potential_ob = VirtualWorld.findOne();
        if (potential_ob) {
            console.log('you clicked grow');
            VirtualWorld.update({_id: potential_ob._id}, {$set: 
                {
                    message: 'grow',
                }
            })
        } else {
            console.log('grow DNE');
        }
    },
    'compete1load': function() {
        var potential_ob = VirtualWorld.findOne();
        if (potential_ob) {
            console.log('you clicked load compete1');
            VirtualWorld.update({_id: potential_ob._id}, {$set: 
                {
                    message: 'compete1load',
                }
            })
        } else {
            console.log('compete1load DNE');
        }
    }
});