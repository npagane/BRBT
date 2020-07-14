// imports
import { Template } from 'meteor/templating';

import './level6.html';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';

function addImagesRender() {
  document.getElementById('vis_screen').style.backgroundColor = "#6ac2eb";
	document.getElementById('vis_screen').innerHTML += 
			'<img id="circle_enzyme" src="/img/circle_enzyme.png" style="position: absolute; top:10%; left: 0%;' 
			+ 'width: 20%; height: 20%;">'
			+ '<img id="square_enzyme" src="/img/square_enzyme.png" style="position: absolute; top: 10%; left: 20%;' 
			+ 'width: 20%; height: 20%;">'
			+ '<img id="triangle_enzyme" src="/img/triangle_enzyme.png" style="position: absolute; top: 10%; left: 40%;' 
			+ 'width: 20%; height: 20%;">'
			+ '<img id="star_enzyme" src="/img/star_enzyme.png" style="position: absolute; top: 10%; left: 60%;' 
			+ 'width: 20%; height: 20%;">'
			+ '<img id="squiggle_enzyme" src="/img/squiggle_enzyme.png" style="position: absolute; top: 10%; left: 80%;' 
			+ 'width: 20%; height: 20%;">'
			+ '<img id="circle_substrate" src="/img/circle_substrate.png" style="position: absolute; top:70%; left: 0%;' 
			+ 'width: 20%; height: 20%;">'
			+ '<img id="square_substrate" src="/img/square_substrate.png" style="position: absolute; top: 70%; left: 20%;' 
			+ 'width: 20%; height: 20%;">'
			+ '<img id="triangle_substrate" src="/img/triangle_substrate.png" style="position: absolute; top: 70%; left: 40%;' 
			+ 'width: 20%; height: 20%;">'
			+ '<img id="star_substrate" src="/img/star_substrate.png" style="position: absolute; top: 70%; left: 60%;' 
			+ 'width: 20%; height: 20%;">'
			+ '<img id="squiggle_substrate" src="/img/squiggle_substrate.png" style="position: absolute; top: 70%; left: 80%;' 
			+ 'width: 20%; height: 20%;">'
			+ '<div id="congrats" style="position: absolute; top: 0%; left: 0%; color: black; opacity: 0">' 
			+ '<h3>Good Work!</h3>' + '</div>';
	// start downward movement
	$('#circle_enzyme').velocity({top: '+=' + Math.random()*3 + '%', left: '+=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#square_enzyme').velocity({top: '-=' + Math.random()*3 + '%', left: '+=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#triangle_enzyme').velocity({top: '+=' + Math.random()*3 + '%', left: '+=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#star_enzyme').velocity({top: '-=' + Math.random()*3 + '%', left: '+=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#squiggle_enzyme').velocity({top: '+=' + Math.random()*3 + '%', left: '+=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#circle_substrate').velocity({top: '-=' + Math.random()*3 + '%', left: '-=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#square_substrate').velocity({top: '+=' + Math.random()*3 + '%', left: '+=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#triangle_substrate').velocity({top: '-=' + Math.random()*3 + '%', left: '-=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#star_substrate').velocity({top: '+=' + Math.random()*3 + '%', left: '+=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#squiggle_substrate').velocity({top: '-=' + Math.random()*3 + '%', left: '-=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
}

Template.level6.rendered = function() {
	addImagesRender();
}

Template.level6.events({
	/*
	render bockly code
	*/
 'click #vis':function() {

	var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));

	$('#circle_enzyme').velocity("stop");
	$('#square_enzyme').velocity("stop");
	$('#triangle_enzyme').velocity("stop");
	$('#star_enzyme').velocity("stop");
	$('#squiggle_enzyme').velocity("stop");
	$('#circle_substrate').velocity("stop");
	$('#square_substrate').velocity("stop");
	$('#triangle_substrate').velocity("stop");
	$('#star_substrate').velocity("stop");
	$('#squiggle_substrate').velocity("stop");

	// initial values
	var cat = 0;
	var left = {
		"circle_enzyme": 0,
		"square_enzyme": 20,
		"triangle_enzyme": 40,
		"star_enzyme": 60,
		"squiggle_enzyme": 80,
		"circle_substrate": 0,
		"square_substrate": 20,
		"triangle_substrate": 40,
		"star_substrate": 60,
		"squiggle_substrate": 80
	}
	var renderCmd = '';
	var closer = 0;

	// define shape match function
	function shape_match(substrate, enzyme) {
		renderCmd += '$("#' + substrate + '").velocity({top: "46%", left: "52%"}, 1000);'
				+ '$("#' + enzyme + '").velocity({top: "45%", left: "45%"}, 1000, function() {';
		closer += 1;
		try {
			var substrateShape = substrate.split('_substrate')[0];
			var enzymeShape = enzyme.split('_enzyme')[0];
			if (substrateShape == enzymeShape) {
				return true;
			} else {
				// diffuse back 
				renderCmd += '$("#' + substrate + '").velocity({top: "70%", left: "' + left[substrate] + '%"}, 1000);'
						+ '$("#' + enzyme + '").velocity({top: "10%", left: "' + left[enzyme] + '%"}, 1000, function() {';
			    closer += 1;
				return false;
			}
		} catch(error) {
			console.log('null in list');
			return false;
		}
	}

	function catalyze(enzyme, substrate) {
		// check for match
		try {
			var substrateShape = substrate.split('_substrate')[0];
			var enzymeShape = enzyme.split('_enzyme')[0];
			if (substrateShape == enzymeShape) {
				renderCmd += '$("#' + substrate + '").velocity({width: "30%", skewX: "20deg"}, 500);'
						+ '$("#' + enzyme + '").velocity({width: "30%", skewX: "20deg"}, 500);'
						+ '$("#' + substrate + '").velocity({width: "20%", skewX: "0deg"}, 500);'
						+ '$("#' + enzyme + '").velocity({width: "20%", skewX: "0deg"}, 500, function() {';
				closer += 1;
				// increment
				cat += 1;
			} else {
				// does not match... maybe print?
				window.alert("you can't catalyze an enzyme by a substrate that doesn't fit!");
			}
			// diffuse back
			renderCmd += '$("#' + substrate + '").velocity({top: "70%", left: "' + left[substrate] + '%"}, 1000 );'
					+ '$("#' + enzyme + '").velocity({top: "10%", left: "' + left[enzyme] + '%"}, 1000, function() {';
			closer += 1;
		} catch(error) {
			window.alert("you can't catalyze an enzyme by a substrate that doesn't fit!");
			console.log('null in list');
			return false;
		}
	}
	
	// define congrats function
	function congrats() {
		if (cat == 5) {
			// congrats
			$("#congrats").velocity({opacity: "1"}, {duration: "1000", delay: "25000"});
		}
	}

	// change the not equal sign to a comparative to a smol num
	try {
		var cmp1 = blocks.split(' != ')[0].split('(').slice(-1)[0];
		var cmp2 = blocks.split(' != ')[1].split(')')[0];
		var pivot = cmp1 + ' != ' + cmp2;
		blocks = blocks.split(pivot)[0] + 'Math.abs(' + cmp1 + '-' + cmp2 + ') > 1e-5' + blocks.split(pivot)[1];
	} catch(error) {
		// ok there was no not equal sign
	}

	// fix the print species function
	blocks = blocks.replace(/\\n/g, "</br>");
	var string = '';
	blocks = blocks.replace(/window.alert/g, "string += ");

	// congrats
	blocks += '\ncongrats();';

	// evaluate blocks
	try {
		eval(blocks);
	} catch(error) {
		window.alert('whoops! check your variables and general syntax because something went wrong')
	}
	renderCmd += '});'.repeat(closer);
    eval(renderCmd);

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
		level: 6,  // CHANGE THIS TO LEVEL NUMBER
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
	var handle = Meteor.subscribe("loadBlocks", userName, 6, {  // CHANGE THIS TO LEVEL NUMBER
			onError: function() {console.log(error)},
			onReady: function() {
				console.log('ready');
				const ws = UserBlocks.findOne({username: userName, level: 6}).ws;  // CHANGE THIS TO LEVEL NUMBER
				var xml = Blockly.Xml.textToDom(ws);
				Blockly.Xml.domToWorkspace(xml, workspace);
				console.log('restored');
				handle.stop();
			}
	});
},

});
