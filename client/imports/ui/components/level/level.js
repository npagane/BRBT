//imports
import { Template } from 'meteor/templating';

import { UserBlocks } from './../../../api/blocks/blocks.js';
import './level.html';

// WORK ON RESIZING BLOCKLY WINDOW HERE!!!
var height = window.innerHeight * 0.8;

Template.blockly.rendered = function(){ 
  blocklyDiv.style.height = height + 'px';
  workspace = Blockly.inject(blocklyDiv,
    {
      toolbox: document.getElementById('toolbox'),
      comments: true,
      collapse: true,
      disable: true,
      grid:
    {
      spacing: 25,
      length: 3,
      colour: '#ccc',
      snap: true
    },
      maxBlocks: Infinity,
      media: '/media/',
      oneBasedIndex: true,
      readOnly: false,
      scrollbars: true,
      zoom:
      {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 4,
        minScale: .25,
        scaleSpeed: 1.1
      }
    });
};
  
Template.Level.rendered = function(){ 
  // size the stage and text area
  document.getElementById('importExport').style.height = (height*0.35) + 'px';
  document.getElementById('vis_screen').style.height = (height*0.58) + 'px';
};

Template.blockly.events({
  'click #modalClose':function() {
    var modal = document.getElementById('modalBlock');
    modal.style.display = "none";
  }
});

Template.code_buttons.events({
  'click #js':function() {
    var output = document.getElementById('importExport');
    output.value = Blockly.JavaScript.workspaceToCode(workspace);
  },
  'click #python':function() {
    var output = document.getElementById('importExport');
    output.value = Blockly.Python.workspaceToCode(workspace);
  }
});

Template.util_buttons.events({
  'click #copy':function() {
    var userName = Meteor.userId();
    console.log('copying workspace');
    const ws = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
    var potential_ob = UserBlocks.findOne({username: userName});
    if (potential_ob) {
      console.log('user has already copied, override it');
      UserBlocks._collection.update({_id: potential_ob._id}, {$set:{ws:ws}})
    } else {
      console.log('user has not copied yet, proceed');
      UserBlocks._collection.insert({username: userName, ws: ws});
    }
  },

  'click #paste':function() {
    // DONT CLEAR THE WORKSPACE
    var userName = Meteor.userId();
    console.log('pasting workspace');
    const ws = UserBlocks.findOne({username: userName}).ws; 
    var xml = Blockly.Xml.textToDom(ws);
    Blockly.Xml.domToWorkspace(xml, workspace);
    console.log('restored');
  },
})


  
