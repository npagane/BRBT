// imports
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './../../components/level/level.js';
import { UserBlocks } from './../../../api/blocks/blocks.js';
import './level0.html'

Template.level0.events({
  /* 
  render the blockly code to the screen
  */
  'click #vis':function() {
    var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));
    // define organelle options
    var ORGANELLES = {
      //     block code     image path        top  left  width  height  opacity
      cap1: ["capsule.oval", "/img/oval.png", 0, [25, 0], [50, 100], 75, 1],
      wal1: ["cell_wall.oval", "/img/oval.png", 3, [27, 4], [45, 90], 70, 1],
      mem1: ["plasma_membrane.circle", "/img/oval.png", 4, [28, 6], [43, 86], 68, 1],
      rib1: ["ribosomes.sparse", "/img/ribosome1.png", 1, [27, 5], [44, 88], 75, 0.5],
      rib2: ["ribosomes.dense", "/img/ribosome2.png", 4, [27, 5], [42, 82], 65, 0.5],
      nuc1: ["nucleoid.purple", "/img/nucleoid.png", 20, [33, 33], [30, 30], 30, 1],
      pla1: ["plasmid.circle", "/img/plasmid.png", [50, 10], [35, 45, 55], [10, 10], 10, 1],
      fla1: ["flagella.black", "/img/flagella.png", 74, [43, 38, 48], [20, 20], 20, 1],
  }
    // search for image in translation
    var imgs = [];
    var keys = Object.keys(ORGANELLES);
    for (var i = 0; i < keys.length; i++) {
      // search for substrings in translated blocks
      var block_bits = blocks.split(ORGANELLES[keys[i]][0]);
      for (var j = 1; j < block_bits.length; j++) {
        imgs.push(keys[i]);
      }
    }
    // check for no orgnalle blocks found
    if (imgs.length == 0) {
      document.getElementById('vis_screen').innerHTML =
          '<div style="position: relative; width: 100%; height: 100%;">' + '\n' + '<img src="">';
      return;
    }
    // organelle blocks found
    var img_return = '';
    var top, left;
    var num_pla = 0;
    var num_fla = 0;
    var ex = '';
    for (var i = 0; i < imgs.length; i++) {
      // determine placement for additional plasmids
      if (imgs[i].indexOf('pla') >= 0) {
        top = ORGANELLES[imgs[i]][2][num_pla % 2];
        left = ORGANELLES[imgs[i]][3][num_pla % 3];
        num_pla += 1;
        ex = num_pla + '';
      // determine placement for additional flagella
      } else if(imgs[i].indexOf('fla') >= 0) {
        top = ORGANELLES[imgs[i]][2];
        left = ORGANELLES[imgs[i]][3][num_fla % 3]
        num_fla += 1;
        ex = num_fla + '';
      } else {
        top = ORGANELLES[imgs[i]][2];
        left = ORGANELLES[imgs[i]][3][0];
      }
      img_return += '<img id="' + imgs[i] + ex + '"src="' + ORGANELLES[imgs[i]][1] 
          + '" alt="" style="position: absolute; top:' + top + '%' + '; left:' 
          + left + '%' + '; width:' + ORGANELLES[imgs[i]][4][0] + '%' + '; height:' 
          + ORGANELLES[imgs[i]][5] + '%' + '; opacity:' + ORGANELLES[imgs[i]][6] 
          + '; filter: alpha(opacity=' + ORGANELLES[imgs[i]][6]*100 + ';">';
    }
    // create div for element
    document.getElementById('vis_screen').innerHTML = 
        '<div style="position: absolute; width: 100%; height: 100%; float: left;">' + img_return + '</div>';
    var OGimg = img_return;

    // check for loop to double elements of cell
    block_bits = blocks.split('for (var ');
    if (block_bits.length > 1 && blocks.split('double(').length > 1) {
      var iter = block_bits[1].split('_index')[0];
      var cell_list = [];
      num_pla = 0;
      num_fla = 0;
      var offset = 0;
      var ex = '';
      block_bits = blocks.split('for (var ' + iter + '_index in ');
      var cell = block_bits[1].split(')')[0];
      // check for correct iterator
      try {
        block_bits = blocks.split(cell + '[' + iter + '_index];\n  ');
        var elem_it = block_bits[1].split('double(')[1].split(')')[0];
      } catch(error) {
        window.alert("make sure you're doubling in the for loop!")
        return;
      }
      if (iter != elem_it) {
        return;
      }
      // check for cell division
      var block_bitsDiv = blocks.split('divide(');
      try {
        var variable = block_bitsDiv[1].split(')')[0];
      } catch(error) {
        var variable = '';
      }
      var divide = false;
      if (block_bitsDiv.length > 1) {
        divide = true;
        if (cell != variable) {
          window.alert('what cell are we dividing? (i know! variables can be annoying ugh)');
          return;
        }
        // check if in while loop
        if (blocks.indexOf('divide(') < blocks.indexOf('}')) {
          window.alert("you don't need to iterate for division and it must be after doubling!");
          return;
        }
      }
      // look for the elements in the cell list
      block_bits = blocks.split(' = [');
      var cellL = block_bits[0].split('\n').slice(-1)[0];
      if (cell == cellL) {
        cell_list = block_bits[1].split(']')[0].split(', ');
      } else {
        window.alert('wait which cell are we iterating through? check your variables :)');
        return;
      }
      // check if cell list contains a cell wall and nucleoid
      if ( cell_list.join().indexOf('nucleoid') < 0 || cell_list.join().indexOf('membrane') < 0 || cell_list.join().indexOf('wall') < 0) {
        window.alert('you need at least a nucleoid, membrane, and cell wall to undergo division!');
        return;
      }
      var renderCmd = '';
      var cellList = cell_list.length;
      for (var i = 0; i < cell_list.length; i++) {
        for (var key = 0; key < keys.length; key++) {
          if (ORGANELLES[keys[key]][0] == cell_list[i]) {
            break; // found the cell component 
          }
        }
        if (keys[key] != null) {
          // render image to be twice the width
          if (keys[key].indexOf('pla') >= 0) {
            top = ORGANELLES[keys[key]][2][num_pla % 2];
            left = ORGANELLES[keys[key]][3][num_pla % 3];
            num_pla += 1;
            ex = num_pla + '';
          // determine placement for additional flagella
          } else if(keys[key].indexOf('fla') >= 0) {
            top = ORGANELLES[keys[key]][2];
            left = ORGANELLES[keys[key]][3][num_fla % 3]
            num_fla += 1;
            ex = num_fla + '';
          } else {
            top = ORGANELLES[keys[key]][2];
            left = ORGANELLES[keys[key]][3][1];
          }
          // check for plasmids/flagella/nucleoid to double quantitiy
          var tempDiv = keys[key] + ex + 'hide';
          var extra = ',function() {';
          if (keys[key].indexOf('pla') >= 0 || keys[key].indexOf('fla') >= 0 || keys[key].indexOf('nuc') >= 0) {
            var scale = 3;
            offset += 1;
          } else {
            var scale = 0;
            renderCmd += '$("#' + keys[key] + '").velocity({opacity: 0}, 500' + extra;
          }
          img_return += '<img id="' + tempDiv + '"src="' + ORGANELLES[keys[key]][1] + '" alt="" style="position: absolute; top:' 
              + top + '%' + '; left:' + (left + scale) + '%' + '; width:' + ORGANELLES[keys[key]][4][1] + '%'
              + '; height:' + ORGANELLES[keys[key]][5] + '%' + '; opacity:' + 0 
              + '; filter: alpha(opacity=' + 0 + ';">' + '\n';
          // create div for element
          document.getElementById('vis_screen').innerHTML = 
              '<div id="OGimg" style="position: absolute; width: 100%; height: 100%; float: left;">' + img_return + '</div>';
          // check if last iteration
          if (i == cell_list.length - 1 && !divide) {
            extra = ');' + '});'.repeat(2*(cellList) - offset - 1);
          } 
          // set transition for showing new component
          renderCmd += '$("#' + tempDiv + '").velocity({opacity: 1}, 500' + extra;
        } else {
          cellList -= 1;
          if (i == cell_list.length - 1 && !divide) {
            extra = '});' + '});'.repeat(2*(cellList) - offset - 1);
            renderCmd += extra;
          } 
        }
      }

      // divide cell
      if (divide) {
        document.getElementById('vis_screen').innerHTML += 
            '<div id="finalCell1" style="position: relative; width: 50%; height: 100%; float: left; color: white; opacity: 0">' + OGimg + '</div>' + 
            '<div id="finalCell2" style="position: relative; width: 50%; height: 100%; float: right; color: white; opacity: 0">' + OGimg + '</div>';
        renderCmd += '$("#OGimg").velocity({opacity: 0}, 1000);' + 
          '$("#finalCell1").velocity({opacity: 1}, 2000);' + 
          '$("#finalCell2").velocity({opacity: 1}, 2000, function() {';

        // congrats
        document.getElementById('vis_screen').innerHTML += 
          '<div id="congrats" style="position: absolute; align: center; width: 100%; height: 100%; color: blue; opacity: 0">' 
          + '<h3>Good Work!</h3>' + '</div>';
        renderCmd += '$("#congrats").velocity({opacity: "1"}, 1000);'
        offset -= 1;
        extra = '});'.repeat(2*(cellList) - offset);
        renderCmd += extra;

      } 
      
      // show animations
      eval(renderCmd);
    }
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
      level: 0, // CHANGE THIS TO LEVEL NUMBER
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
    var handle = Meteor.subscribe("loadBlocks", userName, 0, { // CHANGE TO LEVEL NUMBER
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