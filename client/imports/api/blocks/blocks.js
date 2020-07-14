import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'; 

export const UserBlocks = new Mongo.Collection('user-blocks');

UserBlocks.schema = new SimpleSchema({
  username: {
    type: String,
  },
  ws: {
    type: String,
  },
  level: {
    type: Number,
  }
});
