//imports
import { Template } from 'meteor/templating';

import './level7.html';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';

function addImagesRender() {
  document.getElementById('vis_screen').innerHTML += '<img src="img/transcription_translation.png" style="position: absolute; width:100%; height: 100%;">';
  // GAG UCA CCG UAC GCG UGG AUA AAU AAC GAA CGU
  // e   s   p    y   a   w   i   n   n   e   r
  document.getElementById('vis_screen').innerHTML += '<div style="position: absolute; top: 30%; width: 100%; word-break: break-all; overflow: auto;"><p">GAUUGACGGAUSGAGUCCGAACUGGACUCAACGGAAUUGGAACGAAUGGAGUCACCGUACGCGUGGAUAAAUAACGAACGUUAAGAUCCGAGGUACGGAGUGGCCCUUAUCUGAGGCCUA</p></div>';
}

Template.level7.rendered = function() {
  addImagesRender();
}

Template.level7.events({
  /*
  render blockly code
  */
  'click #vis':function() {
    var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));
    
     // find the codon map variable
     var codonAAVar = blocks.split(' = {')[0].split('\n').splice(-1)[0];

     // now change the keys
     var codonAAMap = blocks.split(codonAAVar + ' = {\n')[1].split('};')[0];
     var temp = '';
     var tempAA;
     var tempCodon;
     var tempIndex;
     for (var i = 0; i < 24; i++) { //24 codons
       tempAA = String(codonAAMap.split(',')[i].split(': ').slice(-1)[0]);
       tempCodon = String(codonAAMap.split('"')[i*2 + 1].split('"')[0]);
       // UC wobble
       if (tempCodon.indexOf('$') >= 0) {
         tempCodon = tempCodon.substr(0, 2) + 'U';
         temp += '  "' + tempCodon + '": ' + tempAA + ',\n';
         tempCodon = tempCodon.substr(0, 2) + 'C';
         temp += '  "' + tempCodon + '": ' + tempAA + ',\n';
       } else  if (tempCodon.indexOf('&') >= 0) {
        // AG wobble
        tempCodon = tempCodon.substr(0, 2) + 'A';
        temp += '  "' + tempCodon + '": ' + tempAA + ',\n';
        tempCodon = tempCodon.substr(0, 2) + 'G';
        temp += '  "' + tempCodon + '": ' + tempAA + ',\n';
       } else if (tempCodon.indexOf('*') >= 0) {
        // all wobble
        tempCodon = tempCodon.substr(0, 2) + 'A';
        temp += '  "' + tempCodon + '": ' + tempAA + ',\n';
        tempCodon = tempCodon.substr(0, 2) + 'U';
        temp += '  "' + tempCodon + '": ' + tempAA + ',\n';
        tempCodon = tempCodon.substr(0, 2) + 'G';
        temp += '  "' + tempCodon + '": ' + tempAA + ',\n';
        tempCodon = tempCodon.substr(0, 2) + 'C';
        temp += '  "' + tempCodon + '": ' + tempAA + ',\n';
       } else {
        // not a wobble
        temp += '  "' + tempCodon + '": ' + tempAA + ',\n';
       }
     }
     codonAAMap = temp;

    // replace old map with new extended map
    var divot = blocks.split(codonAAVar + ' = {\n')[1].split('};')[0];
    blocks = blocks.split(divot)[0] + codonAAMap + blocks.split(divot)[1];

    // fix the print species function
    blocks = blocks.replace(/\\n/g, "</br>");
    var stringPRINT = '';
    blocks = blocks.replace(/window.alert/g, "stringPRINT += ");

    // evaluate blocks
    try {
      eval(blocks);
    } catch(error) {
      window.alert('whoops! check your variables and general syntax because something went wrong')
    }

    // congrats
    document.getElementById('vis_screen').innerHTML += 
    '<div id="congrats" style="position: absolute; align: center; width: 100%; height: 100%; color: blue; opacity: 0">' 
    + '<h3>Good Work!</h3>' + '</div>';
    
    // print amino acid to screen
    document.getElementById('vis_screen').innerHTML += '<div id="AA" style="position: absolute; top: 75%; left: 20%; width: 100%; word-break: break-all; overflow: auto; opacity: 0;"><p">' + stringPRINT + '</p></div>';
    $("#AA").velocity({opacity: "1"}, 1000);

    // congrats
    if (stringPRINT == 'MESPYAWINNER') {
      $("#congrats").velocity({opacity: "1"}, {duration: "1000", delay: "2000"});
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
      level: 7,  // CHANGE THIS TO LEVEL NUMBER
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
    var handle = Meteor.subscribe("loadBlocks", userName, 7, {  // CHANGE THIS TO LEVEL NUMBER
        onError: function() {console.log(error)},
        onReady: function() {
          console.log('ready');
          const ws = UserBlocks.findOne({username: userName, level: 7}).ws;  // CHANGE THIS TO LEVEL NUMBER
          var xml = Blockly.Xml.textToDom(ws);
          Blockly.Xml.domToWorkspace(xml, workspace);
          console.log('restored');
          handle.stop();
        }
    });
  },

});