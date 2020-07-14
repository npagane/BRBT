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
  import './checkpoint5.html';
  
  Template.checkpoint5.onCreated(function created() {
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
          question: 'Which of the following is NOT a function of the nervous system?',
          answers: [{
          letter: 'a',
          answer: 'process and interpret sensory input',
          id: "wrongAnswer1",
        },
        {
          letter: 'b',
          answer: 'respond to sensory input',
          id: "wrongAnswer1"
        },
        {
          letter: 'c',
          answer: 'create sensory input',
          id: "correctAnswer1"
        },
        {
          letter: 'd',
          answer: 'collect sensory input',
          id: "wrongAnswer1"
        },
      ]
    },
    //2
    {
      question: 'which of the following refers to the death of a cell in a "normal" setting',
      answers: [{
          letter: 'a',
          answer: 'necrosis',
          id: "wrongAnswer2"
        },
        {
          letter: 'b',
          answer: 'both necrosis and apoptosis',
          id: 'wrongAnswer2'
        },
        {  
          letter: 'c',
          answer: 'neither apoptosis and necrosis',
          id: "wrongAnswer2"
        },
        {
          letter: 'd',
          answer: 'apoptosis',
          id: "correctAnswer2"
        },
      ]
    },
    //3
    {
      question: 'how many organ systems does the human body contain',
      answers: [{
          letter: 'a',
          answer: '12',
          id: "wrongAnswer3"
        },
        {
          letter: 'b',
          answer: '9',
          id: "wrongAnswer3"
        },
        {
          letter: 'c',
          answer: '14',
          id: "wrongAnswer3"
        },
        {
          letter: 'd',
          answer: '11',
          id: "correctAnswer3"
        },
      ]
    },
    //4
    {
      question: 'which of the following is the number 79 in binary?',
      answers: [{
          letter: 'a',
          answer: '1001110',
          id: "wrongAnswer4"
        },
        {
          letter: 'b',
          answer: '1001111',
          id: "correctAnswer4"
        },
        {
          letter: 'c',
          answer: '100111',
          id: "wrongAnswer4"
        },
        {
          letter: 'd',
          answer: '100110',
          id: "wrongAnswer4"
        },
      ]
    },
    //5
    {
      question: 'what number do array indexes start with?',
      answers: [{
          letter: 'a',
          answer: '-1',
          id: "wrongAnswer5"
        },
        {
          letter: 'b',
          answer: '1',
          id: "wrongAnswer5"
        },
        {
          letter: 'c',
          answer: 'Array indexes can start with either 1 or 0',
          id: "wrongAnswer5"
        },
        {
          letter: 'd',
          answer: '0',
          id: "correctAnswer5"
        },
      ]
    },
    //6
    {
      question: 'what is the purpose of the integumentary system?',
      answers: [{
          letter: 'a',
          answer: 'to provide protection, regulate body temperature, and generate heat',
          id: "wrongAnswer6"
        },
        {
          letter: 'b',
          answer: 'to provide protection, prevent water loss, and generate heat',
          id: "wrongAnswer6"
        },
        {
          letter: 'c',
          answer: 'to prevent water loss, regulate body temperature, and generate heat',
          id: "wrongAnswer6"
        },
        {
          letter: 'd',
          answer: 'to provide protection, regulate body temeprature, and prevent water loss',
          id: "correctAnswer6"
        },
      ]
    },
    //7
    {
      question: 'which is is the greatest in size, and which is the greater in nuber: white blood cells or red blood cells?',
      answers: [{
          letter: 'a',
          answer: 'white blood cells are greater in size, and greater in number',
          id: "wrongAnswer7"
        },
        {
          letter: 'b',
          answer: 'white blood cells are greater in size, but fewer in number',
          id: "correctAnswer7"
        },
        {
          letter: 'c',
          answer: 'red blood cells are greater in size, and greater in number',
          id: "wrongAnswer7"
        },
        {
          letter: 'd',
          answer: 'red blood cells are greater in size, but fewer in number',
          id: "wrongAnswer7"
        },
      ]
    },
    //8
    {
      question: 'How many characters are represented by ASCII?',
      answers: [{
          letter: 'a',
          answer: '128',
          id: "correctAnswer8"
        },
        {
          letter: 'b',
          answer: '26',
          id: "wrongAnswer8"
        },
        {
          letter: 'c',
          answer: '150',
          id: "wrongAnswer8"
        },
        {
          letter: 'd',
          answer: '52',
          id: "wrongAnswer8"
        },
      ]
    },
    //9
    {
      question: 'which of the following could NOT trigger cellular stress response?',
      answers: [{
          letter: 'a',
          answer: 'a nonenvironmental stressor',
          id: "correctAnswer9"
        },
        {
          letter: 'b',
          answer: 'extremes of temperature',
          id: "wrongAnswer9"
        },
        {
          letter: 'c',
          answer: 'exposure to toxins',
          id: "wrongAnswer9"
        },
        {
          letter: 'd',
          answer: 'mechanical damage',
          id: "wrongAnswer9"
        },
      ]
    },
    //10
    {
      question: 'What was the first vaccine created?',
      answers: [{
          letter: 'a',
          answer: 'smallpox',
          id: "correctAnswer10"
        },
        {
          letter: 'b',
          answer: 'TB',
          id: "wrongAnswer10"
        },
        {
          letter: 'c',
          answer: 'the flu',
          id: "wrongAnswer10"
        },
        {
          letter: 'd',
          answer: 'polio',
          id: "wrongAnswer10"
        },
      ]
    },
    //11
    {
      question: 'what organs is NOT a part of your immune system?',
      answers: [{
          letter: 'a',
          answer: 'lungs',
          id: "wrongAnswer11"
        },
        {
          letter: 'b',
          answer: 'lymphatic tissues',
          id: "wrongAnswer11"
        },
        {
          letter: 'c',
          answer: 'skin',
          id: "wrongAnswer11"
        },
        {
          letter: 'd',
          answer: 'brain',
          id: "correctAnswer11"
        },
      ]
    },
    //12
    {
      question: 'what does ASCII stand for?',
      answers: [{
          letter: 'a',
          answer: 'American System for Coding Information Interchange',
          id: "wrongAnswer12"
        },
        {
          letter: 'b',
          answer: 'Awesome Super Crazy Intelligent Information',
          id: "wrongAnswer12"
        },
        {
          letter: 'c',
          answer: 'All-encompasing Service Containing Important Information',
          id: "wrongAnswer12"
        },
        {
          letter: 'd',
          answer: 'America Standard Code for Information Interchange',
          id: "correctAnswer12"
        },
      ]
    },
    //13
    {
      question: 'what is the longest nerve in the body?',
      answers: [{
          letter: 'a',
          answer: 'optic nerve',
          id: "wrongAnswer13"
        },
        {
          letter: 'b',
          answer: 'sciatic nerve',
          id: "correctAnswer13"
        },
        {
          letter: 'c',
          answer: 'trigeminal nerve',
          id: "wrongAnswer13"
        },
        {
          letter: 'd',
          answer: 'vestibulocochlear nerve',
          id: "wrongAnswer13"
        },
      ]
    },
    //14
    {
      question: 'binary ending in a 1 will always be...?',
      answers: [{
          letter: 'a',
          answer: 'odd',
          id: "correctAnswer14"
        },
        {
          letter: 'b',
          answer: 'even',
          id: "wrongAnswer14"
        },
        {
          letter: 'c',
          answer: 'a multiple of 10',
          id: "wrongAnswer14"
        },
        {
          letter: 'd',
          answer: 'none of the above',
          id: "wrongAnswer14"
        },
      ]
    },
    //15
    {
      question: 'what is the purpose of helper t cells?',
      answers: [{
          letter: 'a',
          answer: 'to help you live',
          id: "wrongAnswer15"
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
          answer: '✔️',
          id: "correctAnswer15"
        },
      ]
    }
  ];
  
  Template.checkpoint5.helpers({
  
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
  
  Template.checkpoint5.events({
  
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
      document.getElementById('postQuestion').innerHTML += '<img src="img/right7.gif">';
      document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 1000.</h2></p>'
      // END SHOW HERE 
      // give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 1,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
          cp: 5 // CHANGE TO NEW CP NUMBER
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
          cp: 5 // CHANGE TO NEW CP NUMBER
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
          cp: 5 // CHANGE TO NEW CP NUMBER
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
          cp: 5 // CHANGE TO NEW CP NUMBER
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
          cp: 5 // CHANGE TO NEW CP NUMBER
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
          cp: 5 // CHANGE TO NEW CP NUMBER
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
          cp: 5 // CHANGE TO NEW CP NUMBER
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
          cp: 5 // CHANGE TO NEW CP NUMBER
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
          cp: 5 // CHANGE TO NEW CP NUMBER
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
          cp: 5 // CHANGE TO NEW CP NUMBER
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
          cp: 5 // CHANGE TO NEW CP NUMBER
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
          cp: 5 // CHANGE TO NEW CP NUMBER
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
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<img src="img/right3.gif">';
      document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 100.</h2></p>'
      // END SHOW HERE 
      // give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 1,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<img src="/img/nope.gif">'
      document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is C: create sensory input. Sensory input is recieved from the outside environment. It is the nervous system\'s job to gather it, process it, and respond to it. </h5> </p>';
      // END SHOW HERE 
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<img src ="/img/wrong.gif">';
      document.getElementById('postQuestion').innerHTML += '<p><h5>The correct answer to this question is D: apoptosis. Necrosis refers to the death of all or almost all of the cells in tissue or an organ due to a serious problem.</h5></p>';
      // END SHOW HERE 
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<img src ="/img/simoncowellno.gif">';
      document.getElementById('postQuestion').innerHTML += '<p><h5>The correct answer to this question is D: the human body contains 11 organ systems. These are as follows: the integumentary system, the nervous system, the skeletal system, the endocrine system, the muscular system, the cardiovascular system, the lymphatic system, the respiratory system, the urinary system, the reproductive system, and the digestive system.</h5></p>';
      // END SHOW HERE 
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<img src ="/img/yodano.gif">';
      document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is B: 1001111. 1001110 is 78, 100111 is 39, and 100110 is 38.</h5></p>';
      // END SHOW HERE 
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<p> <h5>The correct answer to this question is D: 0. When using array indexes you must always be sure to count up from 0.</h5></p>';
      // END SHOW HERE
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<img src ="/img/kanye.gif">';
      document.getElementById('postQuestion').innerHTML += '<p> <h5>The correct answer to this question is D: to provide protection, regulate body temperature, and prevent water loss. The integumentary system does not generate heat.</h5></p>';
      // END SHOW HERE 
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<p> <h5>The correct answer to this question is B: white blood cells are greater in size, but fewer in number. White blood cells are generally 12-17 µm in diameter, whereas red blood cells are about 8µm in diameter. The average person has between 4.2 and 6.1 million red blood cells/ul, while the average white blood cell count is between 4,000 and 11,000 per microliter of blood.</h5></p>';
      // END SHOW HERE 
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<img src ="/img/incorrect.gif">';
      document.getElementById('postQuestion').innerHTML += '<p><h5>The correct answer to this question is A: 128. ASCII represents all letters, boh capital and noncapital, along with symbols.</h5></p>';
      // END SHOW HERE 
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<img src ="/img/daniellebrooksno.gif">';
      document.getElementById('postQuestion').innerHTML += '<p> <h5>The correct answer to this question is A: a nonenvironmental stressor. The other choices are all examples of environmental stressors.</h5></p>';
      // END SHOW HERE 
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<img src ="/img/jonahhillno.gif">';
      document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is D: yes. Fix ourself. Do some actual, legitimate research. Please and thank you. </h5> </p>';
      // END SHOW HERE 
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<img src ="/img/false.gif">';
      document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is D: the brain. lungs, lymphatic tissues, and your skin all are a part of your immune system, but your brain is not. It is a part of your nervous system.</h5> </p>';
      // END SHOW HERE 
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<p> <h5>The correct answer to this question is D; ASCII stands for American Standard Code for Information Exchange.</h5></p>';
      // END SHOW HERE 
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<img src ="/img/joseno.gif">';
      document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is B: The longest nerve in the body is the sciatic nerve. It travels from your lower back down through each leg.</h5> </p>';
      // END SHOW HERE 
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<img src ="/img/theofficeno.gif">';
      document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is A; binary ending in a one will always be odd. This is because binary is base 2.</h5> </p>';
      // END SHOW HERE 
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 5 // CHANGE TO NEW CP NUMBER
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
      document.getElementById('postQuestion').innerHTML += '<img src ="/img/yourewrong.gif">';
      document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is D:</h5> </p>';
      // END SHOW HERE 
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 5 // CHANGE TO NEW CP NUMBER
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