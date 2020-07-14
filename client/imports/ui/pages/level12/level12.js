//imports
import {
    Template
} from 'meteor/templating';

import './level12.html';
import {
    UserBlocks
} from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';

Template.level12.rendered = function () {
    document.getElementById('vis_screen').style.backgroundColor = "#6ac2eb";
    document.getElementById('vis_screen').innerHTML +=
        '<img id="blankface" src="/img/blankface.png" style="position: absolute; top:25%; left: 25%;' +
        'width: 50%; height: 50%;">'
}

Template.level12.events({
    /*
	render bockly code
	*/
    'click #vis':function() {

    var blocks = String(Blockly.JavaScript.workspaceToCode(workspace)); 

	var renderCmd = '';
	var closer = 0;
	//Images
	var widowspeak = "/img/widowspeakdrawing.png"
	var straighthairline = "/img/straighthairlinedrawing.png"
	var freckles = "/img/freckles.png"
	var dimples = "/img/dimples.png"
	var straighttype = "/img/straighthair.png"
	var curlytype = "/img/curlyhair.png"  

    // define dominance
    function recessive_or_dominant(molecule) {
        if (molecule == 'recessive' ) {
			setImageURL ("widowspeak.hairline", widowspeak)
          return;
        }
        if (molecule == 'dominant') {
          setImageURL ("straight.hairline", straighthairline)
          return;
        }
        
    
    // evalulate block of code
	try {
		eval(blocks);
		} catch(error) {
		window.alert('whoops! check your variables and general syntax because something went wrong');
		return;
	  }
	}
},






/*
 save blockly workspace 
 */
'click #save': function() {
	//event.preventDefault();
	var userName = Meteor.users.findOne(Meteor.userId()).username;
	console.log('saving the workspace for level');
	const ws = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
	Meteor.call('saveBlocks', {
		username: userName,
		ws: ws,
		level: 12,  // CHANGE THIS TO LEVEL NUMBER
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
	var handle = Meteor.subscribe("loadBlocks", userName, 12, {  // CHANGE THIS TO LEVEL NUMBER
			onError: function() {console.log(error)},
			onReady: function() {
				console.log('ready');
				const ws = UserBlocks.findOne({username: userName, level: 12}).ws;  // CHANGE THIS TO LEVEL NUMBER
				var xml = Blockly.Xml.textToDom(ws);
				Blockly.Xml.domToWorkspace(xml, workspace);
				console.log('restored');
				handle.stop();
			}
	});
}})
