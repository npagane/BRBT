// imports
import { Template } from 'meteor/templating';

import './level8.html';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './../../components/level/level.js';

var xDim, yDim, widthDim, heightDim;
var acc_list = [];
function addImagesRender() {
  acc_list = [];
  // make the stage for the maze
  xDim = 19;
  yDim = 13;
  widthDim = document.getElementById('vis_screen').clientWidth;
  heightDim = document.getElementById('vis_screen').clientHeight;
  var addOn = '<div class="grid-container" style="grid-template-columns:' + ' auto'.repeat(xDim) + '; padding: 0pt; background: url(img/waterBG.png); background-size: 100% 100%; background-repeat: no-repeat;">';
  var scale = 18;
  for (var i = 0; i < yDim*xDim; i++) { 
    if (scale == 228) {
      if (i == 228) {
        addOn += '<div id="' + i + '" class="grid-item" style="width: ' + widthDim/xDim + 'px; height: ' + heightDim/yDim + 'px; background-color: red; border: 1px solid black; padding: 1px"></div>';
        acc_list.push(i);
      } else {
        addOn += '<div id="' + i + '" class="grid-item" style="width: ' + widthDim/xDim + 'px; height: ' + heightDim/yDim + 'px; background-color: #ffffff00; border: 1px solid #ffffff00; padding: 1px"></div>';
      }
    } else if (i > (scale - 4) && i <= scale) {
      if (i == 18) {
        addOn += '<div id="' + i + '" class="grid-item" style="width: ' + widthDim/xDim + 'px; height: ' + heightDim/yDim + 'px; background-color: green; border: 1px solid black; padding: 1px"></div>';
      } else {
        addOn += '<div id="' + i + '" class="grid-item" style="width: ' + widthDim/xDim + 'px; height: ' + heightDim/yDim + 'px; background-color: #ffffff00; border: 1px solid black; padding: 1px"></div>';
      }
      acc_list.push(i);
    } else if (i == scale + 16) {
      addOn += '<div id="' + i + '" class="grid-item" style="width: ' + widthDim/xDim + 'px; height: ' + heightDim/yDim + 'px; background-color: #ffffff00; border: 1px solid black; padding: 1px"></div>';
      acc_list.push(i);
    } else {
      addOn += '<div id="' + i + '" class="grid-item" style="width: ' + widthDim/xDim + 'px; height: ' + heightDim/yDim + 'px; background-color: #ffffff00; border: 1px solid #ffffff00; padding: 1px"></div>';
    }
    if (i > scale + 16) {
      scale += 35;
    }
  }
  addOn += '</div>';
  document.getElementById('vis_screen').innerHTML = addOn;
  // legend for the maze
  document.getElementById('vis_screen').innerHTML += '<div style="position: absolute; top: 0%; left: 0%; color: black;">' 
      + '<p> tile width: ' + (Math.round( widthDim/xDim * 10) / 10) + ' μm<br/>tile height: ' + (Math.round( heightDim/yDim * 10) / 10) + ' μm</p> </div>';
  // add ecm
  document.getElementById('vis_screen').innerHTML += '<img src="img/matrix.png" style="position: absolute; top: 27%; left: 0%; height:' +  heightDim/2 + 'px; width: ' + widthDim*0.75 + 'px; opacity: 0.75;">';
  // add the cell
  document.getElementById('vis_screen').innerHTML += '<div id="cell" style="position: absolute; top:' + (heightDim - (heightDim/yDim)) +'px; left: 0%; height:' + heightDim/yDim + 'px; width:' + widthDim/xDim + 'px;">' 
      + '<img src="img/swimcell.png" style="position: absolute; height: 120%; width: 120%"><img id="swimmer" src="img/swimmer.png" style="position: absolute; top: 40%; height: 120%; width: 120%"></div>';
  // add congrats
  document.getElementById('vis_screen').innerHTML += '<div id="congrats" style="position: absolute; top: 0%; left: 0%; color: blue; opacity: 0">' 
			+ '<h3>Good Work!</h3>' + '</div>';
}

Template.level8.onRendered(function() {
  addImagesRender();
});

Template.level8.events({
  /* 
  render the blockly code to the screen
  */
  'click #vis':function() {

    // set cell back
    $("#cell").velocity({top: (heightDim - (heightDim/yDim)) + 'px', left: "0%"});

    var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));

    // define the current tile
    var currentPos = 228;

    // define the ECM tiles
    var ecm = [85, 104, 120, 121, 122, 123, 139, 156, 157, 158]; // removed 155 and added 85
    // define sense_surface function
    function sense_surface(direction) {
      switch(direction) {
        case 90:
          return !ecm.includes(currentPos - xDim);
        case 270:
          return !ecm.includes(currentPos + xDim);
        case 180:
          return !ecm.includes(currentPos - 1);
        case 0:
          return !ecm.includes(currentPos + 1);
      }
      // should not get here
      return false;
    }

    // define crawl function
    function crawl(direction, delta) {
      // check that not in fluid
      if (sense_surface(direction)) {
        window.alert("the cell can't crawl in a fluid!");
        $("#cell").velocity({skewX: "-20deg"}, 500).velocity({skewX: "20deg"}, 500);
        return;
      }
      var dxDim = delta/(widthDim/xDim);
      var dyDim = delta/(heightDim/yDim);
      switch(direction) {
        case 90:
          $("#cell").velocity({top: "-=" + delta + "px"}, Math.round(dyDim)*1000);
          $("#swimmer").velocity({rotateY: (Math.pow(-1, (twirlMod -1) % 2) * 360) + "deg"}, Math.round(dyDim)*1000);
          currentPos -= Math.round(dyDim)*xDim;
          break;
        case 270:
          $("#cell").velocity({top: "+=" + delta + "px"}, Math.round(dyDim)*1000);
          $("#swimmer").velocity({rotateY: (Math.pow(-1, (twirlMod -1) % 2) * 360) + "deg"}, Math.round(dyDim)*1000);
          currentPos += Math.round(dyDim)*xDim;
          break;
        case 180:
          $("#cell").velocity({left: "-=" + delta + "px"}, Math.round(dxDim)*1000);
          $("#swimmer").velocity({rotateY: (Math.pow(-1, (twirlMod -1) % 2) * 360) + "deg"}, Math.round(dxDim)*1000);
          currentPos -= Math.round(dxDim);
          break;
        case 0:
          $("#cell").velocity({left: "+=" + delta + "px"}, Math.round(dxDim)*1000);
          $("#swimmer").velocity({rotateY: (Math.pow(-1, (twirlMod -1) % 2) * 360) + "deg"}, Math.round(dxDim)*1000);
          currentPos += Math.round(dxDim);
          break;
        default:
          window.alert('try doing movements in 90 degree intervals (i.e. 0, 90, 180, and 270)');
          break;
      }
      // check that the cell is still on the path
      if (!acc_list.includes(currentPos)) {
        $("#cell").velocity({opacity: "0"}, 500);
        window.alert('oh no! you fell off the allowed path');
      }
    }

    // define swim function
    // mod operator for twirl 
    var twirlMod = 0;
    function swim(direction, delta) {
      // check that in fluid
      if (!sense_surface(direction)) {
        window.alert("the cell can't swim on a surface!");
        $("#cell").velocity({skewX: "-20deg"}, 500).velocity({skewX: "20deg"}, 500);
        return;
      }
      var dxDim = delta/(widthDim/xDim);
      var dyDim = delta/(heightDim/yDim);
      switch(direction) {
        case 90:
          $("#cell").velocity({top: "-=" + delta + "px"}, Math.round(dyDim)*500);
          $("#swimmer").velocity({rotateY: (Math.pow(-1, twirlMod % 2) * 360) + "deg"}, Math.round(dyDim)*500);
          currentPos -= Math.round(dyDim)*xDim;
          break;
        case 270:
          $("#cell").velocity({top: "+=" + delta + "px"}, Math.round(dyDim)*500);
          $("#swimmer").velocity({rotateY: (Math.pow(-1, twirlMod % 2) * 360) + "deg"}, Math.round(dyDim)*500);
          currentPos += Math.round(dyDim)*xDim;
          break;
        case 180:
          $("#cell").velocity({left: "-=" + delta + "px"}, Math.round(dxDim)*500);
          $("#swimmer").velocity({rotateY: (Math.pow(-1, twirlMod % 2) * 360) + "deg"}, Math.round(dxDim)*500);
          currentPos -= Math.round(dxDim);
          break;
        case 0:
          $("#cell").velocity({left: "+=" + delta + "px"}, Math.round(dxDim)*500);
          $("#swimmer").velocity({rotateY: (Math.pow(-1, twirlMod % 2) + 360) * "deg"}, Math.round(dxDim)*500);
          currentPos += Math.round(dxDim);
          break;
        default:
          window.alert('try doing movements in 90 degree intervals (i.e. 0, 90, 180, and 270)');
          break;
      }
      // check that the cell is still on the path
      if (!acc_list.includes(currentPos)) {
        $("#cell").velocity({opacity: "0"}, 500);
        window.alert('oh no! you fell off the allowed path');
      }
      twirlMod += 1;
    }
	
    // define congrats function
    function congrats() {
        if (currentPos == 18) {
          $("#congrats").velocity({opacity: "1"}, {duration: "1000", delay: "20000"});
        }
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
      level: 8, // CHANGE THIS TO LEVEL NUMBER
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
    var handle = Meteor.subscribe("loadBlocks", userName, 8, { // CHANGE TO LEVEL NUMBER
        onError: function() {console.log(error)},
        onReady: function() {
          console.log('ready');
          const ws = UserBlocks.findOne({username: userName, level: 8}).ws; // CHANGE TO LEVEL NUMBER
          var xml = Blockly.Xml.textToDom(ws);
          Blockly.Xml.domToWorkspace(xml, workspace);
          console.log('restored');
          handle.stop();
        }
    });
  },

});
