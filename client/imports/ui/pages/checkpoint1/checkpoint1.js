import {Template} from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';

import './../../components/checkpoint/checkpoint.js';
import './checkpoint1.html';

Template.checkpoint1.onCreated(function created() {
  this.autorun(() => {
      try {
        NUMQ = new ReactiveVar(0);
        ShowExtra = new ReactiveVar(false);
      } catch(error) {
          console.log('waiting for the reactive var to set');
      }
  });
});

var questions = [
  //1
  {
    question: 'what is the powerhouse of the cell?!',
    answers: [
      {
          letter: 'a',
          answer: 'chloroplast',
          id: "wrongAnswer",
      },
      {
          letter: 'b',
          answer: 'ribosome',
          id: "wrongAnswer"
      },
      {
        letter: 'c',
        answer: 'mitochondria',
        id: "correctAnswer"
      },
      {
        letter: 'd',
        answer: 'nucleus',
        id: "wrongAnswer"
      },
    ]
  },
  //2
  {
    question: 'what can a variable hold?',
    answers: [
      {
          letter: 'a',
          answer: 'numbers',
          id: "wrongAnswer"
      },
      {
          letter: 'b',
          answer: 'strings',
          id: "wrongAnswer"
      },
      {
        letter: 'c',
        answer: 'objects',
        id: "wrongAnswer"
      },
      {
        letter: 'd',
        answer: 'all of the above',
        id: "correctAnswer"
      },
    ]
  },
  //3
  {
    question: 'what can you do with lists?',
    answers: [
      {
          letter: 'a',
          answer: 'hold stuff',
          id: "wrongAnswer"
      },
      {
          letter: 'b',
          answer: 'iterate through said stuff',
          id: "wrongAnswer"
      },
      {
        letter: 'c',
        answer: 'both a and b',
        id: "correctAnswer"
      },
      {
        letter: 'd',
        answer: 'none of the above',
        id: "wrongAnswer"
      },
    ]
  },
  //4
  {
    question: 'what is NOT an input of cellular respiration?',
    answers: [
      {
          letter: 'a',
          answer: 'water',
          id: "correctAnswer"
      },
      {
          letter: 'b',
          answer: 'glucose',
          id: "wrongAnswer"
      },
      {
        letter: 'c',
        answer: 'oxygen',
        id: "wrongAnswer"
      },
      {
        letter: 'd',
        answer: 'oxidized electron carriers/ADP',
        id: "wrongAnswer"
      },
    ]
  },
  //5
  {
    question: 'what is NOT an output of cellular respiration?',
    answers: [
      {
          letter: 'a',
          answer: 'water',
          id: "wrongAnswer"
      },
      {
          letter: 'b',
          answer: 'pyruvate',
          id: "correctAnswer"
      },
      {
        letter: 'c',
        answer: 'carbon dioxide',
        id: "wrongAnswer"
      },
      {
        letter: 'd',
        answer: 'ATP',
        id: "wrongAnswer"
      },
    ]
  },
  //6
  {
    question: 'can prokaryotes undergo cellular respiration?',
    answers: [
      {
          letter: 'a',
          answer: 'yes',
          id: "wrongAnswer"
      },
      {
          letter: 'b',
          answer: 'no',
          id: "wrongAnswer"
      },
      {
        letter: 'c',
        answer: 'kind of',
        id: "correctAnswer"
      },
      {
        letter: 'd',
        answer: 'unsure tbh',
        id: "wrongAnswer"
      },
    ]
  },
  //7
  {
    question: 'if you declared a variable called "sum" and you wanted to change it to be 1 greater, how would you do it?',
    answers: [
      {
          letter: 'a',
          answer: 'sum + 1',
          id: "wrongAnswer"
      },
      {
          letter: 'b',
          answer: 'sum = sum + 1',
          id: "correctAnswer"
      },
      {
        letter: 'c',
        answer: 'both a and b',
        id: "wrongAnswer"
      },
      {
        letter: 'd',
        answer: 'neither',
        id: "wrongAnswer"
      },
    ]
  },
  //8
  {
    question: 'what does binary fission refer to?',
    answers: [
      {
          letter: 'a',
          answer: 'eukaryotic cell divison',
          id: "wrongAnswer"
      },
      {
          letter: 'b',
          answer: 'pyruvate oxidation',
          id: "wrongAnswer"
      },
      {
        letter: 'c',
        answer: 'ATP hydrolosis',
        id: "wrongAnswer"
      },
      {
        letter: 'd',
        answer: 'bacterial cell division',
        id: "correctAnswer"
      },
    ]
  },
  //9
  {
    question: 'what is the output of add(add(7,2),3) if function add(a, b) {return a + b;} ?',
    answers: [
      {
          letter: 'a',
          answer: '12',
          id: "correctAnswer"
      },
      {
          letter: 'b',
          answer: '9',
          id: "wrongAnswer"
      },
      {
        letter: 'c',
        answer: '3',
        id: "wrongAnswer"
      },
      {
        letter: 'd',
        answer: '0',
        id: "wrongAnswer"
      },
    ]
  },
  //10
  {
    question: 'how does JavaScript and Python variable declaration differ?',
    answers: [
      {
          letter: 'a',
          answer: 'they are the same',
          id: "wrongAnswer"
      },
      {
          letter: 'b',
          answer: 'in Python, you need to initaize variables with "var" if you want them to be local',
          id: "wrongAnswer"
      },
      {
        letter: 'c',
        answer: 'in JavaScript, you need to initaize variables with "var" if you want them to be local',
        id: "correctAnswer"
      },
      {
        letter: 'd',
        answer: 'tbh i havent really been looking at the translated code',
        id: "wrongAnswer"
      },
    ]
  },
  //11
  {
    question: 'when are organelles duplicated in cellular divison?',
    answers: [
      {
          letter: 'a',
          answer: 'interphase',
          id: "correctAnswer"
      },
      {
          letter: 'b',
          answer: 'prophase',
          id: "wrongAnswer"
      },
      {
        letter: 'c',
        answer: 'telophase',
        id: "wrongAnswer"
      },
      {
        letter: 'c',
        answer: 'cytokinesis',
        id: "wrongAnswer"
      },
    ]
  },
  //12
  {
    question: 'when is the DNA duplicated in cellular divison?',
    answers: [
      {
          letter: 'a',
          answer: 'interphase',
          id: "correctAnswer"
      },
      {
          letter: 'b',
          answer: 'prophase',
          id: "wrongAnswer"
      },
      {
        letter: 'c',
        answer: 'telophase',
        id: "wrongAnswer"
      },
      {
        letter: 'c',
        answer: 'cytokinesis',
        id: "wrongAnswer"
      },
    ]
  },
  //13
  {
    question: 'how did the programming language Python get its name?',
    answers: [
      {
          letter: 'a',
          answer: 'the guy really liked snakes',
          id: "wrongAnswer"
      },
      {
          letter: 'b',
          answer: 'hiss on them haters 🐍',
          id: "wrongAnswer"
      },
      {
        letter: 'c',
        answer: 'py is a pi reference and "thon" like a hackathon',
        id: "wrongAnswer"
      },
      {
        letter: 'd',
        answer: 'the comedy troupe, monty python',
        id: "correctAnswer"
      },
    ]
  },
  //14
  {
    question: 'what range of light carries just the right amount of energy to excite electrons up PSII in the light reactions?',
    answers: [
      {
          letter: 'a',
          answer: 'UV rays',
          id: "wrongAnswer"
      },
      {
          letter: 'b',
          answer: 'visible light',
          id: "correctAnswer"
      },
      {
        letter: 'c',
        answer: 'infrared',
        id: "wrongAnswer"
      },
      {
        letter: 'd',
        answer: 'X-rays',
        id: "wrongAnswer"
      },
    ]
  },
  //15
  {
    question: 'where do the dark reactions of photosynthesis take place?',
    answers: [
      {
          letter: 'a',
          answer: 'stroma',
          id: "correctAnswer"
      },
      {
          letter: 'b',
          answer: 'thylakoid space',
          id: "wrongAnswer"
      },
      {
        letter: 'c',
        answer: 'thylakoid membrane',
        id: "wrongAnswer"
      },
      {
        letter: 'd',
        answer: 'cytoplasm',
        id: "wrongAnswer"
      },
    ]
  }
];

Template.checkpoint1.helpers({

    question() {
      try {
        return questions[NUMQ.get()].question;
      } catch(error) {
        console.log('waiting for reactive variable');
      }
    },
  
    answers() {
      try {
        return questions[NUMQ.get()].answers;
      } catch(error) {
        // waiting for rendered functions to load
      }
    },

    showExtra() {
      return ShowExtra.get();
    },
  
  });
  
  Template.checkpoint1.events({

    'click #nextQuestion':function() {
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
  
    'click #answeredQuestion':function() {
      ShowExtra.set(true);
    },
    
    'click #correctAnswer':function() {
      // CODE HERE TO SHOW CORRECT GRAPHICS
      document.getElementById('postQuestion').innerHTML += '<img src="img/atp.png">';
      // END SHOW HERE 
      // give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 1,
          cp: 1 // CHANGE TO NEW CP NUMBER
        }, (err, res) => {
          if (err) {
            alert(err);
          } else {
            // success!
          }
        });
      } catch(error) {
        console.log('correct, but not logged in so not saving points');
      }
    },

    'click #wrongAnswer':function() {
      // CODE HERE TO EXPLAIN CORRECT ANSWER
      document.getElementById('postQuestion').innerHTML += '<p> the correct answer was whatever bc </p>';
      // END SHOW HERE 
      // do not give points
      try {
        var userName = Meteor.users.findOne(Meteor.userId()).username;
        Meteor.call('addPoints', {
          username: userName,
          question: NUMQ.get(),
          answer: 0,
          cp: 1 // CHANGE TO NEW CP NUMBER
        }, (err, res) => {
          if (err) {
            alert(err);
          } else {
            // success!
          }
        });
      } catch(error) {
        console.log('incorrect, but not logged in so not saving points');
      }
    }
  
  });
  