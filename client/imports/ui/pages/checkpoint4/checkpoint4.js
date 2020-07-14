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
import './checkpoint4.html';

Template.checkpoint4.onCreated(function created() {
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
    question: 'What makes a trait Mendelian?',
    answers: [{
        letter: 'a',
        answer: 'all traits are mendelian',
        id: "wrongAnswer1",
      },
      {
        letter: 'b',
        answer: 'The trait is inhereted and determined by a single pair of genes',
        id: "correctAnswer1"
      },
      {
        letter: 'c',
        answer: 'Gregor Mendel studied that specific trait',
        id: "wrongAnswer1"
      },
      {
        letter: 'd',
        answer: 'The trait is inhereted and determined by multiple pairs of genes',
        id: "wrongAnswer1"
      },
    ]
  },
  //2
  {
    question: '0 AND 1 =?',
    answers: [{
        letter: 'a',
        answer: 'undefined',
        id: "wrongAnswer2"
      },
      {
        letter: 'b',
        answer: '1',
        id: "wrongAnswer2"
      },
      {
        letter: 'c',
        answer: 'does not exist',
        id: "wrongAnswer2"
      },
      {
        letter: 'd',
        answer: '0',
        id: "correctAnswer2"
      },
    ]
  },
  //3
  {
    question: '1 OR 0 =?',
    answers: [{
        letter: 'a',
        answer: '1',
        id: "correctAnswer3"
      },
      {
        letter: 'b',
        answer: '0',
        id: "wrongAnswer3"
      },
      {
        letter: 'c',
        answer: 'undefined',
        id: "wrongAnswer3"
      },
      {
        letter: 'd',
        answer: 'does not exist',
        id: "wrongAnswer3"
      },
    ]
  },
  //4
  {
    question: 'which of the following is NOT an autosomal recessive genetic disorder?',
    answers: [{
        letter: 'a',
        answer: 'tay-sachs disease',
        id: "wrongAnswer4"
      },
      {
        letter: 'b',
        answer: 'phenylketonuria',
        id: "wrongAnswer4"
      },
      {
        letter: 'c',
        answer: 'sickle cell anemia',
        id: "wrongAnswer4"
      },
      {
        letter: 'd',
        answer: 'huntington disease',
        id: "correctAnswer4"
      },
    ]
  },
  //5
  {
    question: 'which of the following traits is NONmendelian?',
    answers: [{
        letter: 'a',
        answer: 'hairline',
        id: "wrongAnswer5"
      },
      {
        letter: 'b',
        answer: 'eye color',
        id: "correctAnswer5"
      },
      {
        letter: 'c',
        answer: 'ear wax',
        id: "wrongAnswer5"
      },
      {
        letter: 'd',
        answer: 'earlobes',
        id: "wrongAnswer5"
      },
    ]
  },
  //6
  {
    question: 'what is it called when boths alleles contribute to an organisms phenotype?',
    answers: [{
        letter: 'a',
        answer: 'pleiotopy',
        id: "wrongAnswer6"
      },
      {
        letter: 'b',
        answer: 'polygenic',
        id: "wrongAnswer6"
      },
      {
        letter: 'c',
        answer: 'codominance',
        id: "correctAnswer6"
      },
      {
        letter: 'd',
        answer: 'this doesnt have a name',
        id: "wrongAnswer6"
      },
    ]
  },
  //7
  {
    question: 'what is it called when a single gene effects a phenotype in more than one way?',
    answers: [{
        letter: 'a',
        answer: 'pleiotropy',
        id: "correctAnswer7"
      },
      {
        letter: 'b',
        answer: 'codominance',
        id: "wrongAnswer7"
      },
      {
        letter: 'c',
        answer: 'polygenic',
        id: "wrongAnswer7"
      },
      {
        letter: 'd',
        answer: 'this doesnt have a name',
        id: "wrongAnswer7"
      },
    ]
  },
  //8
  {
    question: 'if a mutation is acquired, can it be passed down to offspring?',
    answers: [{
        letter: 'a',
        answer: 'yes',
        id: "wrongAnswer8"
      },
      {
        letter: 'b',
        answer: 'no',
        id: "wrongAnswer8"
      },
      {
        letter: 'c',
        answer: 'yes, unless the mutation occurs in only somatic cells',
        id: "correctAnswer8"
      },
      {
        letter: 'd',
        answer: 'no, unless the mutation only occurs in somatic cells',
        id: "wrongAnswer8"
      },
    ]
  },
  //9
  {
    question: 'what are boolean expressions named for ?',
    answers: [{
        letter: 'a',
        answer: 'its fun to say',
        id: "wrongAnswer9"
      },
      {
        letter: 'b',
        answer: 'the person who named boolean expressions really liked ghosts👻 ',
        id: "wrongAnswer9"
      },
      {
        letter: 'c',
        answer: 'the person who named boolean expressions was super pale and skinny so they were making a joke about themselves',
        id: "wrongAnswer9"
      },
      {
        letter: 'd',
        answer: 'a mathematition in the 1800s (boring)',
        id: "correctAnswer9"
      },
    ]
  },
  //10
  {
    question: 'why do bitwise operations always involve 1 and 0?',
    answers: [{
        letter: 'a',
        answer: 'bitwise operations operate in binary',
        id: "correctAnswer10"
      },
      {
        letter: 'b',
        answer: 'to make things a lot simpler',
        id: "wrongAnswer10"
      },
      {
        letter: 'c',
        answer: '1 and 0 are completley arbitrary',
        id: "wrongAnswer10"
      },
      {
        letter: 'd',
        answer: 'bitwise operations do not only involve 1s and 0s',
        id: "wrongAnswer10"
      },
    ]
  },
  //11
  {
    question: 'What is the Bottleneck Effect?',
    answers: [{
        letter: 'a',
        answer: 'a type of genetic drift where a small gene pool establishes its own small population seperate from a parent population',
        id: "wrongAnswer11"
      },
      {
        letter: 'b',
        answer: 'the increase in endangered species due to pollution',
        id: "wrongAnswer11"
      },
      {
        letter: 'c',
        answer: 'something you made up lol',
        id: "wrongAnswer11"
      },
      {
        letter: 'c',
        answer: 'genetic drift due to a large decrease in a species population',
        id: "correctAnswer11"
      },
    ]
  },
  //12
  {
    question: 'What is the Founder Effect?',
    answers: [{
        letter: 'a',
        answer: 'genetic drift due to a large decrease in a species population',
        id: "wrongAnswer12"
      },
      {
        letter: 'b',
        answer: 'a type of genetic drift where a small gene pool establishes its own small population seperate from a parent populationsomething you made up lol',
        id: "correctAnswer12"
      },
      {
        letter: 'c',
        answer: 'the increase of animals on the endangered species list due to pollution',
        id: "wrongAnswer12"
      },
      {
        letter: 'c',
        answer: 'something you made up lol',
        id: "wrongAnswer12"
      },
    ]
  },
  //13
  {
    question: 'How much of your DNA is made up of your genetics?',
    answers: [{
        letter: 'a',
        answer: 'Between 98 and 99.9 percent',
        id: "wrongAnswer13"
      },
      {
        letter: 'b',
        answer: '100%',
        id: "wrongAnswer13"
      },
      {
        letter: 'c',
        answer: 'Between 1 and 3%',
        id: "correctAnswer13"
      },
      {
        letter: 'd',
        answer: 'none of your DNA is made up of your genetics',
        id: "wrongAnswer13"
      },
    ]
  },
  //14
  {
    question: 'What is Gregor Mendel known as?',
    answers: [{
        letter: 'a',
        answer: 'Mother of Genetics',
        id: "wrongAnswer14"
      },
      {
        letter: 'b',
        answer: 'Daddy of Genetics',
        id: "wrongAnswer14"
      },
      {
        letter: 'c',
        answer: 'King of Genetics',
        id: "wrongAnswer14"
      },
      {
        letter: 'd',
        answer: 'Father of Genetics',
        id: "correctAnswer14"
      },
    ]
  },
  //15
  {
    question: 'I need one more question and I cant think of anything?',
    answers: [{
        letter: 'a',
        answer: 'this is the wrong answer',
        id: "wrongAnswer15"
      },
      {
        letter: 'b',
        answer: 'also the wrong answer',
        id: "wrongAnswer15"
      },
      {
        letter: 'c',
        answer: 'another wrong one',
        id: "wrongAnswer15"
      },
      {
        letter: 'd',
        answer: 'ding ding ding we have a winner',
        id: "correctAnswer15"
      },
    ]
  }
];

Template.checkpoint4.helpers({

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

Template.checkpoint4.events({

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
        cp: 4 // CHANGE TO NEW CP NUMBER
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
        cp: 4 // CHANGE TO NEW CP NUMBER
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
        cp: 4 // CHANGE TO NEW CP NUMBER
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
        cp: 4 // CHANGE TO NEW CP NUMBER
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
        cp: 4 // CHANGE TO NEW CP NUMBER
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
        cp: 4 // CHANGE TO NEW CP NUMBER
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
        cp: 4 // CHANGE TO NEW CP NUMBER
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
        cp: 4 // CHANGE TO NEW CP NUMBER
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
        cp: 4 // CHANGE TO NEW CP NUMBER
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
        cp: 4 // CHANGE TO NEW CP NUMBER
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
        cp: 4 // CHANGE TO NEW CP NUMBER
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
        cp: 4 // CHANGE TO NEW CP NUMBER
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
        cp: 4 // CHANGE TO NEW CP NUMBER
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
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src="img/right4.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h2>Correct! ATP increased by 100.</h2></p>'
    // END SHOW HERE 
    // give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 1,
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src="/img/yodano.gif">'
    document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is B: the trait is inhereted and determined by a single pair of genes. The trait is determined by a single pair of genes. Not all traits are Mendelian. For example, a person\'s blood type is determined by more than one pair of genes, so A is incorrect. While Gregor Mendel is the namesake of Mendelian traits, his work was not recognized until well after his death, so C is incorrect as well.</h5> </p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/jonahhillno.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5>The correct answer to this question is D: 0. Remember in bit operations that the answer is always 0 or 1, so A and C are both incorrect. With AND statements, both responses must be equal to 1 in order for the output to be 1. So, D is the correct answer.</h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/seinfeldno.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5>The correct answer to this question is A: 1. Like the previous question, we must remember that bitwise operations always result in either 1 or 0. However, unlike the last question, the 1 uses an OR statement. With an OR statement, only one input needs to be 1 for the output to be 1. Therefore, A is incorrect. </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/theofficeno.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is D: Huntington Disease. The other three diseases are all autosomal recessive, meaning that an allele needs to be passed down from both parents in order for the genetic disorder to be a part of an offsprings phenotype. If only one parent passes down the allele, the offspring is considered a carrier of the genetic disorder. However, in autosomal dominant genetic disorders like Huntington disease, only one parent needs to pass down an allele for a trait to become part of an offsprings phenotype</h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/daniellebrooksno.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h5>The correct answer to this question is B: Eye Color. There is only one gene involved in determing a persons earlobes, hairline, and ear wax. However, there are many genes involved in determining a person\'s eye color. Two of the main genes involved are OCA2 and HERC2.</h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/nonono.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h5>The correct answer to this question is C: codominance. Pleiotopy refers to when a single gene effects a person\'s phenotype in many different ways. A polygenic trait refers to one controlled by more than one gene, like a person\'s blood type. Codominance cal also be incomplete, where while two alles are dominant, one is partially dominant over another.</h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/wrong.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h5>The correct answer to this question is A: pleiotropy. Did you get the last question right? If you got it wrong, there was a definiton of what pleiotropy is. If you got it wrong, and just didnt read, you might want to start doing that... </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/nope.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5>The correct answer to this question is C: yes, unless the mutation occurs in only somatics cells. Somatic cells are all cells other than eggs and sperm. So if a mutation is acquired in either sperm or eggs, an acquired trait can be passed down. However, if a mutation is aquired in only somatic cells, the mutation will never be passed down. </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/nosir.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h5>The correct answer to this question is D: A mathematition in the 1800s. Sorry, no avid Monty Python lovers here. </h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/ksno.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is A: bitwise operation operates in binary. These ones and zeros are not there aribitrarily or for sake of simplicity.</h5> </p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/joseno.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is D: The Bottleneck Effect. Genetic drift that occurs when one portion of a population starts its own small population is known at The Founder Effect. </h5> </p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/simoncowellno.gif">';
    document.getElementById('postQuestion').innerHTML += '<p> <h5>The correct answer to this question is B: the Founder Effect. As stated by the last question, genetic drift due to a large decrease in population is known as the Bottleneck Effect.</h5></p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/yourewrong.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is C: between 1 and 3%. The rest of your DNA is made up of commands that tell your genes WHAT to do.</h5> </p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/incorrect.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is C: the Father of Genetics.</h5> </p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 4 // CHANGE TO NEW CP NUMBER
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
    document.getElementById('postQuestion').innerHTML += '<img src ="/img/false.gif">';
    document.getElementById('postQuestion').innerHTML += '<p><h5> The correct answer to this question is D because I have no better answers lmao</h5> </p>';
    // END SHOW HERE 
    // do not give points
    try {
      var userName = Meteor.users.findOne(Meteor.userId()).username;
      Meteor.call('addPoints', {
        username: userName,
        question: NUMQ.get(),
        answer: 0,
        cp: 4 // CHANGE TO NEW CP NUMBER
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