//imports
import { Template } from 'meteor/templating';

import './level11.html';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';


// global-ish lol variables
var ligandsReceived = [];
var cell, sugar, width, height, cellLocX, cellLocY, transportHAPPEN, metabolizeHAPPEN;
var transportHAPPEN = 0;
var metabolizeHAPPEN = false;

function addImagesRender() {
  ligandsReceived = [210, 210];
  transportHAPPEN = 0;
  metabolizeHAPPEN = false;
  // add the congrats div before the canvas game element
  document.getElementById('vis_screen').innerHTML += 
      '<div class="js-overlay overlay" id="congrats" style="position: absolute;"></div>';
  // ok resume regular code for a phaser game
  width = document.getElementById('vis_screen').clientWidth;
  height = document.getElementById('vis_screen').clientHeight;
  document.getElementById('vis_screen').innerHTML += '<img id="atp" src="img/atp.png" style="position: absolute; height: 10%; width: 10%; top: ' + 0.75*height + 'px; left: ' + 0.15*width + 'px; opacity: 0;">';
  var game = new Phaser.Game(width+1, height, Phaser.AUTO, 'vis_screen', { preload: preload, create: create, update: update});

  function preload() {
    game.stage.backgroundColor = "#72c6e7";
    game.load.image('cell', '/img/yeastcell.png');
    game.load.image('sugar', '/img/sugar.png');
  }

  function create() {
    // set the arcade physics for the outside solute
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.text(12, 12, 'outside volume = 1e-12 L\ncell volume = 4.2e-14 L\ninital cellular [ATP] = 1498 μM\noptimum [ATP] >= 1500 μM', { font: "12px Arial", fill: "#000000"});
    cell = game.add.sprite(width*0.5, height*0.5, 'cell');
    cell.anchor.setTo(0.5);
    cellLocX = cell.x;
    cellLocY = cell.y;
    // draw sugar
    sugar = game.add.group();
    sugar.enableBody = true;
    var centers = [[0.35*width, 0.35*height], [0.65*width, 0.35*height], [0.35*width, 0.65*height], [0.65*width, 0.65*height]];
    var plaSign = [[-1,-1], [1,-1], [-1,1], [1,1]]
    var plaMod = 0;
    for (var i = 0; i < 50; i++) {
      for (var j = 0; j < (plaMod % 4) + 1; j++) {
        var temp = sugar.create(centers[(plaMod %4)][0]+plaSign[(plaMod %4)][0]*Math.random()*width*0.35, centers[(plaMod %4)][1]+plaSign[(plaMod %4)][1]*Math.random()*height*0.35, 'sugar');
        temp.scale.setTo(0.01,0.01);
        temp.name = 'sugar' + temp;
        temp.body.collideWorldBounds = true;
        temp.body.bounce.setTo(1, 1);
        temp.body.velocity.setTo(0.5, 0.5);
      }
      plaMod += 1;
    }
    // add more on the bottom left to create gradient
    for (var i = 0; i < 100; i++) {
      var temp = sugar.create(centers[2][0]+plaSign[1][1]*Math.random()*width*0.35, centers[2][1]+plaSign[1][1]*Math.random()*height*0.15, 'sugar');
      temp.scale.setTo(0.01,0.01);
      temp.name = 'sugar' + temp;
      temp.body.collideWorldBounds = true;
      temp.body.bounce.setTo(1, 1);
      temp.body.velocity.setTo(0.5, 1);
    }
    game.physics.arcade.enable([sugar,cell]);
    cell.body.immovable = true;
    cell.body.collideWorldBounds = true;
    //cell.body.setSize(0.8*cell.width,0.8*cell.height,0,0);
  }

  //  Move the knocker with the arrow keys
  function update () {
    //  Enable physics between the knocker and the ball
    game.physics.arcade.collide(sugar, cell, collisionCallback);     
  }

  function collisionCallback (obj1, obj2) {
    // immobilize the sugar
    obj2.body.collideWorldBounds = false;
    obj2.body.immovable = true;
    obj2.body.velocity.setTo(0,0);
    // kill off the glucose if metabolize is for the go
    if (metabolizeHAPPEN) {
      obj2.scale.setTo(0,0);
    }
    var potAngle = Math.atan((obj2.body.position.y - cellLocY)/(obj2.body.position.x - cellLocX)) * 180 / Math.PI;
    // check sign 
    if (potAngle >= 360) {
      potAngle -= 180;
    } else if (potAngle < 0) {
      potAngle += 180;
    }
    if (obj2.body.position.y > cellLocY) {
      potAngle = 360 - potAngle;
    }
    ligandsReceived.push(potAngle);
  }
}

Template.level11.onRendered(function() {
  addImagesRender();
});


Template.level11.events({
    /*
    render blockly code
    */
   'click #vis':function() {

    var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));

    // initial values
    var volOut = 1e-12;
    var volIn = 4.2e-14;
    var nInATP = 37888015;
    var nOutATP = 0;
    var nInSolute = 0;
    var nOutSolute = 8000;
    var avo = 6.022e23;

    // define activated_receptors function
    function activated_receptors() {
      return ligandsReceived;
    }

    // define crawl function
    var timeScale = 0;
    function crawl(direction, delta) {
      timeScale = .05;
      cell.body.velocity.y -= delta*Math.sin(Math.PI*direction/180)*timeScale;
      cellLocY -= delta*Math.sin(Math.PI*direction/180);
      cell.body.velocity.x += delta*Math.cos(Math.PI*direction/180)*timeScale;
      cellLocX += delta*Math.cos(Math.PI*direction/180);
      // decelerate
      cell.body.drag.x = delta*Math.pow(timeScale,2);
      cell.body.drag.y = delta*Math.pow(timeScale,2);
    }

    // define detect solute function
    function detect_concentration(molecule, location) {
      if (molecule == 'ATP') {
        if (location == "in") {
          return nInATP/avo/volIn;
        } else {
          return nOutATP/avo/volOut;
        }
      } else if (molecule == 'sugar') {
        if (location == "in") {
          return nInSolute/avo/volIn;
        } else {
          return nOutSolute/avo/volOut;
        }
      } else {
        console.log("you don't have to worry about salt in this level!");
        return;
      }
    }

    // define transport function
    function transport(location, transport) {
      if (transport == "diffusion") {
        window.alert("glucose is too big to diffuse through!");
        while_ITER = 8000;
        return;
      } else if(transport == "osmosis") {
        window.alert("glucose is not water and can't go through osmosis!");
        while_ITER = 8000;
        return;
      } else {
        nInSolute += 1;
        nOutSolute -= 1;
        transportHAPPEN += 1;
      }
    }

    // COPIED ALL OF THIS FROM LEVEL 3 (and changed spacing and stuff)
    // find the species variable
    // TRY CATCHING ALL THE PARSING BC U KNOW
    try {
      var speciesVar = blocks.split(' = {')[0].split('\n').splice(-1)[0];
      speciesVar = speciesVar.trim();

      // check the stoichiometry of the glycolysis inputs
      var specOb = blocks.split(speciesVar + ' = {\n')[1].split('};')[0];
      var temp = [];
      for (var i = 0; i < 10; i++) { //10 objects to keep track of as defined in the blocks
        temp.push(Number(specOb.split(',')[i].split(': ').slice(-1)[0]))
      }
      specOb = temp;

      // check for precedence of cellular respiration
      block_bits = blocks.split('glycolysis(');
      if (block_bits.length > 1) {
        // check that transport happened
        if (transportHAPPEN) {
          window.alert("you can't metabolize a substance you haven't transported into the cell yet!")
          return;
        }
        // check for variable
        if (blocks.split('glycolysis(')[1].split(')')[0] != speciesVar) {
          window.alert('check variable assignment on metabolic functions!');
          return;
        }
        // list of elements
        // sugar  O2  ADP ATP oxidizedCarriers  reducedCarriers pyruvate  acetylCoA water CO2
        var glyX = blocks.split(speciesVar + ' = glycolysis(' + speciesVar + ');')[0].split(' < ').slice(-1)[0].split(';')[0];
        if (specOb[0] < glyX) {
          window.alert('you need at least as many glucose molecules as  cycles of glycolysis!');
          return;
        }
        if (specOb[1] < 6*glyX) {
          window.alert('you need at least 6 oxygen gas molecules to begin aerobic cellular respiration!');
          return;
        }
        if (specOb[2] < glyX*4) {
          window.alert('you need at least ' + specOb[0]*4 + ' ADP molecules to undergo glycolysis for ' + glyX + ' cycles!');
          return;
        }
        if (specOb[3] < glyX*2) {
          window.alert('you need at least ' + specOb[0]*2 + ' ATP molecules to undergo glycolysis for ' + glyX + ' cycles!');
          return;
        }
        if (specOb[4] < glyX*2) {
          window.alert('you need at least ' + specOb[0]*2 + ' oxidized electron carries (NAD+) to undergo glycolysis for ' + glyX + ' cycles!');
          return;
        }
      }
      block_bits = blocks.split('pyruvate_oxidation(');
      if (block_bits.length > 1) {
        if (blocks.indexOf('glycolysis(') > blocks.indexOf('pyruvate_oxidation(')) {
          window.alert('check order of metabolism!');
          return;
        }
        // check for variable
        if (blocks.split('pyruvate_oxidation(')[1].split(')')[0] != speciesVar) {
          window.alert('check variable assignment on metabolic functions!');
          return;
        }
        // check that pyruvate oxidation is twice of glycolysis
        var pyrX = blocks.split(speciesVar + ' = pyruvate_oxidation(' + speciesVar + ');')[0].split(' < ').slice(-1)[0].split(';')[0];
        if (Number(eval(pyrX)) != Number(eval(glyX))*2) {
          window.alert('check how many cycles you need for each step of metabolism! What are the outputs of glycolysis again?');
          return;
        }
      }
      block_bits = blocks.split('citric_acid_cycle(');
      if (block_bits.length > 1) {
        if (blocks.indexOf('pyruvate_oxidation(') > blocks.indexOf('citric_acid_cycle(')) {
          window.alert('check order of metabolism!');
          return;
        }
        // check for variable
        if (blocks.split('citric_acid_cycle(')[1].split(')')[0] != speciesVar) {
          window.alert('check variable assignment on metabolic functions!');
          return;
        }
        // check that citric acid cycle is same as pyruvate oxidation
        var tcaX = blocks.split(speciesVar + ' = citric_acid_cycle(' + speciesVar + ');')[0].split(' < ').slice(-1)[0].split(';')[0];
        if (Number(eval(pyrX)) != Number(eval(tcaX))) {
          window.alert('check how many cycles you need for each step of metabolism! What are the outputs of pyruvate oxidation again?');
          return;
        }
      }
      block_bits = blocks.split('oxidative_phosphorylation(');
      if (block_bits.length > 1) {
        if (blocks.indexOf('citric_acid_cycle(') > blocks.indexOf('oxidative_phosphorylation(')) {
          window.alert('check order of metabolism!');
          return;
        }
        // check for variable
        if (blocks.split('oxidative_phosphorylation(')[1].split(')')[0] != speciesVar) {
          window.alert('check variable assignment on metabolic functions!');
          return;
        }
      }
    } catch (error) {
      // no metabolism functions
    }

    // glycolysis function
    function glycolysis(species) {
      // species change
      var keys = Object.keys(species);
      species[keys[0]] += -1; //sugar
      species[keys[1]] += 0; //oxygen
      species[keys[2]] += (-4 + 2); //ADP
      species[keys[3]] += (-2 + 4); //ATP
      species[keys[4]] += -2; //oxidizedCarriers
      species[keys[5]] += 2; //reducedCarriers
      species[keys[6]] += 2; //pyruvate
      species[keys[7]] += 0; //acetylCoA
      species[keys[8]] += 0; //water
      species[keys[9]] += 0; //carbonDioxide
      return species;
    }

    // pyruvate_oxidation function
    function pyruvate_oxidation(species) {
      // species change
      var keys = Object.keys(species);
      species[keys[0]] += 0; //sugar
      species[keys[1]] += 0; //oxygen
      species[keys[2]] += 0; //ADP
      species[keys[3]] += 0; //ATP
      species[keys[4]] += -1; //oxidizedCarriers
      species[keys[5]] += 1; //reducedCarriers
      species[keys[6]] += -1; //pyruvate
      species[keys[7]] += 1; //acetylCoA
      species[keys[8]] += 0; //water
      species[keys[9]] += 1; //carbonDioxide
      return species;
    }

    // citric_acid_cycle function
    function citric_acid_cycle(species) {
      // species change
      var keys = Object.keys(species);
      species[keys[0]] += 0; //sugar
      species[keys[1]] += 0; //oxygen
      species[keys[2]] += -1; //ADP
      species[keys[3]] += 1; //ATP
      species[keys[4]] += -4; //oxidizedCarriers
      species[keys[5]] += 4; //reducedCarriers
      species[keys[6]] += 0; //pyruvate
      species[keys[7]] += -1; //acetylCoA
      species[keys[8]] += 0; //water
      species[keys[9]] += 2; //carbonDioxide
      return species;
    }

    // oxidative phosphorylation function
    function oxidative_phosphorylation(species) {
      // species change
      var keys = Object.keys(species);
      species[keys[0]] += 0; //sugar
      species[keys[1]] += -6 * eval(glyX); //oxygen
      species[keys[2]] += -32 * eval(glyX); //ADP
      species[keys[3]] += 32 * eval(glyX); //ATP
      species[keys[4]] += 12 * eval(glyX); //oxidizedCarriers
      species[keys[5]] += -12 * eval(glyX); //reducedCarriers
      species[keys[6]] += 0; //pyruvate
      species[keys[7]] += 0; //acetylCoA
      species[keys[8]] += 6 * eval(glyX); //water
      species[keys[9]] += 0; //carbonDioxide

      // check that all the values are not negative and then congrats
      var counter = 0;
      for (var i = 0; i < keys.length; i++) {
        if (species[keys[i]] >= 0 ) {
          counter += 1;
        }
      }
      if (counter == keys.length) {
        // change ATP concentration
        nInATP += 36*eval(glyX);
        nInSolute -= 1*eval(glyX);
      }

      metabolizeHAPPEN = true;
      return species;
    }

	
    // define congrats function
    function congrats() {
      if ( detect_concentration('ATP', 'in') >= 1500e-6 && cellLocX <= 0.25*width && cellLocY >= 0.75*height) {
        // ok if we got here then they must have chemotaxsed, transported, and metabolized correctly
        // so show animations here
        //document.getElementById('atp').style.top = cellLocY + 'px';
        //document.getElementById('atp').style.left = cellLocX + 'px';
        $("#atp").velocity({opacity: "1"}, {delay: "4000"}).velocity({skewX: "20deg"}, {duration: "500", loop: "5"});
        $("#congrats").velocity({opacity: "1"}, {delay: "5000", duration: "1000"});
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

    // ensure there are not more than 1500 iterations 
    try {
      var condition = blocks.split('while (')[1].split(') {\n')[0];
      var pivot = 'while (' + condition + ') {\n';
      blocks = 'var while_ITER = 0;\n' + blocks.split(pivot)[0] + pivot + 'while_ITER += 1;\n if (while_ITER >= 1500) {\nwindow.alert("oh no! you had over 1500 iterations. did something go wrong? check how you regulate ATP!");\nbreak;}\n'
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
      level: 11,  // CHANGE THIS TO LEVEL NUMBER
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
    var handle = Meteor.subscribe("loadBlocks", userName, 11, false, {  // CHANGE THIS TO LEVEL NUMBER
        onError: function() {console.log(error)},
        onReady: function() {
          console.log('ready');
          const ws = UserBlocks.findOne({username: userName, level: 11}).ws;  // CHANGE THIS TO LEVEL NUMBER
          var xml = Blockly.Xml.textToDom(ws);
          Blockly.Xml.domToWorkspace(xml, workspace);
          console.log('restored');
          handle.stop();
        }
    });
  },

});