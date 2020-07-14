import {
  Template
} from 'meteor/templating';
import {
  Meteor
} from 'meteor/meteor';
import {
  ReactiveVar
} from 'meteor/reactive-var';

import './../../components/checkpoint/checkpoint.js';
import './checkpoint3.html';

Template.checkpoint3.onCreated(function created() {
  this.autorun(() => {
    try {
      NUMQ = new ReactiveVar(0);
      ShowExtra = new ReactiveVar(false);
    } catch (error) {
      console.log('waiting for the reactive var to set');
    }
  });
});

var questions = [
  //1
  {
    question: 'q1?',
    answers: [{
        letter: 'a',
        answer: '❌',
        id: "wrongAnswer1",
      },
      {
        letter: 'b',
        answer: '✔️',
        id: "correctAnswer1"
      },
      {
        letter: 'c',
        answer: '❌',
        id: "wrongAnswer1"
      },
      {
        letter: 'd',
        answer: '❌',
        id: "wrongAnswer1"
      },
    ]
  },
  //2
  {
    question: 'q2',
    answers: [{
        letter: 'a',
        answer: '✔️',
        id: "correctAnswer2"
      },
      {
        letter: 'b',
        answer: '❌',
        id: "wrongAnswer2"
      },
      {
        letter: 'c',
        answer: '❌',
        id: "wrongAnswer2"
      },
      {
        letter: 'd',
        answer: '❌',
        id: "wrongAnswer2"
      },
    ]
  },
  //3
  {
    question: 'q3',
    answers: [{
        letter: 'a',
        answer: '❌',
        id: "wrongAnswer3"
      },
      {
        letter: 'b',
        answer: '❌',
        id: "wrongAnswer3"
      },
      {
        letter: 'c',
        answer: '❌',
        id: "wrongAnswer3"
      },
      {
        letter: 'd',
        answer: '✔️',
        id: "correctAnswer3"
      },
    ]
  },
  //4
  {
    question: 'q4',
    answers: [{
        letter: 'a',
        answer: '❌',
        id: "wrongAnswer4"
      },
      {
        letter: 'b',
        answer: '❌',
        id: "wrongAnswer4"
      },
      {
        letter: 'c',
        answer: '✔️',
        id: "correctAnswer4"
      },
      {
        letter: 'd',
        answer: '❌',
        id: "wrongAnswer4"
      },
    ]
  },
  //5
  {
    question: 'q5?',
    answers: [{
        letter: 'a',
        answer: '✔️',
        id: "correctAnswer5"
      },
      {
        letter: 'b',
        answer: '❌',
        id: "wrongAnswer5"
      },
      {
        letter: 'c',
        answer: '❌',
        id: "wrongAnswer5"
      },
      {
        letter: 'd',
        answer: '❌',
        id: "wrongAnswer5"
      },
    ]
  },
  //6
  {
    question: 'q6?',
    answers: [{
        letter: 'a',
        answer: '✔️',
        id: "correctAnswer6"
      },
      {
        letter: 'b',
        answer: '❌',
        id: "wrongAnswer6"
      },
      {
        letter: 'c',
        answer: '❌',
        id: "wrongAnswer6"
      },
      {
        letter: 'd',
        answer: '❌',
        id: "wrongAnswer6"
      },
    ]
  },
  //7
  {
    question: 'q7?',
    answers: [{
        letter: 'a',
        answer: '❌',
        id: "wrongAnswer7"
      },
      {
        letter: 'b',
        answer: '❌',
        id: "wrongAnswer7"
      },
      {
        letter: 'c',
        answer: '✔️',
        id: "correctAnswer7"
      },
      {
        letter: 'd',
        answer: '❌',
        id: "wrongAnswer7"
      },
    ]
  },
  //8
  {
    question: 'q8?',
    answers: [{
        letter: 'a',
        answer: '❌',
        id: "wrongAnswer8"
      },
      {
        letter: 'b',
        answer: '❌',
        id: "wrongAnswer8"
      },
      {
        letter: 'c',
        answer: '❌',
        id: "wrongAnswer8"
      },
      {
        letter: 'd',
        answer: '✔️',
        id: "correctAnswer8"
      },
    ]
  },
  //9
  {
    question: 'q9?',
    answers: [{
        letter: 'a',
        answer: '❌',
        id: "wrongAnswer9"
      },
      {
        letter: 'b',
        answer: '❌',
        id: "wrongAnswer9"
      },
      {
        letter: 'c',
        answer: '✔️',
        id: "correctAnswer9"
      },
      {
        letter: 'd',
        answer: '❌',
        id: "wrongAnswer9"
      },
    ]
  },
  //10
  {
    question: 'q10?',
    answers: [{
        letter: 'a',
        answer: '❌',
        id: "wrongAnswer10"
      },
      {
        letter: 'b',
        answer: '❌',
        id: "wrongAnswer10"
      },
      {
        letter: 'c',
        answer: '✔️',
        id: "correctAnswer10"
      },
      {
        letter: 'd',
        answer: '❌',
        id: "wrongAnswer10"
      },
    ]
  },
  //11
  {
    question: 'q11?',
    answers: [{
        letter: 'a',
        answer: '❌',
        id: "wrongAnswer11"
      },
      {
        letter: 'b',
        answer: '✔️',
        id: "correctAnswer11"
      },
      {
        letter: 'c',
        answer: '❌',
        id: "wrongAnswer11"
      },
      {
        letter: 'd',
        answer: '❌',
        id: "wrongAnswer11"
      },
    ]
  },
  //12
  {
    question: 'q12?',
    answers: [{
        letter: 'a',
        answer: '❌',
        id: "wrongAnswer12"
      },
      {
        letter: 'b',
        answer: '❌',
        id: "wrongAnswer12"
      },
      {
        letter: 'c',
        answer: '❌',
        id: "wrongAnswer12"
      },
      {
        letter: 'd',
        answer: '✔️',
        id: "correctAnswer12"
      },
    ]
  },
  //13
  {
    question: 'q13?',
    answers: [{
        letter: 'a',
        answer: '❌',
        id: "wrongAnswer13"
      },
      {
        letter: 'b',
        answer: '❌',
        id: "wrongAnswer13"
      },
      {
        letter: 'c',
        answer: '❌',
        id: "wrongAnswer13"
      },
      {
        letter: 'd',
        answer: '✔️',
        id: "correctAnswer13"
      },
    ]
  },
  //14
  {
    question: 'q14?',
    answers: [{
        letter: 'a',
        answer: '❌',
        id: "wrongAnswer14"
      },
      {
        letter: 'b',
        answer: '❌',
        id: "wrongAnswer14"
      },
      {
        letter: 'c',
        answer: '❌',
        id: "wrongAnswer14"
      },
      {
        letter: 'd',
        answer: '✔️',
        id: "correctAnswer14"
      },
    ]
  },
  //15
  {
    question: 'q15?',
    answers: [{
        letter: 'a',
        answer: '✔️',
        id: "correctAnswer15"
      },
      {
        letter: 'b',
        answer: '❌',
        id: "wrongAnswer15"
      },
      {
        letter: 'c',
        answer: '❌',
        id: "wrongAnswer15"
      },
      {
        letter: 'd',
        answer: '❌',
        id: "wrongAnswer15"
      },
    ]
  }
];

Template.checkpoint3.helpers({

  question() {
    try {
      return questions[NUMQ.get()].question;
    } catch (error) {
      console.log('waiting for reactive variable');
    }
  },

  answers() {
    try {
      return questions[NUMQ.get()].answers;
    } catch (error) {
      // waiting for rendered functions to load
    }
  },

  showExtra() {
    return ShowExtra.get();
  },

});

Template.checkpoint3.events({

  'click #nextQuestion': function () {
    // increment question number
    var numQ = NUMQ.get()
    NUMQ.set(numQ + 1);
    if ((numQ + 1) >= questions.length) {
      console.log('done with quiz?');
      // CHANGE POSTQUESTION DIV HERE FOR END OF QUIZ SHOPPING OR FUN OR WHATEVER
      // document.getElementById('postQuestion').innerHTML +=
    }
    ShowExtra.set(false);
    // reset postQuestion graphic
    document.getElementById('postQuestion').innerHTML = '';
  },

  'click #answeredQuestion': function () {
    ShowExtra.set(true);
  },

  //correct answers

  //1
  'click #correctAnswer1': function () {
    // CODE HERE TO SHOW CORRECT GRAPHICS
    document.getElementById('postQuestion').innerHTML += '<img src="img/right8.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 1000.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('correct, but not logged in so not saving points');
    }
  },

  //2

  'click #correctAnswer2': function () {
    // CODE HERE TO SHOW CORRECT GRAPHICS
    document.getElementById('postQuestion').innerHTML += '<img src="img/right3.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 1000.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('correct, but not logged in so not saving points');
    }
  },

  //3

  'click #correctAnswer3': function () {
    // CODE HERE TO SHOW CORRECT GRAPHICS
    document.getElementById('postQuestion').innerHTML += '<img src="img/right2.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 1000.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('correct, but not logged in so not saving points');
    }
  },
  
  //4

  'click #correctAnswer4': function () {
    // CODE HERE TO SHOW CORRECT GRAPHICS
    document.getElementById('postQuestion').innerHTML += '<img src="img/right1.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 1000.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('correct, but not logged in so not saving points');
    }
  },
  
  //5

  'click #correctAnswer5': function () {
    // CODE HERE TO SHOW CORRECT GRAPHICS
    document.getElementById('postQuestion').innerHTML += '<img src="img/right14.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 1000.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('correct, but not logged in so not saving points');
    }
  },
  
  //6

  'click #correctAnswer6': function () {
    // CODE HERE TO SHOW CORRECT GRAPHICS
    document.getElementById('postQuestion').innerHTML += '<img src="img/right5.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 1000.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('correct, but not logged in so not saving points');
    }
  },
  
  //7

  'click #correctAnswer7': function () {
    // CODE HERE TO SHOW CORRECT GRAPHICS
    document.getElementById('postQuestion').innerHTML += '<img src="img/yes9.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 1000.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('correct, but not logged in so not saving points');
    }
  },
  
  //8
  
  'click #correctAnswer8': function () {
    // CODE HERE TO SHOW CORRECT GRAPHICS
    document.getElementById('postQuestion').innerHTML += '<img src="img/right6.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 1000.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('correct, but not logged in so not saving points');
    }
  },
  
  //9
  
  'click #correctAnswer9': function () {
    // CODE HERE TO SHOW CORRECT GRAPHICS
    document.getElementById('postQuestion').innerHTML += '<img src="img/right11.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 1000.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('correct, but not logged in so not saving points');
    }
  },
  
  //10
  
  'click #correctAnswer10': function () {
    // CODE HERE TO SHOW CORRECT GRAPHICS
    document.getElementById('postQuestion').innerHTML += '<img src="img/right12.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 1000.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('correct, but not logged in so not saving points');
    }
  },
  
  //11
  
  'click #correctAnswer11': function () {
    // CODE HERE TO SHOW CORRECT GRAPHICS
    document.getElementById('postQuestion').innerHTML += '<img src="img/right13.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 1000.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('correct, but not logged in so not saving points');
    }
  },
  
  //12

  'click #correctAnswer12': function () {
    // CODE HERE TO SHOW CORRECT GRAPHICS
    document.getElementById('postQuestion').innerHTML += '<img src="img/yougotitdude.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 1000.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('correct, but not logged in so not saving points');
    }
  },
  
  //13
  
  'click #correctAnswer13': function () {
    // CODE HERE TO SHOW CORRECT GRAPHICS
    document.getElementById('postQuestion').innerHTML += '<img src="img/yes 10.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 1000.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('correct, but not logged in so not saving points');
    }
  },
  
  //14
  
  'click #correctAnswer14': function () {
    // CODE HERE TO SHOW CORRECT GRAPHICS
    document.getElementById('postQuestion').innerHTML += '<img src="img/right4.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 1000.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('correct, but not logged in so not saving points');
    }
  },

//15

  'click #correctAnswer15': function () {
    // CODE HERE TO SHOW CORRECT GRAPHICS
    document.getElementById('postQuestion').innerHTML += '<img src="img/right7.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 100.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('correct, but not logged in so not saving points');
    }
  },

  //wrong answers
  
  //1
  
  'click #wrongAnswer1': function () {
    // CODE HERE TO EXPLAIN CORRECT ANSWER
    document.getElementById('postQuestion').innerHTML += '<img src="/img/yourewrong.gif">'
    document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is B: </h5> </p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('incorrect, but not logged in so not saving points');
    }
  },

  //2

  'click #wrongAnswer2': function () {
    // CODE HERE TO EXPLAIN CORRECT ANSWER
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/yodano.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5>The correct answer to this question is A: </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('incorrect, but not logged in so not saving points');
    }
  },

  //3
  
  'click #wrongAnswer3': function () {
    // CODE HERE TO EXPLAIN CORRECT ANSWER
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/jonahhill.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5>The correct answer to this question is D:  </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('incorrect, but not logged in so not saving points');
    }
  },

//4

  'click #wrongAnswer4': function () {
    // CODE HERE TO EXPLAIN CORRECT ANSWER
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/false.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is C: </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('incorrect, but not logged in so not saving points');
    }
  },

//5

  'click #wrongAnswer5': function () {
    // CODE HERE TO EXPLAIN CORRECT ANSWER
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/nosir.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h5>The correct answer to this question is A: </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('incorrect, but not logged in so not saving points');
    }
  },

  //6
  
  'click #wrongAnswer6': function () {
    // CODE HERE TO EXPLAIN CORRECT ANSWER
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/theofficeno.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h5>The correct answer to this question is A: </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('incorrect, but not logged in so not saving points');
    }
  },

//7

  'click #wrongAnswer7': function () {
    // CODE HERE TO EXPLAIN CORRECT ANSWER
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/nonono.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h5>The correct answer to this question is C: </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('incorrect, but not logged in so not saving points');
    }
  },

//8

  'click #wrongAnswer8': function () {
    // CODE HERE TO EXPLAIN CORRECT ANSWER
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/daniellebrooksno.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5>The correct answer to this question is D: </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('incorrect, but not logged in so not saving points');
    }
  },

//9

  'click #wrongAnswer9': function () {
    // CODE HERE TO EXPLAIN CORRECT ANSWER
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/ksno.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h5>The correct answer to this question is C: </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('incorrect, but not logged in so not saving points');
    }
  },
  
  //10
  
  'click #wrongAnswer10': function () {
    // CODE HERE TO EXPLAIN CORRECT ANSWER
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/joseno.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is C: </h5> </p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('incorrect, but not logged in so not saving points');
    }
  },
  
  //11
  
  'click #wrongAnswer11': function () {
    // CODE HERE TO EXPLAIN CORRECT ANSWER
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/wrong.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is B: </h5> </p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('incorrect, but not logged in so not saving points');
    }
  },
  
  //12
  
  'click #wrongAnswer12': function () {
    // CODE HERE TO EXPLAIN CORRECT ANSWER
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/dannydevitono.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h5>The correct answer to this question is D: </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('incorrect, but not logged in so not saving points');
    }
  },

//13  
  
  'click #wrongAnswer13': function () {
    // CODE HERE TO EXPLAIN CORRECT ANSWER
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/simoncowellno.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is D: </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('incorrect, but not logged in so not saving points');
    }
  },

//14

  'click #wrongAnswer14': function () {
    // CODE HERE TO EXPLAIN CORRECT ANSWER
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/nope.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is D: </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('incorrect, but not logged in so not saving points');
    }
  },
  
  //15
  
  'click #wrongAnswer15': function () {
    // CODE HERE TO EXPLAIN CORRECT ANSWER
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/kanye.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is A: </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 3 // CHANGE TO NEW CP NUMBER
      }, (err, res) => {
        if (err) {
          alert(err);
        } else {
          // success!
        }
      });
    } catch (error) {
      console.log('incorrect, but not logged in so not saving points');
    }
  }


});