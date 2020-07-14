import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { VirtualWorld } from './../../../api/virtual-world/virtual-world.js';

import './world.html';

Session.set("changeMap", 0);
var changeMap = 0;
var agents;
Template.World.onCreated(function created() {
  this.autorun(() => {
      handle = Meteor.subscribe("server-world");
      try {
        agents = VirtualWorld.findOne().agents;
        console.log('updated server')
        changeMap += 1;
        Session.set("changeMap", changeMap);
      } catch(error) {
        console.log('waiting for world server')
      }
  });
});

Template.World.rendered = function(){ 
  var vw = Meteor.call('initiateWorld');
}

Template.World.helpers({

  agent(index) {
    try {
      if (Session.get('changeMap') == changeMap) {
        // do something with changemap to update
      }
      for (var i = 0; i < agents.length; i++) {
        if ( agents[i].x*10 + agents[i].y == index) {
          console.log('moved agent ' + agents[i].name);
          return agents[i].name;
        } 
      }
      return 0; // wasnt there
    } catch(error) {
      // waiting for server
      return -1;
    }
  },

});

Template.World.events({
  'click #set': function () {
    /*var row = VirtualWorld.findOne().x_tiles;
    var col = VirtualWorld.findOne().y_tiles;
    var addOn = '<div class="grid-container" style="grid-template-columns:' + ' auto'.repeat(col) + ';">';
    for (var i = 0; i < row*col; i++) {
      addOn += '<div class="grid-item"> {{ agent }} </div>';
    }
    addOn += '</div>';
    document.getElementById('world_grid').innerHTML = addOn;*/
    console.log('removed the ability to set using a button bc we dont want that anyway');
},

  'click #simulate': function () {
    var potential_ob = VirtualWorld.find({});
    if (potential_ob) {
      //VirtualWorld.update({_id: potential_ob._id}, {$set:{message:'ready!'}});
      //Meteor.call('simulateWorld');
      Meteor.call('clickSimulate');
    } else {
      console.log('cannot click simulate');
    }
  },

  'click #simulateAgain': function () {
    var potential_ob = VirtualWorld.find({});
    if (potential_ob) {
      Meteor.call('clickSimulateAgain');
    } else {
      console.log('cannot click simulate again');
    }
  },


  'click #move': function () {
    var potential_ob = VirtualWorld.find({});
    if (potential_ob) {
      Meteor.call('move');
    } else {
      console.log('cannot move');
    }
  },

  'click #grow': function () {
    var potential_ob = VirtualWorld.find({});
    if (potential_ob) {
      Meteor.call('grow');
    } else {
      console.log('cannot grow');
    }
  },
  'click #compete1load': function () {
    var potential_ob = VirtualWorld.find({});
    if (potential_ob) {
      Meteor.call('compete1load');
    } else {
      console.log('cannot load compete1');
    }
  }
});

// all of the above code needs to disappear at some point and should be executed as follows:
// 1. client drags blocks in block copetion page and this page initates the world to be ready for play
// 2. client clicks "compete" in block competetion page which then sends JS blockly code to java app and respond back with dimensions to render world
// 3. upon update to the mongodb collection world, use helpers and html to update locations on tile map
