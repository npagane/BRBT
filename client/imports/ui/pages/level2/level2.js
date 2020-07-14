// imports
import { Template } from 'meteor/templating';

import './level2.html';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';

Template.level2.events({
    /*
    render blockly code
    */
   'click #vis':function() {
      var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));
      // make sure they try and use a function to print 
      var block_bits = blocks.split('function ');
      if (block_bits.length <= 1) {
        window.alert("try using a function block to print out the species' numbers before/after each stage of cellular respiration");
        return;
      }
      // get screen element
      var function_name = block_bits[1].split('(')[0];

      // find the species variable
      var speciesVar = blocks.split(' = {')[0].split('\n').splice(-1)[0];

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
        // check for variable
        if (blocks.split('glycolysis(')[1].split(')')[0] != speciesVar) {
          window.alert('check variable assignment on metabolic functions!');
          return;
        }
        // list of elements
        // sugar  O2  ADP ATP oxidizedCarriers  reducedCarriers pyruvate  acetylCoA water CO2
        var glyX = blocks.split('{\n  ' + speciesVar + ' = glycolysis(' + speciesVar + ');')[0].split(' < ').slice(-1)[0].split(';')[0];
        if (specOb[0] < glyX) {
          window.alert('you need at least as many glucose molecules as  cycles of glycolysis!');
          return;
        }
        if (specOb[1] < 6*glyX) {
          window.alert('you need at least 6 oxygen gas molecules to begin aerobic cellular respiration!');
          return;
        }
        /*if (specOb[1] != glyX*6) {
          window.alert('you need 1 : 6 ratio for oxygen gas : glucose');
          return;
        }*/ //
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
        var pyrX = blocks.split('{\n  ' + speciesVar + ' = pyrvate_oxidation(' + speciesVar + ');')[0].split(' < ').slice(-1)[0].split(';')[0];
        if (Number(pyrX) != Number(glyX)*2) {
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
        var tcaX = blocks.split('{\n  ' + speciesVar + ' = citric_acid_cycle(' + speciesVar + ');')[0].split(' < ').slice(-1)[0].split(';')[0];
        if (Number(pyrX) != Number(tcaX)) {
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

      // define variables for closing the velocityJS graphics
      var offset = 0;
      var renderCmd = '';

      // glycolysis function
      var rep1 = 0;
      function glycolysis(species) {
        if (!rep1) {
          // render mitochondria and sugar
          var img_return = '<img id="mitochondria" src="/img/mitochondria1.png" style="position: absolute; top: 0%; left: 30%;' 
              + 'width: 70%; height: 70%;">';
          img_return += '<img id="sugar1" src="/img/sugar.png" style="position: absolute; top: 70%; left: 20%;' 
              + 'width: 15%; height: 15%;">';
          img_return += '<img id="sugar2" src="/img/sugar.png" style="position: absolute; top: 70%; left: 25%;' 
              + 'width: 15%; height: 15%; opacity: 0;">';
          img_return += '<img id="oxcarrier" src="/img/oxidizedCarriers.png" style="position: absolute; top: 68%; left: 18%;' 
              + 'width: 7%; height: 7%;">';
          img_return += '<img id="redcarrier" src="/img/reducedCarriers.png" style="position: absolute; top: 62%; left: 15%;' 
              + 'width: 10%; height: 10%; opacity: 0;">';
          img_return += '<img id="atp" src="/img/atp.png" style="position: absolute; top: 77%; left: 27%;' 
              + 'width: 10%; height: 10%;">';
          // create div for element
          document.getElementById('vis_screen').innerHTML = 
              '<div style="position: absolute; width: 100%; height: 100%;">' + img_return + '</div>';
          // graphics
          renderCmd += '$("#vis_screen").velocity({opacity: 1}, 750, function() {' + // this is just to pause
              '$("#atp").velocity({skewX: "45deg"}, 1000).velocity("reverse"); $("#oxcarrier").velocity({skewX: "-45deg"}, 1000, function() {' + 
              '$("#sugar1").velocity({width: "5%", height: "5%"}, 1000); $("#sugar2").velocity({width: "5%", height: "5%", opacity: "1"}, 1000);' +
              '$("#redcarrier").velocity({opacity: "1"}, 1500); $("#oxcarrier").velocity({opacity: "0", top: "65%", left: "15%"}, 1000, function() {';
          offset += 3;
        }
        rep1 += 1;
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
      var rep2 = 0;
      function pyruvate_oxidation(species) {
        if (!rep2) {
          // render coenzyme adn carbon dioxide
          var img_return = '<img id="co2_1" src="/img/co2.png" style="position: absolute; top: 85%; left: 14%;' 
          + 'width: 5%; height: 5%; opacity: 0;">';
          img_return += '<img id="co2_2" src="/img/co2.png" style="position: absolute; top: 80%; left: 8%;' 
             + 'width: 5%; height: 5%; opacity: 0;">';
          img_return += '<img id="coA1" src="/img/coA.png" style="position: absolute; top: 73%; left: 22%;' 
              + 'width: 10%; height: 10%; opacity: 0;">';
          img_return += '<img id="coA2" src="/img/coA.png" style="position: absolute; top: 76%; left: 18%;' 
              + 'width: 10%; height: 10%; opacity: 0;">';
          img_return += '<img id="acetylCoA1" src="/img/acetylCoA.png" style="position: absolute; top: 73%; left: 22%;' 
              + 'width: 10%; height: 10%; opacity: 0;">';
          img_return += '<img id="acetylCoA2" src="/img/acetylCoA.png" style="position: absolute; top: 76%; left: 18%;' 
              + 'width: 10%; height: 10%; opacity: 0;">';
          // create div for element
          document.getElementById('vis_screen').innerHTML += 
              '<div style="position: absolute; width: 100%; height: 100%;">' + img_return + '</div>';
          // graphics
          renderCmd += '$("#redcarrier").velocity({opacity: "0"}, 1000); $("#atp").velocity({opacity: "0"}, 500).velocity({top: "80%", left: "30%"});' + 
              '$("#coA1").velocity({opacity: "1"}, 1000); $("#coA2").velocity({opacity: "1"}, 1000); $("#mitochondria").velocity({width: "100%", height: "100%", top: "0%", left: "0%"}, 1000);' +
              '$("#oxcarrier").velocity({skewX: "45deg", opacity: "1"}, 1500, function() {' + 
              '$("#oxcarrier").velocity({opacity: "0"}, 1000).velocity({top: "40%", left: "40%", skewX: "0deg"}); $("#redcarrier").velocity({opacity: "1"}, 1000);' + 
              '$("#coA1").velocity({opacity: "0"}, 1000); $("#coA2").velocity({opacity: "0"}, 1000); $("#sugar1").velocity({opacity: "0"}, 1000); $("#sugar2").velocity({opacity: "0"}, 1000);' +
              '$("#acetylCoA1").velocity({opacity: "1"}, 1000); $("#acetylCoA2").velocity({opacity: "1"}, 1000, function() { $("#co2_1").velocity({opacity: "1"}, 1000); $("#co2_2").velocity({opacity: "1"}, 1000, function() {';
          offset += 3;
        }
        rep2 += 1;
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
      var rep3 = 0;
      function citric_acid_cycle(species) {
        if (!rep3) {
          // render TCA chart
          var img_return = '<img id="tca" src="/img/tca.png" style="position: absolute; top: 40%; left: 10%;' 
          + 'width: 50%; height: 50%; opacity: 0;">';
          // create div for element
          document.getElementById('vis_screen').innerHTML += 
              '<div style="position: absolute; width: 100%; height: 100%;">' + img_return + '</div>';
          // graphics
          renderCmd += '$("#co2_2").velocity({opacity: "0"}, 500).velocity({top: "60%", left: "60%"}); $("#tca").velocity({opacity: "1"});'
              + '$("#redcarrier").velocity({opacity: "0"}, 500).velocity({top: "60%", left: "8%"}); $("#acetylCoA1").velocity({top: "50%", left: "30%"}, 1000); $("#acetylCoA1").velocity({opacity: "0"}, 3000);'
              + '$("#acetylCoA2").velocity({top: "50%", left: "30%"}, 4000); $("#acetylCoA2").velocity({opacity: "0"}, 3000);'
              + '$("#co2_2").velocity({opacity: "1"}, 1000).velocity({skewX:"45deg"}).velocity({skewX:"-45deg"}, {delay: "3000"}); $("#atp").velocity({opacity: "1"}, 2000).velocity({skewX:"45deg"}).velocity({skewX:"-45deg"}, {delay: "3000"}).velocity({skewX:"0deg"}, 500);' 
              + '$("#redcarrier").velocity({opacity: "1"}, 1000).velocity({skewX:"45deg"}).velocity({skewX:"-45deg"}, {delay: "3000"}).velocity({skewX:"0deg"}, 500); $("#atp").velocity({opacity: "0"}, 1500).velocity({top: "32%", left: "45%"}); $("#co2_2").velocity({opacity: "0"}, 1500, function() {'
              + '$("#tca").velocity({opacity: "0"}, 1500, function() {';
          offset += 2;
        }
        rep3 += 1;
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
        // render oxygen and water
        var img_return = '<img id="h2o" src="/img/h2o.png" style="position: absolute; top: 40%; left: 50%;' 
        + 'width: 10%; height: 10%; opacity: 0;">';
        img_return += '<img id="o2" src="/img/o2.png" style="position: absolute; top: 40%; left: 50%;' 
        + 'width: 10%; height: 10%; opacity: 0;">';
        // create div for element
        document.getElementById('vis_screen').innerHTML += 
            '<div style="position: absolute; width: 100%; height: 100%;">' + img_return + '</div>';
        // graphics
        renderCmd += '$("#o2").velocity({opacity: "1"}, {duration: "1500", loop: "2"}); $("#h2o").velocity({opacity: "0"}, {delay: "1500"}).velocity({opacity: "1"}, {duration: "1500", loop: "2"}).velocity({opacity: "1"});'
            + '$("#redcarrier").velocity({top: "40%", left: "40%"}, 1000).velocity({opacity: "0"}).velocity({opacity: "1"}, {duration: "750", loop: "4"}); $("#oxcarrier").velocity({opacity: "1"}, 2000).velocity({opacity: "0"}).velocity({opacity: "1"}, {duration: "750", loop: "4"}).velocity({opacity: "1"});'
            + '$("#atp").velocity({opacity: "1"}, 2000).velocity({skewX:"45deg"}, {duration: "500", loop: "6"});';
        offset += 0;

        // species change
        var keys = Object.keys(species);
        species[keys[0]] += 0; //sugar
        species[keys[1]] += -6 * glyX; //oxygen
        species[keys[2]] += -32 * glyX; //ADP
        species[keys[3]] += 32 * glyX; //ATP
        species[keys[4]] += 12 * glyX; //oxidizedCarriers
        species[keys[5]] += -12 * glyX; //reducedCarriers
        species[keys[6]] += 0; //pyruvate
        species[keys[7]] += 0; //acetylCoA
        species[keys[8]] += 6 * glyX; //water
        species[keys[9]] += 0; //carbonDioxide

        // check that all the values are not negative and then congrats
        var counter = 0;
        for (var i = 0; i < keys.length; i++) {
          if (species[keys[i]] >= 0 ) {
            counter += 1;
          }
        }
        if (counter == keys.length) {
          // congrats
          document.getElementById('vis_screen').innerHTML += 
              '<div id="congrats" style="position: absolute; align: center; width: 100%; height: 100%; color: blue; opacity: 0">' 
              + '<h3>Good Work!</h3>' + '</div>';
          renderCmd += '$("#congrats").velocity({opacity: "1"}, {duration: "1000", delay: "2000"});'
        }

        return species;
      }

      // fix the print species function
      blocks = blocks.replace(/\\n/g, "</br>");
      var stringPRINT = '';
      blocks = blocks.replace(/window.alert/g, "stringPRINT += ");

      // evalulate block of code
      try {
        eval(blocks);
      } catch(error) {
        window.alert('whoops! check your variables and general syntax because something went wrong');
        return;
      }
      renderCmd += '});'.repeat(offset);
      eval(renderCmd);

      // print species
      var modal = document.getElementById('modalBlock');
      var modalText = document.getElementById('modalText');
      modalText.innerHTML = '';
      modalText.innerHTML += '<p>' + stringPRINT + '</p>';
      modal.style.display = 'block';
  },

  /* 
  reset
  */
 'click #reset':function() {
    $(".velocity-animating").velocity("stop", true);
    document.getElementById('vis_screen').innerHTML = '';
    $("#modalBlock .close").click()
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
      level: 2,  // CHANGE THIS TO LEVEL NUMBER
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
    var handle = Meteor.subscribe("loadBlocks", userName, 2, {  // CHANGE THIS TO LEVEL NUMBER
        onError: function() {console.log(error)},
        onReady: function() {
          console.log('ready');
          const ws = UserBlocks.findOne({username: userName, level: 2}).ws;  // CHANGE THIS TO LEVEL NUMBER
          var xml = Blockly.Xml.textToDom(ws);
          Blockly.Xml.domToWorkspace(xml, workspace);
          console.log('restored');
          handle.stop();
        }
    });
  },

});