// imports
import { Template } from 'meteor/templating';

import './level15.html';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';

Template.level15.rendered = function() {
    document.getElementById('vis_screen').style.backgroundColor = "#ffffff";
	document.getElementById('vis_screen').innerHTML += 
		    +'<img id="whitemoth" src="/img/whitemoth.gif" style="position: absolute; top: 10%; left: 15%;'
			+'width: 8%; height: 8%;">'
			+ '<img id="whitemoth1" src="/img/whitemoth.gif" style="position: absolute; top:20%; left: 25%;' 
			+ 'width: 8%; height: 8%;">'
			+ '<img id="whitemoth2" src="/img/whitemoth.gif" style="position: absolute; top: 40%; left: 65%;' 
			+ 'width: 8%; height: 8%;">'
			+ '<img id="whitemoth3" src="/img/whitemoth.gif" style="position: absolute; top: 75%; left: 45%;' 
			+ 'width: 8%; height: 8%;">'
			+ '<img id="whitemoth4" src="/img/whitemoth.gif" style="position: absolute; top:55%; left: 37%;' 
			+ 'width: 8%; height: 8%;">'
			+ '<img id="blackmoth1" src="/img/blackmoth.gif" style="position: absolute; top: 5%; left: 80%;' 
      		+ 'width: 8%; height: 8%;">'
      		+ '<img id="blackmoth2" src="/img/blackmoth.gif" style="position: absolute; top: 80%; left: 60%;'
            +  'width: 8%; height: 8%;">'
            + '<img id="blackmoth3" src="/img/blackmoth.gif" style="position: absolute; top: 5%; left: 65%;' 
      		+ 'width: 8%; height: 8%;">'
      		+ '<img id="blackmoth4" src="/img/blackmoth.gif" style="position: absolute; top: 90%; left: 5%;'
            +  'width: 8%; height: 8%;">'
            + '<img id="bird" src="/img/pixelbird.gif" style="position: absolute; top: 55%; left: 5%;'
      	    +  'width: 30%; height: 30%;">'
      		
}


Template.level15.events({
	/* 
	render the blockly code to the screen
	*/
	'click #vis':function() {
	  var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));
	// show animations
	//eval(renderCmd);
	},
  
	/* 
	reset
	*/
   'click #reset':function() {
	  $(".velocity-animating").velocity("stop", true);
	  document.getElementById('vis_screen').innerHTML = '';
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
		level: 15, // CHANGE THIS TO LEVEL NUMBER
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
	  var handle = Meteor.subscribe("loadBlocks", userName, 15, { // CHANGE TO LEVEL NUMBER
		  onError: function() {console.log(error)},
		  onReady: function() {
			console.log('ready');
			const ws = UserBlocks.findOne({username: userName, level: 0}).ws; // CHANGE TO LEVEL NUMBER
			var xml = Blockly.Xml.textToDom(ws);
			Blockly.Xml.domToWorkspace(xml, workspace);
			console.log('restored');
			handle.stop();
		  }
	  });
	},
  
  });
