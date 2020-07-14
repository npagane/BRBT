// imports
import { Template } from 'meteor/templating';

import './level14.html';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';

// define a distance call back function to let the transport/detection functions know which molcule is closest
var molecule = [];
function distance(id) {
	molecule.push(id);
}

Template.level14.rendered = function() {
	document.getElementById('vis_screen').style.backgroundColor = "#72c6e7";
	document.getElementById('vis_screen').innerHTML += 
			+ '<img id="abneg" src="/img/abneg.png" style="position: absolute; top: 5%; left: 15%;'
			+ 'width: 15%; height: 15%;">'
			+ '<img id="abneg" src="/img/abneg.png" style="position: absolute; top: 5%; left: 15%;'
			+ 'width: 15%; height: 15%;">'
			+ '<img id="abpos" src="/img/abpos.png" style="position: absolute; top: 5%; left: 25%;' 
			+ 'width: 15%; height: 15%;">'
			+ '<img id="aneg" src="/img/aneg.png" style="position: absolute; top: 5%; left: 35%;' 
			+ 'width: 15%; height: 15%;">'
			+ '<img id="apos" src="/img/apos.png" style="position: absolute; top: 5%; left: 45%;' 
			+ 'width: 15%; height: 15%;">'
			+ '<img id="bneg" src="/img/bneg.png" style="position: absolute; top: 5%; left: 55%;' 
			+ 'width: 15%; height: 15%;">'
			+ '<img id="bpos" src="/img/bpos.png" style="position: absolute; top: 5%; left: 65%;' 
      		+ 'width: 15%; height: 15%;">'
      		+ '<img id="oneg" src="/img/oneg.png" style="position: absolute; top: 5%; left: 75%;'
      	    +  'width: 15%; height: 15%;">'
      		+ '<img id="opos" src="/img/opos.png" style="position: absolute; top: 5%; left: 85%;'
      		+ 'width: 15%; height: 15%;">'
			+ '<img id="abneg2" src="/img/abneg.png" style="position: absolute; top: 15%; left: 5%;' 
			+ 'width: 15%; height: 15%;">'
			+ '<img id="abpos2" src="/img/abpos.png" style="position: absolute; top: 25%; left: 5%;' 
			+ 'width: 15%; height: 15%;">'
			+ '<img id="aneg2" src="/img/aneg.png" style="position: absolute; top: 34%; left: 5%;' 
			+ 'width: 15%; height: 15%;">'
			+ '<img id="apos2" src="/img/apos.png" style="position: absolute; top: 45%; left: 5%;' 
			+ 'width: 15%; height: 15%;">'
			+ '<img id="bneg2" src="/img/bneg.png" style="position: absolute; top: 55%; left: 5%;' 
			+ 'width: 15%; height: 15%;">'
			+ '<img id="bpos2" src="/img/bpos.png" style="position: absolute; top: 65%; left: 5%;' 
 		    + 'width: 15%; height: 15%;">'
			+ '<img id="oneg2" src="/img/oneg.png" style="position: absolute; top: 75%; left: 5%;'			 
			+ 'width: 15%; height: 15%;">'
     	 	+ '<img id="opos2" src="/img/opos.png" style="position: absolute; top: 85%; left: 5%;'
      		+ 'width: 15%; height: 15%;">'
	// start downward movement
	$('#abneg')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay: "0"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "5%", left: "15%"}, {duration: "1000", delay: "0"});
	$('#abpos')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay: "2000"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "5%", left: "25%"}, {duration: "1000", delay: "0"});
	$('#aneg')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay: "4000"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "5%", left: "35%"}, {duration: "1000", delay: "0"});
	$('#apos')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay: "6000"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "5%", left: "45%"}, {duration: "1000", delay: "0"});
	$('#bneg')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay: "8000"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "5%", left: "55%"}, {duration: "1000", delay: "0"});
	$('#bpos')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay: "10000"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "5%", left: "65%"}, {duration: "1000", delay: "0"});
	$('#oneg')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay:"12000"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "5%", left: "75%"}, {duration: "1000", delay: "0"});
	$('#opos')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay:"14000"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "5%", left: "85%"}, {duration: "1000", delay:"0"});
	$('#abneg2')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay:"16000"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "15%", left: "5%"}, {duration: "1000", delay:"0"});
	$('#abpos2')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay:"18000"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "25%", left: "5%"}, {duration: "1000", delay:"0"});	
	$('#aneg2')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay:"20000"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "35%", left: "5%"}, {duration: "1000", delay:"0"});
	$('#apos2')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay:"22000"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "45%", left: "5%"}, {duration: "1000", delay: "0"})
	$('#bneg2')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay:"24000"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "55%", left: "5%"}, {duration: "1000", delay:"0"});
	$('#bpos2')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay:"26000"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "65%", left: "5%"}, {duration: "1000", delay:"0"});
	$('#oneg2')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay:"28000"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "75%", left: "5%"}, {duration: "1000", delay:"0"});
	$('#opos2')
		.velocity({top: "50%", left: "45%"}, {duration: "1000", delay:"30000"})
		.velocity({top: "50%", left: "45%", height:"50%", width:"50%"}, {duration: "500"})
		.velocity({top: "50%", left:"45%", height: "15%", width: "15%"}, {duration: "500"})
		.velocity({top: "85%", left: "5%"}, {duration: "1000", delay:"0"});

	Template.level14.events({

		/*
		render bockly code
		*/
	 'click #vis':function() {
	
	  var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));
	
	  	$('#abneg').velocity("stop");
		$('#abpos').velocity("stop");
		$('#aneg').velocity("stop");
		$('#apos').velocity("stop");
		$('#bneg').velocity("stop");
		$('#bpos').velocity("stop");
		$('#oneg').velocity("stop");
		$('#opos').velocity("stop");
		$('#abneg2').velocity("stop");
		$('#abpos2').velocity("stop");
		$('#aneg2').velocity("stop");
		$('#apos2').velocity("stop");
		$('#bneg2').velocity("stop");
		$('#bpos2').velocity("stop");
		$('#oneg2').velocity("stop");
		$('#opos2').velocity("stop");
	 },
	
 /*
  render blockly code
  */
 'click #vis':function() {
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
	level: 14,  // CHANGE THIS TO LEVEL NUMBER
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
	var handle = Meteor.subscribe("loadBlocks", userName, 14, {  // CHANGE THIS TO LEVEL NUMBER
			onError: function() {console.log(error)},
			onReady: function() {
				console.log('ready');
				const ws = UserBlocks.findOne({username: userName, level: 14}).ws;  // CHANGE THIS TO LEVEL NUMBER
				var xml = Blockly.Xml.textToDom(ws);
				Blockly.Xml.domToWorkspace(xml, workspace);
				console.log('restored');
				handle.stop();
			}
	});
}
	})} 
