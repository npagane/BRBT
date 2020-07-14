// imports
import { Template } from 'meteor/templating';

import './level10.html';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';

// global-ish lol variables
var ligandsReceived = [];
var cell, sugar, worldWidth, worldHeight, OGcellHeight, OGcellWidth, cellLocX, cellLocY;
function addImagesRender() {
  ligandsReceived = [315, 315];
  // add the congrats div before the canvas game element
  document.getElementById('vis_screen').innerHTML += 
      '<div class="js-overlay overlay" position: absolute; id="congrats"></div>';
  // ok resume regular code for a phaser game
  worldWidth = document.getElementById('vis_screen').clientWidth;
  worldHeight = document.getElementById('vis_screen').clientHeight;
  var game = new Phaser.Game(worldWidth+1, worldHeight, Phaser.AUTO, 'vis_screen', { preload: preload, create: create, update: update});

  function preload() {
    game.stage.backgroundColor = "#72c6e7";
    game.load.image('cell', '/img/yeastcell.png');
    game.load.image('sugar', '/img/sugar.png');
  }

  function create() {
    // set the arcade physics for the outside solute
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.text(12, 12, 'Max [sugar] = 2e-8 M\n', { font: "12px Arial", fill: "#000000"});
    cell = game.add.sprite(worldWidth*0.5, worldHeight*0.5, 'cell');
    cell.anchor.setTo(0.5);
    cellLocX = cell.x;
    cellLocY = cell.y;
    // draw sugar
    sugar = game.add.group();
    sugar.enableBody = true;
    var centers = [[0.35*worldWidth, 0.35*worldHeight], [0.65*worldWidth, 0.35*worldHeight], [0.35*worldWidth, 0.65*worldHeight], [0.65*worldWidth, 0.65*worldHeight]];
    var plaSign = [[-1,-1], [1,-1], [-1,1], [1,1]]
    var plaMod = 0;
    for (var i = 0; i < 75; i++) {
      for (var j = 0; j < (plaMod % 4) + 1; j++) {
        var temp = sugar.create(centers[(plaMod %4)][0]+plaSign[(plaMod %4)][0]*Math.random()*worldWidth*0.3, centers[(plaMod %4)][1]+plaSign[(plaMod %4)][1]*Math.random()*worldHeight*0.3, 'sugar');
        temp.scale.setTo(0.01,0.01);
        temp.name = 'sugar' + temp;
        temp.body.collideWorldBounds = true;
        temp.body.bounce.setTo(1, 1);
        temp.body.velocity.setTo(0.01, 0.01);
      }
      plaMod += 1;
    }
    // add more on the bottom right to create gradient
    for (var i = 0; i < 150; i++) {
      var temp = sugar.create(centers[3][0]+plaSign[1][0]*Math.random()*worldWidth*0.35, centers[3][1]+plaSign[1][1]*Math.random()*worldHeight*0.15, 'sugar');
      temp.scale.setTo(0.01,0.01);
      temp.name = 'sugar' + temp;
      temp.body.collideWorldBounds = true;
      temp.body.bounce.setTo(1, 1);
      temp.body.velocity.setTo(-0.5, 1);
    }
    game.physics.arcade.enable([sugar,cell]);
    OGcellHeight = cell.body.height;
    OGcellWidth = cell.body.width;
    cell.body.setSize(0.85*cell.body.width, 0.7*cell.body.height, 0, -0.1*cell.body.height);
    cell.anchor.setTo(0.5);
    cell.body.immovable = true;
    cell.body.collideWorldBounds = true;
  }

  //  Move the knocker with the arrow keys
  function update () {
    //  Enable physics between the knocker and the ball
    game.physics.arcade.collide(sugar, cell, collisionCallback);
  }

  function collisionCallback (obj1, obj2) {
    // immobilize the sugar
    obj2.body.collideWorldBounds = false;
    obj2.body.velocity.setTo(0,0);
    var potAngle = Math.atan((obj2.body.position.y - cellLocY)/(obj2.body.position.x - cellLocX)) * 180 / Math.PI;
    // check sign 
    if (obj2.body.position.y > cellLocY) {
      potAngle = 360 - potAngle;
    }
    if (potAngle >= 360) {
      potAngle -= 360;
    } else if (potAngle < 0) {
      potAngle += 360;
    }
    ligandsReceived.push(potAngle);
  }

}

Template.level10.onRendered(function() {
  addImagesRender();
});


Template.level10.events({
    /*
    render blockly code
    */
   'click #vis':function() {

    var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));

    // define activated_receptors function
    function activated_receptors() {
      return ligandsReceived;
    }

    var timeScale = 0;
    // define crawl function
    function crawl(direction, delta) {
      timeScale = 10;
      cell.body.velocity.y -= delta*Math.sin(Math.PI*direction/180)/timeScale;
      cellLocY -= delta*Math.sin(Math.PI*direction/180);
      cell.body.velocity.x += delta*Math.cos(Math.PI*direction/180)/timeScale;
      cellLocX += delta*Math.cos(Math.PI*direction/180);
      cell.body.setSize(OGcellWidth, OGcellHeight, 0, 0);
      // decelerate
      cell.body.drag.x = 1/Math.pow(timeScale,2);
      cell.body.drag.y = 1/Math.pow(timeScale,2);
    }

    // define detect solute function
    function detect_concentration(molecule, location) {
      if (molecule == 'sugar' && location == 'out') {
        if ( cellLocX >= 0.75*worldWidth && cellLocY >= 0.75*worldHeight) {
          return 2e-8;
        } else {
          return 1e-8;
        }
      } else {
        window.alert("you don't have to worry about salt, ATP, or any internal concentrations in this level!");
        return;
      }
    }
	
    // define congrats function
    function congrats() {
        if ( detect_concentration('sugar', 'out')  == 2e-8) {
          $("#congrats").velocity({opacity: "1"}, {duration: "1000", delay: "3000"});
        }
    }

    // fix the print species function
    blocks = blocks.replace(/\\n/g, "</br>");
    var string = '';
    blocks = blocks.replace(/window.alert/g, "string += ");

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

    // how many iterations
    if (while_ITER == -1) {
      document.getElementById('congrats').innerHTML = '<h3>Good Work!</h3>';
    } else {
      document.getElementById('congrats').innerHTML = '<h3>Good Work!</h3><p style="color: black;">this simulation took ' + while_ITER + ' iterations!</p>';
    }
    // print statements
    if (string != '') {
      var modal = document.getElementById('modalBlock');
      var modalText = document.getElementById('modalText');
      modalText.innerHTML = '';
      modalText.innerHTML += '<p>' + string + '</p>';
      modal.style.display = 'block';
    }
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
      level: 10,  // CHANGE THIS TO LEVEL NUMBER
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
    var handle = Meteor.subscribe("loadBlocks", userName, 10, false, {  // CHANGE THIS TO LEVEL NUMBER
        onError: function() {console.log(error)},
        onReady: function() {
          console.log('ready');
          const ws = UserBlocks.findOne({username: userName, level: 10}).ws;  // CHANGE THIS TO LEVEL NUMBER
          var xml = Blockly.Xml.textToDom(ws);
          Blockly.Xml.domToWorkspace(xml, workspace);
          console.log('restored');
          handle.stop();
        }
    });
  },

});