// imports
import { Template } from 'meteor/templating';

import './level4.html';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';

var game, cell, saltOut, saltIn;
function addImagesRender() {
  // add the congrats div before the canvas game element
  document.getElementById('vis_screen').innerHTML += 
        '<div class="js-overlay overlay" position: absolute; id="congrats"></div>';
  // ok resume regular code for a phaser game
  var width = document.getElementById('vis_screen').clientWidth;
  var height = document.getElementById('vis_screen').clientHeight;
  game = new Phaser.Game(width+1, height, Phaser.AUTO, 'vis_screen', { preload: preload, create: create, update: update, render: render });

  function preload() {
    game.stage.backgroundColor = "#72c6e7";
    game.load.image('cell', '/img/cell.png');
    game.load.image('salt', '/img/salt.png');
  }

  function create() {
    // set the arcade physics for the outside solute
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.text(12, 12, 'Container Volume = 1e-12 L\nCell Volume = 8e-14 L', { font: "12px Arial", fill: "#000000"});
    cell = game.add.sprite(width*0.5, height*0.5, 'cell');
    cell.anchor.setTo(0.5);
    // draw solute
    saltOut = game.add.group();
    saltOut.enableBody = true;
    for (var i = 0; i < 150; i++) {
      var temp = saltOut.create(game.world.randomX, game.world.randomY, 'salt');
      temp.scale.setTo(0.01,0.01);
      temp.name = 'salt' + temp;
      temp.body.collideWorldBounds = true;
      temp.body.bounce.setTo(1, 1);
      temp.body.velocity.setTo(20, 20);
    }
    game.physics.enable([saltOut,cell], Phaser.Physics.ARCADE);
    cell.body.immovable = true;
    // set the physics for the inside physics
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.restitution = 1;
    //  The bounds of our physics simulation
    var bounds = new Phaser.Rectangle(width*0.5 - cell.width*0.4, height*0.5 - cell.height*0.4, cell.width*0.8, cell.height*0.8);
    // draw solute
    saltIn = game.add.physicsGroup(Phaser.Physics.P2JS);
    // create 3 solute molecules in cell
    for (var i = 0; i < 20; i++) {
      var temp = saltIn.create(Math.random() * (cell.width) + width*0.5 - cell.width/2, Math.random() * (cell.height) + height*0.5 - cell.height/2, 'salt');
      temp.scale.setTo(0.01,0.01);
      temp.name = 'salt' + temp;
      temp.body.collideWorldBounds = true;
      temp.body.setCircle(0.01*temp.width/2);
      // enable physics body
      game.physics.p2.enable(temp);
      temp.body.velocity.x = 20;
      temp.body.velocity.y = 20;
    }
    //  Create a new custom sized bounds, within the world bounds
    customBounds = { left: null, right: null, top: null, bottom: null };
    createPreviewBounds(bounds.x, bounds.y, bounds.width, bounds.height);
  }

  function createPreviewBounds(x, y, w, h) {
    var sim = game.physics.p2;
    //  If you want to use your own collision group then set it here and un-comment the lines below
    var mask = sim.boundsCollisionGroup.mask;
    customBounds.left = new p2.Body({ mass: 0, position: [ sim.pxmi(x), sim.pxmi(y) ], angle: 1.5707963267948966 });
    customBounds.left.addShape(new p2.Plane());
    // customBounds.left.shapes[0].collisionGroup = mask;
    customBounds.right = new p2.Body({ mass: 0, position: [ sim.pxmi(x + w), sim.pxmi(y) ], angle: -1.5707963267948966 });
    customBounds.right.addShape(new p2.Plane());
    // customBounds.right.shapes[0].collisionGroup = mask;
    customBounds.top = new p2.Body({ mass: 0, position: [ sim.pxmi(x), sim.pxmi(y) ], angle: -3.141592653589793 });
    customBounds.top.addShape(new p2.Plane());
    // customBounds.top.shapes[0].collisionGroup = mask;
    customBounds.bottom = new p2.Body({ mass: 0, position: [ sim.pxmi(x), sim.pxmi(y + h) ] });
    customBounds.bottom.addShape(new p2.Plane());
    // customBounds.bottom.shapes[0].collisionGroup = mask;
    sim.world.addBody(customBounds.left);
    sim.world.addBody(customBounds.right);
    sim.world.addBody(customBounds.top);
    sim.world.addBody(customBounds.bottom);
} 

  //  Move the knocker with the arrow keys
  function update () {
    //  Enable physics between the knocker and the ball
    game.physics.arcade.collide(saltOut, cell);     
  }

  function render () {
    //debug helper
    //game.debug.spriteInfo(ball, 50, 50);
  }
}

Template.level4.rendered = function() {
  addImagesRender();
}

Template.level4.events({
  /*
  render bockly code
  */
  'click #vis':function() {

    // reset screen
    cell.scale.setTo(1,1);
    document.getElementById('congrats').style.opacity = 0;

    // resume normal vis code
    var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));
    // initial values 
    var volOut = 1e-12;
    var volIn = 8e-14;
    var volInOG = volIn;
    var nOut = 150;
    var nIn = 20;
    var avo = 6.022e23;

    // define detect solute function
    function detect_concentration(molecule, location) {
      if (molecule == 'ATP' || molecule == 'sugar') {
        window.alert("don't worry about energy or sugar in this level!");
        return;
      }
      if (location == "in") {
        return (nIn/avo)/volIn;
      } else {
        return (nOut/avo)/volOut;
      }
    }

    // define pump function
    function pump_water(vol) {
      volOut += vol;
      volIn -= vol;
      cell.scale.setTo(volIn/volInOG,volIn/volInOG);
    }

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
      blocks = 'var while_ITER = 0;\n' + blocks.split(pivot)[0] + pivot + 'while_ITER += 1;\n if (while_ITER >= 1000) {\nwindow.alert("oh no! you had over 1000 iterations. did something go wrong? check how you change the volumes!");\nbreak;}\n'
          + blocks.split(pivot)[1];
    } catch(error) {
      // no while loop 
    }

    //congrats
    blocks += '\nif (Math.abs(detect_concentration("solute", "in") - detect_concentration("solute", "out")) <= 1e-12) {\n'
        + '$("#congrats").velocity({opacity: "1"}, {duration: "1000", delay: "2000"});\n}';

    // fix the print species function
    blocks = blocks.replace(/\\n/g, "</br>");
    var string = '';
    blocks = blocks.replace(/window.alert/g, "string += ");

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
    document.getElementById('congrats').innerHTML = '<h3>Good Work!</h3>' + '<p style="color:black;"> you solved this in ' + while_ITER + ' iterations!</p>'

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
      level: 4, // CHANGE THIS TO LEVEL NUMBER
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
    var handle = Meteor.subscribe("loadBlocks", userName, 4, { // CHANGE TO LEVEL NUMBER
        onError: function() {console.log(error)},
        onReady: function() {
          console.log('ready');
          const ws = UserBlocks.findOne({username: userName, level: 4}).ws; // CHANGE TO LEVEL NUMBER
          var xml = Blockly.Xml.textToDom(ws);
          Blockly.Xml.domToWorkspace(xml, workspace);
          console.log('restored');
          handle.stop();
        }
    });
  },

});
        

