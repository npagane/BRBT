import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({

  'addPoints'({username, question, answer, cp}) {

    // Validate data types
    check(username, String);
    check(question, Number);
    check(answer, Number);
    check(cp, Number);

    // check if the user has data for the given checkpoint
    try {
      switch (cp) {
        case 1:
          var potential_cp = Meteor.users.findOne({username: username}).cp1;
          break;
        case 2:
          var potential_cp = Meteor.users.findOne({username: username}).cp2;
          break;
        case 3:
          var potential_cp = Meteor.users.findOne({username: username}).cp3;
          break;
        case 4:
          var potential_cp = Meteor.users.findOne({username: username}).cp4;
          break;
        case 5: 
          var potential_cp = Meteor.users.findOne({username: username}).cp5;
          break;
        case 6:
          var potential_cp = Meteor.users.findOne({username: username}).cp6;
          break;
      }
      if (potential_cp.length + 1 > question) {
        console.log(username + ' has answered this question, not saving data');
      } else {
        // throw an error
        return DNE;
      }
    } catch(error) {
      // new question
      if (answer) {
        console.log(username + ' answered cp ' + cp + ', question ' + question + ' correctly, adding ATP');
        Meteor.users.update({username: username}, {$inc:{atp: 100}});
      } else {
        console.log(username + ' did not answer cp ' + cp + ', question ' + question + ' correctly :(');
      }
      switch (cp) {
        case 1:
          Meteor.users.update({username: username}, {$push: {cp1: answer}});
          break;
        case 2:
          Meteor.users.update({username: username}, {$push: {cp2: answer}});
          break;
        case 3:
          Meteor.users.update({username: username}, {$push: {cp3: answer}});
          break;
        case 4:
          Meteor.users.update({username: username}, {$push: {cp4: answer}});
          break;
        case 5: 
          Meteor.users.update({username: username}, {$push: {cp5: answer}});
          break;
        case 6:
          Meteor.users.update({username: username}, {$push: {cp6: answer}});
          break;
      }
    }
  },
});