import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'; 

export const VirtualWorld = new Mongo.Collection('virtual-world');

VirtualWorld.schema = new SimpleSchema({
  message: {
    type: String
  },
  x_tiles: {
    type: Number,
    optional: true // make optional for now to just check for communication
  },
  y_tiles: {
    type: Number,
    optional: true // make optional for now to just check for communication
  },
  agents: {
    type: Array,
    optional: true // make optional for now to just check for communication
  },
  'agents.$': {
    type: Object,
    optional: true
  },
  'agents.$.name': {
    type: String
  },
  'agents.$.x': {
    type: Number
  },
  'agents.$.y': {
    type: Number
  },
  'agents.$.size': {
    type: Number,
    optional:true
  },
  'agents.$.num_cells': {
    type: Number,
    optional:true
  },
  'agents.$.ATP': {
    type: Number,
    optional:true
  },
  'agents.$.num_mit': {
    type: Number,
    optional:true
  },
});


VirtualWorld.allow({
  insert: function () {
      return true;
  },
  update: function () {
      return true;
  },
  remove: function () {
      return true;
  }
})