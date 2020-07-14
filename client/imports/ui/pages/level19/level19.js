// imports
import { Template } from 'meteor/templating';

import './level19.html';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';

var xDim, yDim, widthDim, heightDim;
var affNu = [242, 224, 206, 188, 170, 152, 134, 116, 117, 118, 119];
var effNu = [142, 160, 178, 196, 214, 232, 250, 268, 267, 266, 265, 264, 263, 262, 261, 260];

function addImagesRender() {
  // add squares
	xDim = 18;
  yDim = 18;
  widthDim = document.getElementById('vis_screen').clientWidth;
  heightDim = document.getElementById('vis_screen').clientHeight;
	var addOn = '<div class="grid-container" style="grid-template-columns:' + ' auto'.repeat(xDim) + ';padding: 0pt;">';
  for (var i = 0; i < yDim*xDim; i++) { 
    if (affNu.indexOf(i) >= 0) {
			addOn += '<div id="a' + (affNu.indexOf(i) + 1) + '" class="grid-item" style="width: ' + widthDim/xDim + 'px; height: ' + heightDim/yDim + 'px; background-color: #f19999b2; border: 1px solid black; padding: 1px">' + (affNu.indexOf(i) + 1) + '</div>';
		} else if (effNu.indexOf(i) >= 0) {
			addOn += '<div id="e' + (effNu.indexOf(i) + 1) + '" class="grid-item" style="width: ' + widthDim/xDim + 'px; height: ' + heightDim/yDim + 'px; background-color: #99bff1b2; border: 1px solid black; padding: 1px">' + (effNu.indexOf(i) + 1) + '</div>';
		} else {
			addOn += '<div id="' + i + '" class="grid-item" style="width: ' + widthDim/xDim + 'px; height: ' + heightDim/yDim + 'px; background-color: #ffffff00; border: 1px solid #ffffff00; padding: 1px"></div>';
		}
  }
  addOn += '</div>';
	document.getElementById('vis_screen').innerHTML += addOn;
	// add brain, hand, and fire
	document.getElementById('vis_screen').innerHTML += '<img id="fire" src="img/fire.png" style="position: absolute; left: 10%; top: 40%; width: 20%; height: 20%">'
			+ '<img id="brain" src="img/brain.png" style="position: absolute; top: 10%; left:60%; width: 35%; height: 35%;">'
			+ '<img id="arm" src="img/arm.png" style="position: absolute; top: 60%; left:20%; width: 25%; height: 25%;">'
			+ '<div id="congrats" style="position: absolute; top: 0%; left: 0%; color: blue; opacity: 0">' 
			+ '<h3>Good Work!</h3>' + '</div>';
	$("#fire").velocity({skewY: "+=5deg"}, {duration: "500", loop: true});
}

Template.level19.rendered = function() {
	addImagesRender();
}

Template.level19.events({
	/*
	render bockly code
	*/
 'click #vis':function() {

	var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));

	// render command
	var renderCmd = '';
	var closer = 0;
	
	// define sense signal
	function sense_signal(neuron) {
		renderCmd += '$("#a1").velocity({backgroundColor: "#ff0000"}, 350, function() {';
		closer += 1;
		return 1;
	}

	// define transmit signal
	var processed = false;
	var transmitted = 1;
	function transmit_signal(neuron) {
		if (processed && neuron) {
			renderCmd += '$("#e' + transmitted + '").velocity({backgroundColor: "#0000ff"}, 350, function() {';
			transmitted += 1;
			closer += 1;
		} else if (neuron) {
			renderCmd += '$("#a' + transmitted + '").velocity({backgroundColor: "#ff0000"}, 350, function() {';
			transmitted += 1;
			closer += 1;
		} else {
			window.alert("the signal was not transmitted successfully");
			return;
		}
		return neuron;
	}

	// define proces signal
	function process_signal(neuron) {
		if (neuron && transmitted == 12 ) {
			processed = true;
			transmitted = 1;
			renderCmd += '$("#brain").velocity({skewY: "+=10deg"}, 750, function() {';
			closer += 1;
		} else {
			window.alert("the message didn't reach the brain correctly!");
			return;
		}
		return neuron;
	}

	// define respond signal
	var responseReceived = false;
	function response_signal(neuron) {
		if (neuron && transmitted == 17) {
			renderCmd += '$("#arm").velocity({skewY: "-=50deg"}, 750, function() {';
			responseReceived = true;
			closer += 1;
		}
	}

	// define congrats function
	function congrats() {
		if (responseReceived) {
			// congrats
			renderCmd += '$("#congrats").velocity({opacity: "1"}, {duration: "1000"})';
    }
  }
  
  // congrats
	blocks += '\ncongrats();';

	// evalulate block of code
	try {
    eval(blocks);
	} catch(error) {
		window.alert('whoops! check your variables and general syntax because something went wrong');
		return;
	}
	
	// animations
	renderCmd += '});'.repeat(closer);
  eval(renderCmd);

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
		level: 19,  // CHANGE THIS TO LEVEL NUMBER
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
	var handle = Meteor.subscribe("loadBlocks", userName, 19, {  // CHANGE THIS TO LEVEL NUMBER
			onError: function() {console.log(error)},
			onReady: function() {
				console.log('ready');
				const ws = UserBlocks.findOne({username: userName, level: 19}).ws;  // CHANGE THIS TO LEVEL NUMBER
				var xml = Blockly.Xml.textToDom(ws);
				Blockly.Xml.domToWorkspace(xml, workspace);
				console.log('restored');
				handle.stop();
			}
	});
},

});
