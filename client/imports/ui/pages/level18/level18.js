// imports
import { Template } from 'meteor/templating';

import './level18.html';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';

function addImagesRender() {
	document.getElementById('vis_screen').style.backgroundColor = "#6ac2eb";
	document.getElementById('vis_screen').innerHTML += 
			'<img id="antibody1" src="/img/antibody1.png" style="position: absolute; top:10%; left: 0%;' 
			+ 'width: 20%; height: 20%;">'
			+ '<img id="antibody2" src="/img/antibody2.png" style="position: absolute; top: 10%; left: 20%;' 
			+ 'width: 20%; height: 20%;">'
			+ '<img id="antibody3" src="/img/antibody3.png" style="position: absolute; top: 10%; left: 40%;' 
			+ 'width: 20%; height: 20%;">'
			+ '<img id="antibody4" src="/img/antibody4.png" style="position: absolute; top: 10%; left: 60%;' 
			+ 'width: 20%; height: 20%;">'
			+ '<img id="antibody5" src="/img/antibody5.png" style="position: absolute; top: 10%; left: 80%;' 
			+ 'width: 20%; height: 20%;">'
			+ '<img id="antigen1" src="/img/antigen1.png" style="position: absolute; top:70%; left: 5%;' 
			+ 'width: 10%; height: 10%;">'
			+ '<img id="antigen2" src="/img/antigen2.png" style="position: absolute; top: 70%; left: 20%;' 
			+ 'width: 10%; height: 10%;">'
			+ '<img id="antigen3" src="/img/antigen3.png" style="position: absolute; top: 70%; left: 40%;' 
			+ 'width: 10%; height: 10%;">'
			+ '<img id="antigen4" src="/img/antigen4.png" style="position: absolute; top: 70%; left: 60%;' 
			+ 'width: 10%; height: 10%;">'
			+ '<img id="antigen5" src="/img/antigen5.png" style="position: absolute; top: 70%; left: 80%;' 
			+ 'width: 10%; height: 10%;">'
			+ '<div id="congrats" style="position: absolute; top: 0%; left: 0%; color: blue; opacity: 0">' 
			+ '<h3>Good Work!</h3>' + '</div>';
	// start downward movement
	$('#antibody1').velocity({top: '+=' + Math.random()*3 + '%', left: '+=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#antibody2').velocity({top: '-=' + Math.random()*3 + '%', left: '+=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#antibody3').velocity({top: '+=' + Math.random()*3 + '%', left: '+=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#antibody4').velocity({top: '-=' + Math.random()*3 + '%', left: '+=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#antibody5').velocity({top: '+=' + Math.random()*3 + '%', left: '+=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#antigen1').velocity({top: '-=' + Math.random()*3 + '%', left: '-=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#antigen2').velocity({top: '+=' + Math.random()*3 + '%', left: '+=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#antigen3').velocity({top: '-=' + Math.random()*3 + '%', left: '-=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#antigen4').velocity({top: '+=' + Math.random()*3 + '%', left: '+=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
	$('#antigen5').velocity({top: '-=' + Math.random()*3 + '%', left: '-=' + Math.random()*3 + '%'}, {duration: "2000", loop: true});
}

Template.level18.rendered = function() {
  addImagesRender();
}

Template.level18.events({
	/*
	render blockly code
	*/
 'click #vis':function() {

  var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));

  $('#antibody1').velocity("stop");
	$('#antibody2').velocity("stop");
	$('#antibody3').velocity("stop");
	$('#antibody4').velocity("stop");
	$('#antibody5').velocity("stop");
	$('#antigen1').velocity("stop");
	$('#antigen2').velocity("stop");
	$('#antigen3').velocity("stop");
	$('#antigen4').velocity("stop");
	$('#antigen5').velocity("stop");
  
  // initial values
  var numCorrect = 0;
  var renderCmd = '';
  var closer = 0;

	// define binding site function
	function binding_site(molecule) {
		return molecule.slice(-1);
  }
  
  // define fungal response
  function fungal_response(antibody, antigen) {
    if (binding_site(antigen) == binding_site(antibody)) {
      renderCmd += '$("#' + antibody + '").velocity({top: "40%", left: "40%"}, 1000).velocity({opacity: "0"}, 500);'
				+ '$("#' + antigen + '").velocity({top: "35%", left: "35%"}, 1000).velocity({opacity: "0"}, 500, function() {';
		  closer += 1;
      numCorrect += 1; 
    }
  }

  // define cold response
  function cold_response(antibody, antigen) {
    if (binding_site(antigen) == binding_site(antibody)) {
      renderCmd += '$("#' + antibody + '").velocity({top: "40%", left: "40%"}, 1000).velocity({opacity: "0"}, 500);'
      + '$("#' + antigen + '").velocity({top: "35%", left: "35%"}, 1000).velocity({opacity: "0"}, 500, function() {';
    closer += 1;
      numCorrect += 1; numCorrect += 1; 
    }
  }

  // define autoimmune response
  function autoimmune_response(antibody, antigen) {
    if (binding_site(antigen) == binding_site(antibody)) {
      renderCmd += '$("#' + antibody + '").velocity({top: "40%", left: "40%"}, 1000).velocity({opacity: "0"}, 500);'
				+ '$("#' + antigen + '").velocity({top: "35%", left: "35%"}, 1000).velocity({opacity: "0"}, 500, function() {';
		  closer += 1;
      numCorrect += 1; 
    }
  }

  // define HIV response
  function HIV_response(antibody, antigen) {
    if (binding_site(antigen) == binding_site(antibody)) {
      renderCmd += '$("#' + antibody + '").velocity({top: "40%", left: "40%"}, 1000).velocity({opacity: "0"}, 500);'
				+ '$("#' + antigen + '").velocity({top: "35%", left: "35%"}, 1000).velocity({opacity: "0"}, 500, function() {';
		  closer += 1;
      numCorrect += 1; 
    }
  }

  // define flu response
  function flu_response(antibody, antigen) {
    if (binding_site(antigen) == binding_site(antibody)) {
      renderCmd += '$("#' + antibody + '").velocity({top: "40%", left: "40%"}, 1000).velocity({opacity: "0"}, 500);'
				+ '$("#' + antigen + '").velocity({top: "35%", left: "35%"}, 1000).velocity({opacity: "0"}, 500, function() {';
		  closer += 1;
      numCorrect += 1; 
    }
  }

  // define congrats function
	function congrats() {
		if (numCorrect == 5) {
			// congrats
			$("#congrats").velocity({opacity: "1"}, {duration: "1000", delay: "6500"});
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
		level: 18,  // CHANGE THIS TO LEVEL NUMBER
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
	var handle = Meteor.subscribe("loadBlocks", userName, 18, {  // CHANGE THIS TO LEVEL NUMBER
			onError: function() {console.log(error)},
			onReady: function() {
				console.log('ready');
				const ws = UserBlocks.findOne({username: userName, level: 18}).ws;  // CHANGE THIS TO LEVEL NUMBER
				var xml = Blockly.Xml.textToDom(ws);
				Blockly.Xml.domToWorkspace(xml, workspace);
				console.log('restored');
				handle.stop();
			}
	});
},

});
