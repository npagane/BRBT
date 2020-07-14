// imports
import { Template } from 'meteor/templating';

import './level17.html';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';

Template.level17.rendered = function() {
  
}

Template.level17.events({
	/*
	render blockly code
	*/
 'click #vis':function() {

  var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));


	// evalulate block of code
	try {
    eval(blocks);
	} catch(error) {
	window.alert('whoops! check your variables and general syntax because something went wrong');
	return;
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
		level: 17,  // CHANGE THIS TO LEVEL NUMBER
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
	var handle = Meteor.subscribe("loadBlocks", userName, 17, {  // CHANGE THIS TO LEVEL NUMBER
			onError: function() {console.log(error)},
			onReady: function() {
				console.log('ready');
				const ws = UserBlocks.findOne({username: userName, level: 17}).ws;  // CHANGE THIS TO LEVEL NUMBER
				var xml = Blockly.Xml.textToDom(ws);
				Blockly.Xml.domToWorkspace(xml, workspace);
				console.log('restored');
				handle.stop();
			}
	});
},

});
