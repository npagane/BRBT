import { Meteor } from 'meteor/meteor';

import './home.html';
import '../../components/directory/directory.js';

Template.App_home.onCreated(function created() {
    this.autorun(() => {
        try {
            var username = Meteor.users.findOne(Meteor.userId()).username;
            handle = Meteor.subscribe("getPoints", username);
        } catch(error) {
            console.log('waiting for the page to create to then access mongo')
        }
    });
  });

Template.App_home.helpers({
    ATP() {
        var username = Meteor.users.findOne(Meteor.userId()).username;
        var atp = Meteor.users.findOne({username: username}).atp;
        if (atp == null) {
            atp = 0;
        }
        return atp;
    }
});