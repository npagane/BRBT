// imports
import { Template } from 'meteor/templating';

import './level9.html';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';

var width, height;
function addImagesRender() {
  // add the cell
  document.getElementById('vis_screen').innerHTML += '<div id="cell" style="position: absolute; top:35%; left: 35%; height: 30%; width:30%;">' 
  + '<img src="img/swimcell.png" style="position: absolute; height: 100%; width: 100%;"><img id="swimmer" src="img/swimmer.png" style="position: absolute; top: 32%; height: 100%; width: 100%;"></div>';
  // congrats
  document.getElementById('vis_screen').innerHTML += '<div id="congrats" style="position:absolute; top: 0; left: 0; opacity: 0; color: blue;"></div>';
  // reorient cell to 0deg
  $("#cell").velocity({rotateZ: "90deg"});
  // ok resume regular code for a phaser game
  width = document.getElementById('vis_screen').clientWidth;
  height = document.getElementById('vis_screen').clientHeight;
  var game = new Phaser.Game(width+1, height, Phaser.AUTO, 'vis_screen', { preload: preload, create: create, update: update});

  function preload() {
    game.stage.backgroundColor = "#72c6e7";
    game.load.image('sugar', '/img/sugar.png');
  }

  function create() {
    // set the arcade physics for the outside solute
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.text(12, 12, 'maximum [sugar] >= 2e-8 M', { font: "12px Arial", fill: "#000000"});
    // draw sugar
    sugar = game.add.group();
    sugar.enableBody = true;
    var plaMod = 0;
    var plaSign = [[-1,-1],[-1,1],[1,-1],[1,1]];
    // main source of glucose
    for (var i = 0; i < 150; i++) {
      var temp = sugar.create(width*0.85 + plaSign[(plaMod % 4)][0]*width*0.15*Math.random(), height*0.15 + plaSign[(plaMod % 4)][1]*height*0.15*Math.random(), 'sugar');
      temp.scale.setTo(0.01,0.01);
      temp.name = 'sugar' + temp;
      temp.body.collideWorldBounds = true;
      temp.body.bounce.setTo(1, 1);
      temp.body.velocity.setTo(0.05, -0.05);
      plaMod += 1;
    }
    // add some on the left side to warrant cell movement there
    for (var i = 0; i < 50; i++) {
      var temp = sugar.create(width, game.world.randomY, 'sugar');
      temp.scale.setTo(0.01,0.01);
      temp.name = 'sugar' + temp;
      temp.body.collideWorldBounds = true;
      temp.body.bounce.setTo(1, 1);
      temp.body.velocity.setTo(0, -0.05);
      plaMod += 1;
    }
    // add some on the top side to warrant cell movement there
    for (var i = 0; i < 50; i++) {
      var temp = sugar.create(game.world.randomX, 0, 'sugar');
      temp.scale.setTo(0.01,0.01);
      temp.name = 'sugar' + temp;
      temp.body.collideWorldBounds = true;
      temp.body.bounce.setTo(1, 1);
      temp.body.velocity.setTo(0.05, 0);
      plaMod += 1;
    }
    game.physics.arcade.enable(sugar);
  }

  //  Move the knocker with the arrow keys
  function update () {
    //  Enable physics between the knocker and the ball
    game.physics.arcade.collide(sugar);     
  }

}

Template.level9.onRendered(function() {
  addImagesRender();
});

Template.level9.events({
    /*
    render blockly code
    */
   'click #vis':function() {

    var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));

    // initial values
    var cellLeft = $("#cell").position().left;
    var cellTop = $("#cell").position().top;
    var concIn = 0;
    var concOut = [1,2,3,4,5]; // concentration increases as you move to top right corner

    // define detect solute function
    function detect_concentration(molecule, location) {
      if (molecule == 'ATP' || molecule == 'salt') {
        window.alert("don't worry about energy or salt in this level!");
        return;
      }
      if (location == "in") {
        return concIn;
      } else {
        // check position and ascribe concentration given the regions
        return concOut[Math.round(4.3*(height-cellTop)/height)]*concOut[Math.round(4.3*cellLeft/width)]*1e-9;
      }
    }
    
    // define flagella tumble function
    function flagella_tumble() {
      $("#swimmer").velocity({rotateY: "360deg"}, 1000);
      // stall cell body
      $("#cell").velocity({top: "+=0%"}, 1000);
      // stall congrats
      $("#congrats").velocity({opacity: "0"}, 1000);
      var potAngle = Math.round(Math.random()*360);
      while ( cellTop - 50*Math.sin(Math.PI * potAngle / 180) < 5 || cellTop - 50*Math.sin(Math.PI * potAngle / 180) > height - $("#cell").height()/2
          || cellLeft + 50*Math.cos(Math.PI * potAngle / 180) < 5|| cellLeft + 50*Math.cos(Math.PI * potAngle / 180) > width - $("#cell").width()/2) {
        potAngle = Math.round(Math.random()*360);
      }
      return potAngle;
    }

    // define flagella run function
    function flagella_run(angle) {
      // check to see if the cell is about to run off the page
      if ( cellTop - 50*Math.sin(Math.PI * angle / 180) < 5 || cellTop - 50*Math.sin(Math.PI * angle / 180) > height - $("#cell").height()/2
          || cellLeft + 50*Math.cos(Math.PI * angle / 180) < 5|| cellLeft + 50*Math.cos(Math.PI * angle / 180) > width - $("#cell").width()/2) {
        angle = flagella_tumble();
        //console.log('had to reorient');
      }
      $('#swimmer').velocity({rotateY: "-360deg"}, 500).velocity({rotateY: "0deg"}, 500);
      $("#cell").velocity({rotateZ: (90-angle) + 'deg'}, 500).velocity({top: "-=" + 50*Math.sin(Math.PI * angle / 180) + "px", left: "+=" + 50*Math.cos(Math.PI * angle / 180) + "px"}, 500);
      // stall congrats
      $("#congrats").velocity({opacity: "0"}, 1000);
      // update cell position
      cellTop -= 50*Math.sin(Math.PI * angle / 180);
      cellLeft += 50*Math.cos(Math.PI * angle / 180);
    }

    // define congrats function
    function congrats() {
      if ( detect_concentration("solute", "outside") >= 2e-8) {
        $("#congrats").velocity({opacity: "1"}, {duration: "1000"});
      }
    }

    // fix the print species function
    blocks = blocks.replace(/\\n/g, "</br>");
    var string = '';
    blocks = blocks.replace(/window.alert/g, "string += ");

    // change the not equal sign to a comparative to a smol num
    try {
      var cmp1 = blocks.split(' != ')[0].split('(').slice(-1)[0];
      var cmp2 = blocks.split(' != ')[1].split(')')[0];
      var pivot = cmp1 + ' != ' + cmp2;
      blocks = blocks.split(pivot)[0] + 'Math.abs(' + cmp1 + '-' + cmp2 + ') > 1e-12' + blocks.split(pivot)[1];
    } catch(error) {
      // ok there was no not equal sign
    }

    // ensure there are not more than 1000 iterations 
    try {
      var condition = blocks.split('while (')[1].split(') {\n')[0];
      var pivot = 'while (' + condition + ') {\n';
      blocks = 'var while_ITER = 0;\n' + blocks.split(pivot)[0] + pivot + 'while_ITER += 1;\n if (while_ITER >= 1000) {\nwindow.alert("oh no! you had over 1000 iterations. did something go wrong? check your run and tumble algorithm!");\nbreak;}\n'
          + blocks.split(pivot)[1];
    } catch(error) {
      // no while loop 
      var while_ITER = -1;
    }

    // congrats
    blocks += '\ncongrats();';

    // evaluate blocks
    try {
      eval(blocks);
    } catch(error) {
      window.alert('whoops! check your variables and general syntax because something went wrong')
    }

    // print statements
    if (string != '') {
      var modal = document.getElementById('modalBlock');
      var modalText = document.getElementById('modalText');
      modalText.innerHTML = '';
      modalText.innerHTML += '<p>' + string + '</p>';
      modal.style.display = 'block';
    }

    // how many iterations
    if (while_ITER == -1) {
      while_ITER = 'NA';
    }
    document.getElementById('congrats').innerHTML = '<h3>Good Work!</h3>' + '<p style="color:black;"> this simulation took ' + while_ITER + ' iterations!</p>';

  },

  /* 
  reset
  */
 'click #reset':function() {
    $(".velocity-animating").velocity("stop", true);
    document.getElementById('vis_screen').innerHTML = '';
    addImagesRender();
    $("#modalBlock .close").click();
  },

  /*
   save blockly workspace 
   */
  'click #save':function() {
    //event.preventDefault();
    var userName = Meteor.users.findOne(Meteor.userId()).username;
    console.log('saving the workspace for level');
    const ws = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
    Meteor.call('saveBlocks', {
      username: userName,
      ws: ws,
      level: 9,  // CHANGE THIS TO LEVEL NUMBER
    }, (err, res) => {
      if (err) {
        alert(err);
      } else {
        // success!
      }
    });
  },

  /*
   save blockly workspace 
   */
  'click #load':function() {
    // clear workspace
    Blockly.mainWorkspace.clear();
    var userName = Meteor.users.findOne(Meteor.userId()).username;
    //event.preventDefault();
    console.log('loading the workspace for level');
    var handle = Meteor.subscribe("loadBlocks", userName, 9, {  // CHANGE THIS TO LEVEL NUMBER
        onError: function() {console.log(error)},
        onReady: function() {
          console.log('ready');
          const ws = UserBlocks.findOne({username: userName, level: 9}).ws;  // CHANGE THIS TO LEVEL NUMBER
          var xml = Blockly.Xml.textToDom(ws);
          Blockly.Xml.domToWorkspace(xml, workspace);
          console.log('restored');
          handle.stop();
        }
    });
  },

});