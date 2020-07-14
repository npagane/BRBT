// imports
import { Template } from 'meteor/templating';

import './level5.html';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';

// define a distance call back function to let the transport/detection functions know which molcule is closest
var molecule = [];
function distance(id) {
	molecule.push(id);
}

function addImagesRender() {
  molecule = [];
	document.getElementById('vis_screen').style.backgroundColor = "#72c6e7";
	document.getElementById('vis_screen').innerHTML += 
	    '<div style="position: relative; top: 62%; left: 0%; width: 100%; height: 38%; background: #bea42570;"></div>'
			+ '<img src="img/plasma_membrane.png" style="position: absolute; top: 60%; left: -2%; width: 103%">'
			+ '<img id="co21" src="/img/co2.png" style="position: absolute; top: 30%; left: 50%;' 
			+ 'width: 5%; height: 5%;">'
			+ '<img id="h2o1" src="/img/h2o.png" style="position: absolute; top: 20%; left: 50%;' 
			+ 'width: 5%; height: 5%;">'
			+ '<img id="glucose1" src="/img/sugar.png" style="position: absolute; top: 0%; left: 45%;' 
			+ 'width: 17%; height: 17%;">'
			+ '<img id="co22" src="/img/co2.png" style="position: absolute; top: 0%; left: 30%;' 
			+ 'width: 5%; height: 5%;">'
			+ '<img id="h2o2" src="/img/h2o.png" style="position: absolute; top: 20%; left: 30%;' 
			+ 'width: 5%; height: 5%;">'
			+ '<img id="glucose2" src="/img/sugar.png" style="position: absolute; top: 30%; left: 25%;' 
			+ 'width: 17%; height: 17%;">'
			+ '<img id="co23" src="/img/co2.png" style="position: absolute; top: 30%; left: 10%;' 
			+ 'width: 5%; height: 5%;">'
			+ '<img id="h2o3" src="/img/h2o.png" style="position: absolute; top: 20%; left: 10%;' 
			+ 'width: 5%; height: 5%;">'
			+ '<img id="glucose3" src="/img/sugar.png" style="position: absolute; top: 0%; left: 5%;' 
			+ 'width: 17%; height: 17%;">'
			+ '<img id="co24" src="/img/co2.png" style="position: absolute; top: 0%; left: 80%;' 
			+ 'width: 5%; height: 5%;">'
			+ '<img id="h2o4" src="/img/h2o.png" style="position: absolute; top: 20%; left: 80%;' 
			+ 'width: 5%; height: 5%;">'
			+ '<img id="glucose4" src="/img/sugar.png" style="position: absolute; top: 30%; left: 75%;' 
			+ 'width: 17%; height: 17%;">'
			+ '<p style="position: absolute; top: 0%;">size cutoff: 4 Å</p>'
			+ '<div id="congrats" style="position: absolute; top: 0%; left: 0%; color: blue; opacity: 0">' 
			+ '<h3>Good Work!</h3>' + '</div>';
	// start downward movement
	$('#co21').velocity({top: "55%"}, {duration: "5000", loop: true, begin: function(elements) { distance('#co21')}});
	$('#h2o1').velocity({top: "55%"}, {duration: "7000", loop: true, begin: function(elements) { distance('#h2o1')}});
	$('#glucose1').velocity({top: "43%"}, {duration: "9000", loop: true, begin: function(elements) { distance('#glucose1')}});
	$('#co22').velocity({top: "55%"}, {duration: "5000", loop: true, begin: function(elements) { distance('#co22')}});
	$('#h2o2').velocity({top: "55%"}, {duration: "7000", loop: true, begin: function(elements) { distance('#h2o2')}});
	$('#glucose2').velocity({top: "43%"}, {duration: "9000", loop: true, begin: function(elements) { distance('#glucose2')}});
	$('#co23').velocity({top: "55%"}, {duration: "5000", loop: true, begin: function(elements) { distance('#co23')}});
	$('#h2o3').velocity({top: "55%"}, {duration: "7000", loop: true, begin: function(elements) { distance('#h2o3')}});
	$('#glucose3').velocity({top: "43%"}, {duration: "9000", loop: true, begin: function(elements) { distance('#glucose3')}});
	$('#co24').velocity({top: "55%"}, {duration: "5000", loop: true, begin: function(elements) { distance('#co24')}});
	$('#h2o4').velocity({top: "55%"}, {duration: "7000", loop: true, begin: function(elements) { distance('#h2o4')}});
	$('#glucose4').velocity({top: "43%"}, {duration: "9000", loop: true, begin: function(elements) { distance('#glucose4')}});
}

Template.level5.rendered = function() {
	addImagesRender();
}

Template.level5.events({
	/*
	render bockly code
	*/
 'click #vis':function() {

	// resume normal vis code
	var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));
	// initial values of the molcules on the outside
	var nG = 4;
	var nW = 4;
	var nC = 4;
	var nGinit = nG;
	var nWinit = nW;
	var nCinit = nC;
	var ind = 0;

	// define equilibrium function
	function equilibrium() {
		if (nG == nGinit/2 && nW == nWinit/2 && nC == nCinit/2) {
			return true;
		} else {
			return false;
		}
	}

	// define detect size function
	function detect_name(location) {
		// glucose 8.6827
		// water 1.8546
		// co2 0
		// check ind
		if (molecule[ind].indexOf('glucose') > 0) {
			return 'glucose';
		}
		if (molecule[ind].indexOf('h2o') > 0) {
			return 'water';
		}
		if (molecule[ind].indexOf('co2') > 0) {
			return 'carbon dioxide';
		}
	}

	// define detect size function
	function detect_dipole_moment(location) {
		// glucose 8.6827
		// water 1.8546
		// co2 0
		// check ind
		if (molecule[ind].indexOf('glucose') > 0) {
			return 8.6827;
		}
		if (molecule[ind].indexOf('h2o') > 0) {
			return 1.8546;
		}
		if (molecule[ind].indexOf('co2') > 0) {
			return 0;
		}
	}

	// define detect solute function
	function detect_size(location) {
		// glucose 8.5 angstroms
		// water 2.75 angrstroms
		// co2 2.32
		if (molecule[ind].indexOf('glucose') > 0) {
			return 8.5;
		}
		if (molecule[ind].indexOf('h2o') > 0) {
			return 2.75;
		}
		if (molecule[ind].indexOf('co2') > 0) {
			return 2.32;
		}
	}

	// define transport function
	function transport(location, transport) {
		if (transport == "diffusion") {
			// move molecule to the left to diffuse
			// check that it's co2
			if (molecule[ind].indexOf('co2') > 0 && nC > nCinit/2) {
				$(molecule[ind]).velocity({top: "80%"}, {duration: "6000"}).velocity({left: "+=" + (4*(ind+1)) + "%"}, 1000);
				// change species count
				nC -= 1;
				// increment index to next molecule
				ind++;
			}
		} else if(transport == "osmosis") {
			// check that it's h2o
			if (molecule[ind].indexOf('h2o') > 0 && nW > nWinit/2) {
				// move molecule to more slowly diffuse across membrane
				$(molecule[ind]).velocity({top: "80%"}, {duration: "16000"}).velocity({left: "-=" + (4*(ind+1)) + "%"}, 1000);
				// change species count
				nW -= 1;
				// increment index to next molecule
				ind++;
			}
		} else {
			// check that it's glucose
			if (molecule[ind].indexOf('glucose') > 0 && nG > nGinit/2) {
				// move molecule to the right to be transported via channel
				$(molecule[ind]).velocity({left: "58%"}, (ind+1)*1000).velocity({top: "80%"}, {duration: "7000"}).velocity({left: "+=" + (5*ind) + "%"}, 1000);
				// change species count
				nG -= 1;
				// increment index to next molecule
				ind++;
			}
		}
	}

	// define congrats function
	function congrats() {
		if (equilibrium()) {
		// congrats
		$("#congrats").velocity({opacity: "1"}, {duration: "1000", delay: "15000"});
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

	// ensure there are not more than 1000 iterations 
	try {
		var condition = blocks.split('while (')[1].split(') {\n')[0];
		var pivot = 'while (' + condition + ') {\n';
		blocks = 'var while_ITER = 0;\n' + blocks.split(pivot)[0] + pivot + 'while_ITER += 1;\n if (while_ITER >= 1000) {\nwindow.alert("oh no! you had over 1000 iterations. did something go wrong? check how you transport molecules given their polarity and size!");\nbreak;}\n'
				+ blocks.split(pivot)[1];
	} catch(error) {
		// no while loop 
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
		level: 5,  // CHANGE THIS TO LEVEL NUMBER
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
	var handle = Meteor.subscribe("loadBlocks", userName, 5, {  // CHANGE THIS TO LEVEL NUMBER
			onError: function() {console.log(error)},
			onReady: function() {
				console.log('ready');
				const ws = UserBlocks.findOne({username: userName, level: 5}).ws;  // CHANGE THIS TO LEVEL NUMBER
				var xml = Blockly.Xml.textToDom(ws);
				Blockly.Xml.domToWorkspace(xml, workspace);
				console.log('restored');
				handle.stop();
			}
	});
},

});