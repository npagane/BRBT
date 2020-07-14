// imports
import { Template } from 'meteor/templating';

import './level3.html';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';

function addImagesRender() {
  // add the plant cell
  document.getElementById('vis_screen').innerHTML += '<div id="cell" style="position: absolute; top: 25%; left: 25%; height: 50%; width: 50%;">' 
      + '<img src="img/cell.png" style="position: absolute; height: 100%; width: 100%;"></div>';
  // add sun
  document.getElementById('vis_screen').innerHTML += '<div id="sun" style="position: absolute; top: 0%; left: 70%; height: 30%; width: 30%;">' 
      + '<img src="img/sun.png" style="position: absolute; height: 100%; width: 100%;"></div>';
  // add phton
  document.getElementById('vis_screen').innerHTML += '<div id="photon" style="position: absolute; top: 24%; left: 64%; height: 25%; width: 25%;">' 
      + '<img src="img/photon.png" style="position: absolute; height: 100%; width: 100%;"></div>';
}

Template.level3.onRendered(function() {
  addImagesRender();
});

Template.level3.events({
  /*
  render blockly code
  */
  'click #vis':function() {

    var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));
      
    // initial conditions
    var gluConc = 0;
    var lightThreshold = 0;

    function light_reactions(lambda) {
      if (lambda > 400) {
      }
      if (lambda >= 400 && lambda <= 700) {
        lightThreshold = 1;
      } else {
        lightThreshold = 0;
      }
    }

    // define dark reactions
    function dark_reactions() {
      if (lightThreshold) {
        // change lightThreshold since used
        lightThreshold = 0;
        gluConc += 1;
      }
    }

    // define detect concentration
    function detect_concentration(molecule, location) {
      if (molecule == 'salt') {
        window.alert("don't worry about salt in this level!");
        return;
      }
      if (molecule == 'ATP') {
        window.alert("although ATP is made during the light reactions and then used during the dark reactions, the changes in concentration are so slight that it's not worth monitoring!");
        return;
      }
      if (location == 'in') {
        return gluConc*1e-8; // idk why i chose to scale down by 1e-8 but just wanted to make it smaller lol
      } else {
        window.alert("don't worry about concentrations outside of the cell!");
        return;
      }
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

    // print species
    var modal = document.getElementById('modalBlock');
    var modalText = document.getElementById('modalText');
    modalText.innerHTML = '';
    modalText.innerHTML += '<p>' + stringPRINT + '</p>';
    modal.style.display = 'block';

    // congrats
    document.getElementById('vis_screen').innerHTML += 
      '<div id="congrats" style="position: absolute; align: center; width: 100%; height: 100%; color: blue; opacity: 0">' 
      + '<h3>Good Work!</h3>' + '</div>';
      document.getElementById('vis_screen').innerHTML += '<div id="answer" style="position: absolute; top: 75%; opacity: 0;"><p style="color: black;">photons with wavelengths between 400-700nm can excite electrons in PSII & PSI to generate energy!</p></div>';

    // congrats
    var ind= 0;
    var correctCounter = 0;
    var nmConvert = 0;
    stringPRINT = stringPRINT.split('</br>');
    for (var i = 400; i < 701; i++) {
      if (Math.abs(stringPRINT[ind] - (3e8/(i*1e-9))*6.626e-34) <= 1e-25) {
        correctCounter += 1;
      } else if (Math.abs(stringPRINT[ind] - (3e8/(i))*6.626e-34) <= 1e-25) {
        nmConvert += 1;
      }
      ind += 1;
    }
    if (correctCounter == 301) {
      $("#sun").velocity({backgroundColor: "#A233FF"}, 500).velocity({backgroundColor: "#3355FF"}, 500).velocity({backgroundColor: "#3CFF33"}, 500)
        .velocity({backgroundColor: "#F6FF33"}, 500).velocity({backgroundColor: "#FFB233"}, 500).velocity({backgroundColor: "#FF3633"}, 500);

      $("#congrats").velocity({opacity: "1"}, {duration: "1000", delay: "3500"});
      $("#answer").velocity({opacity: "1"}, {duration: "1000", delay: "3500"});
    } else if (nmConvert == 301) {
      window.alert("so close!! make sure you check your units! (hint: we want to print the energy in joules which has units of kg*(m/s)^2 ... what units are you using for wavelength?");
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
      level: 3,  // CHANGE THIS TO LEVEL NUMBER
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
    var handle = Meteor.subscribe("loadBlocks", userName, 3, {  // CHANGE THIS TO LEVEL NUMBER
        onError: function() {console.log(error)},
        onReady: function() {
          console.log('ready');
          const ws = UserBlocks.findOne({username: userName, level: 3}).ws;  // CHANGE THIS TO LEVEL NUMBER
          var xml = Blockly.Xml.textToDom(ws);
          Blockly.Xml.domToWorkspace(xml, workspace);
          console.log('restored');
          handle.stop();
        }
    });
  },

});