// imports
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './level1.html'
import './../../components/level/level.js';
import { UserBlocks } from './../../../api/blocks/blocks.js';

Template.level1.events({
  /* 
  render the blockly code to the screen
  */
  'click #vis':function() {
    var blocks = String(Blockly.JavaScript.workspaceToCode(workspace));
    // define organelle options
    var ORGANELLES = {
      //     block code     image path        top  left  width  height  opacity
      mem1: ["membrane.circle", "/img/membrane1.png", 0, [10, 0], [80, 100], 80, 1],
      mem2: ["membrane.oval", "/img/membrane2.png", 0, [10, 0], [80, 100], 80, 1],
      cyt1: ["cytoskeleton.black", "/img/cytoskeleton.png", 8, [22, 10], [55, 75], 65, 0.5],
      rib1: ["ribosomes.sparse", "/img/ribosome1.png", 3, [13, 5], [70, 88], 70, 0.5],
      rib2: ["ribosomes.dense", "/img/ribosome2.png", 4, [13, 5], [70, 82], 70, 0.5],
      mit1: ["mitochondria.orange", "/img/mitochondria1.png", [52, 18], [27, 40, 55], [8, 8], 8, 1],
      mit2: ["mitochondria.red", "/img/mitochondria2.png", [52, 18], [27, 40, 55], [8, 8], 8, 1],
      nuc1: ["nucleus.yellow", "/img/nucleus1.png", 25, [45, 33], [20, 20], 20, 1],
      nuc2: ["nucleus.roughER", "/img/nucleus2.png", 25, [45, 33], [20, 20], 20, 1],
      ser1: ["smoothER.yellow", "/img/ER1.png", 25, [25, 25], [25, 25], 25, 1],
      lys1: ["lysosome.pink", "/img/lysosome1.png", [46, 62], [56, 37, 37], [5, 5], 5, 1],
      ga1: ["golgi.yellow", "/img/GA1.png", 30, [59, 59], [20, 20], 20, 1],
      ga2: ["golgi.red", "/img/GA2.png", 30, [59, 59], [20, 20], 20, 1],
      fla1: ["flagella.black", "/img/flagella.png", 74, [43, 38, 48], [20, 20], 20, 1],
      chr1: ["chromosome", "/img/chromosome1.png", 28, [52, 52], [4, 4], 5, 1],
      chr1hide: ["", "/img/chromosome2.png", 28, [52, 52], [6, 6], 6, 0],
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
    var num_mit = 0;
    var num_fla = 0;
    var num_lys = 0;
    var ex = '';
    for (var i = 0; i < imgs.length; i++) {
      // determine placement for additional mitochondria
      if (imgs[i].indexOf('mit') >= 0) {
        top = ORGANELLES[imgs[i]][2][num_mit % 2];
        left = ORGANELLES[imgs[i]][3][num_mit % 3];
        num_mit += 1;
        ex = num_mit + '';
      // determine placement for additional flagella
      } else if(imgs[i].indexOf('fla') >= 0) {
        top = ORGANELLES[imgs[i]][2];
        left = ORGANELLES[imgs[i]][3][num_fla % 3]
        num_fla += 1;
        ex = num_fla + '';
      // determine placement for additional lysosomes
      } else if(imgs[i].indexOf('lys') >= 0) {
        top = ORGANELLES[imgs[i]][2][num_lys % 2];
        left = ORGANELLES[imgs[i]][3][num_lys % 3];
        num_lys += 1;
        ex = num_lys + '';
      } else {
        top = ORGANELLES[imgs[i]][2];
        left = ORGANELLES[imgs[i]][3][0];
        ex = '';
      }
      img_return += '<img id="' + imgs[i] + ex + '"src="' + ORGANELLES[imgs[i]][1] 
          + '" alt="" style="position: absolute; top:' + top + '%' + '; left:' 
          + left + '%' + '; width:' + ORGANELLES[imgs[i]][4][0] + '%' + '; height:' 
          + ORGANELLES[imgs[i]][5] + '%' + '; opacity:' + ORGANELLES[imgs[i]][6] 
          + '; filter: alpha(opacity=' + ORGANELLES[imgs[i]][6]*100 + ';">';
    }
    // create div for element
    document.getElementById('vis_screen').innerHTML = 
        '<div style="position: absolute; width: 100%; height: 100%;">' + img_return + '</div>';
    var OGimg = img_return;

    // check for loop to double elements of cell
    block_bits = blocks.split('while (');
    var renderCmd = ''; // for animation rendering 
    if (block_bits.length > 1) {
      var conditional = block_bits[1].split(') {')[0];
      if (conditional == 'false') {
        window.alert("for how long? check your while block! Just place the 'item < 8' block there for now and it'll let you proceed without worrying about loops for now :)");
        return;
      }
      var cell_list = [];
      num_mit = 0;
      num_fla = 0;
      num_lys = 0;
      var offset = 0;
      var ex = '';
      // duplicate chromosomes in interphase
      block_bits = blocks.split('interphase(');
      if (block_bits.length > 1) {
        // check if in while loop
        if (blocks.indexOf('interphase(') > blocks.indexOf('}') || blocks.indexOf('while ') > blocks.indexOf('interphase(')) {
          window.alert('put your growth/division blocks in the while loop to do them for a set amount of iterations!');
          return;
        }
        // check for mitosis
        block_bits = blocks.split('mitosis(');
        if (block_bits.length > 1) {
          var mitosis = true;
          // check for correct precedence 
          if (blocks.indexOf('interphase(') > blocks.indexOf('mitosis(')) {
            window.alert('how can you divide a cell without growing it?');
            return;
          }
          // check if in while loop
          if (blocks.indexOf('mitosis(') > blocks.indexOf('}') || blocks.indexOf('while ') > blocks.indexOf('mitosis(')) {
            window.alert('put your gorwth/division blocks in the while loop to do them for a set amount of iterations!');
            return;
          }
        } else {
          var mitosis = false;
        }
        // render the images for interphase
        i = keys.length - 2; 
        img_return += '<img id="' + keys[i] + ex + '"src="' + ORGANELLES[keys[i]][1] 
          + '" alt="" style="position: absolute; top:' + ORGANELLES[keys[i]][2] + '%' + '; left:' 
          + ORGANELLES[keys[i]][3][0] + '%' + '; width:' + ORGANELLES[keys[i]][4][0] + '%' + '; height:' 
          + ORGANELLES[keys[i]][5] + '%' + '; opacity:' + ORGANELLES[keys[i]][6] 
          + '; filter: alpha(opacity=' + ORGANELLES[keys[i]][6]*100 + ';">';
        // create div for element
        document.getElementById('vis_screen').innerHTML = 
            '<div style="position: absolute; width: 100%; height: 100%;">' + img_return + '</div>';
      }
      block_bits = blocks.split('interphase(')[1];
      var cell = block_bits.split(')')[0];
      // look for the elements in the cell list
      block_bits = blocks.split(' = [');
      var cellL = block_bits[0].split('\n').slice(-1)[0];
      if (cell == cellL) {
        cell_list = block_bits[1].split(']')[0].split(', ');
      } else {
        window.alert('wait which cell?');
        return;
      }
      // append chromosome in nucleus to organelle list 
      cell_list.push('chromosome')
      var cellList = cell_list.length;
      var nuc = -1;
      var mem = -1;
      var rib = -1;
      var cyt = -1;
      // loop through elements in the cell list and duplicate if an organelle
      for (var i = 0; i < cell_list.length; i++) {
        for (var key = 0; key < keys.length; key++) {
          if (ORGANELLES[keys[key]][0] == cell_list[i]) {
            if (cell_list[i].indexOf('nuc') >= 0) {
              nuc = key; // found nucleus
            }
            if (cell_list[i].indexOf('mem') >= 0) {
              mem = key; // found membrane
            }
            if (cell_list[i].indexOf('rib') >= 0) {
              rib = key; // found membrane
            }
            if (cell_list[i].indexOf('cyt') >= 0) {
              cyt = key; // found membrane
            }
            break; // found the cell component 
          }
        }
        if (keys[key] != null) {
          // render image to be twice the width
          if (keys[key].indexOf('mit') >= 0) {
            top = ORGANELLES[keys[key]][2][num_mit % 2];
            left = ORGANELLES[keys[key]][3][num_mit % 3];
            num_mit += 1;
            ex = num_mit + '';
          // determine placement for additional flagella
          } else if(keys[key].indexOf('fla') >= 0) {
            top = ORGANELLES[keys[key]][2];
            left = ORGANELLES[keys[key]][3][num_fla % 3]
            num_fla += 1;
            ex = num_fla + '';
          // determine placement for additional lysosomes
          } else if(keys[key].indexOf('lys') >= 0) {
            top = ORGANELLES[keys[key]][2][num_lys % 2];
            left = ORGANELLES[keys[key]][3][num_lys % 3];
            num_lys += 1;
            ex = num_lys + '';
          } else {
            top = ORGANELLES[keys[key]][2];
            left = ORGANELLES[keys[key]][3][1];
            ex = '';
          }
          // check for plasmids/flagella/nucleoid to double quantitiy
          var tempDiv = keys[key] + ex + 'hide';
          var extra = ',function() {';
          if (keys[key].indexOf('mit') >= 0 || keys[key].indexOf('fla') >= 0 || keys[key].indexOf('lys') >= 0
              || keys[key].indexOf('ser') >= 0 || keys[key].indexOf('ga') >= 0) {
            var scale = 3;
            offset += 1;
            cont = true;
          } else if (keys[key].indexOf('chr') >= 0 ){
            var scale = 0;
            renderCmd += '$("#OGimg1").velocity({opacity: 1}, 750' + extra; // this is just to pause
            renderCmd += '$("#' + keys[key] + '").velocity({opacity: 0}, 750' + extra;
            offset -= 1;
            cont = true;
            key++;
          } else {
            cellList -= 1;
            var cont = false;
          }
          if (cont) {
            img_return += '<img id="' + tempDiv + '"src="' + ORGANELLES[keys[key]][1] + '" alt="" style="position: absolute; top:' 
              + top + '%' + '; left:' + (left + scale) + '%' + '; width:' + ORGANELLES[keys[key]][4][1] + '%'
              + '; height:' + ORGANELLES[keys[key]][5] + '%' + '; opacity:' + 0 
              + '; filter: alpha(opacity=' + 0 + ';">' + '\n';
            // create div for element
            document.getElementById('vis_screen').innerHTML = 
                '<div id="OGimg1" style="position: absolute; width: 100%; height: 100%;">' + img_return + '</div>';
            // check if last iteration
            if (i == cell_list.length - 1 && !mitosis) {
              extra = ');' + '});'.repeat(2*(cellList) - offset - 1);
            } 
            // set tranistion for showing new component
            renderCmd += '$("#' + tempDiv + '").velocity({opacity: 1}, 750' + extra;
          // organelle is not duplicated so check if at end of list
          } else if (i == cell_list.length - 1 && !mitosis){
            extra = '});' + '});'.repeat(2*(cellList) - offset - 1);
            renderCmd += extra;
          }
        // null element so check if at end of list
        } else {
          cellList -= 1;
          if (i == cell_list.length - 1 && !mitosis) {
            extra = '});' + '});'.repeat(2*(cellList) - offset - 1);
            renderCmd += extra;
          } 
        }
      }

      cytokinesis = false;
      // mitosis
      if (mitosis) {
        // check variable
        block_bits = blocks.split('mitosis(');
        cellL = block_bits[1].split(')')[0];
        if (cellL != cell) {
          window.alert('those pesky variables again it seems');
          return;
        }
        // check for cytokinesis
        ex = '';
        block_bits = blocks.split('cytokinesis(');
        if (block_bits.length > 1) {
          var cytokinesis = true;
          if (blocks.indexOf('cytokinesis(') < blocks.indexOf('mitosis(')) {
            window.alert('check the order of your cell cycle!');
            return;
          }
          // check if in while loop
          if (blocks.indexOf('cytokinesis(') > blocks.indexOf('}') || blocks.indexOf('while ') > blocks.indexOf('cytokinesis(')) {
            window.alert('put your growth/division blocks in the while loop to do them for a set amount of iterations!');
            return;
          }
        } 
        extra = ',function() {';
        // remove nucleus for mitosis
        if (nuc != -1 && mem != -1) {
          renderCmd += '$("#' + keys[nuc] + ex + '").velocity({opacity: 0}, 750' + extra;
          offset -= 1;
        } else {
          window.alert('you need at least a nucleus and membrane to undergo mitosis!');
          return;
        }
        // migrate chromosomes to center of cell for METAPHASE
        left = 45;
        top = 35;
        renderCmd += '$("#' + 'chr1hide' + ex + '").velocity({left:"' + left +  '%", top:"' + top + '%"}, 750);' 
            + '$("#' + 'chr1' + ex + '").velocity({left:"' + left +  '%", top:"' + top + '%"}, 750' + extra;
        offset -= 1;
        // separate homologous chromosomes into 2 sister chromatids ANAPHASE
        key = keys.length - 2;
        img_return += '<img id="' + 'chr12' + '"src="' + ORGANELLES[keys[key]][1] + '" alt="" style="position: absolute; top:' 
              + top + '%' + '; left:' + (left + 3) + '%' + '; width:' + ORGANELLES[keys[key]][4][1] + '%'
              + '; height:' + ORGANELLES[keys[key]][5] + '%' + '; opacity:' + 0 
              + '; filter: alpha(opacity=' + 0 + ';">' + '\n';
        // create div for element
        document.getElementById('vis_screen').innerHTML = 
            '<div id="OGimg1" style="position: absolute; width: 100%; height: 100%;">' + img_return + '</div>';
        renderCmd += '$("#' + 'chr1hide' + ex + '").velocity({opacity: 0}, 750);'
            +'$("#' + 'chr1' + ex + '").velocity({opacity: 1}, 750);'
            + '$("#' + 'chr12' + '").velocity({opacity: 1}, 750' + extra;
        offset -= 1;
        // chromatid separation TELOPHASE
        left = 45;
        top = 35;
        var diff = 20;
        renderCmd += '$("#' + 'chr1' + ex + '").velocity({left:"' + (left-diff) +  '%", top:"' + top + '%"}, 750);' 
            + '$("#' + 'chr12' + '").velocity({left:"' + (left + 3 + diff) +  '%", top:"' + top + '%"}, 750' + extra;
        img_return += '<img id="' + keys[nuc] + '2' + '"src="' + ORGANELLES[keys[nuc]][1] + '" alt="" style="position: absolute; top:' 
            + (top - 4) + '%' + '; left:' + (left + diff - 5) + '%' + '; width:' + ORGANELLES[keys[nuc]][4][1] + '%'
            + '; height:' + ORGANELLES[keys[nuc]][5] + '%' + '; opacity:' + 0 
            + '; filter: alpha(opacity=' + 0 + ';">' + '\n';
        // create div for element
        document.getElementById('vis_screen').innerHTML = 
            '<div id="OGimg1" style="position: absolute; width: 100%; height: 100%;">' + img_return + '</div>';
        renderCmd += '$("#' + keys[nuc] + ex + '").velocity({left:"' + (left-diff-5) +  '%", top:"' + (top - 4) + '%"}, 0);'
            + '$("#' + keys[nuc] + ex + '").velocity({opacity: 1}, 750);'
            + '$("#' + keys[nuc] + '2' + '").velocity({opacity: 1}, 750);'
            + '$("#' + 'chr1' + ex + '").velocity({opacity: 0}, 750);'
            + '$("#' + 'chr12' + '").velocity({opacity: 0}, 750);' 
            + '$("#' + keys[mem] + ex + '").velocity({width: "100%", top: "0%", left:"0%"}, 750';
            if (rib != -1) {
              renderCmd += '); $("#' + keys[rib] + ex + '").velocity({width: "78%", top: "5%", left:"5%"}, 750';
              if (cyt != -1) {
                renderCmd += '); $("#' + keys[cyt] + ex + '").velocity({width: "78%", top: "10%", left:"10%"}, 750' + extra;
              } else {
                renderCmd += extra;
              }
            } else {
              renderCmd += extra;
            }
        offset -= 2;
        // close all open functions to render animation
        if (!cytokinesis) {
          extra = '});'.repeat(2*(cellList) - offset);
          renderCmd += extra;
        }
      }

      // cytokinesis
      if (cytokinesis) {
        // check variable
        block_bits = blocks.split('cytokinesis(');
        cellL = block_bits[1].split(')')[0];
        if (cellL != cell) {
          window.alert('you are sooo close! check variables (also i feel you, variables are the worst)')
          return;
        }
        // check for iteration
        block_bits = blocks.split(' * 2;');
        if (block_bits.length > 1) {
          // check if in while loop
          if (blocks.indexOf('* 2;') > blocks.indexOf('}') || blocks.indexOf('while ') > blocks.indexOf('* 2;')) {
            window.alert('put your cell counting block in the while loop to do them for a set amount of iterations!');
            return;
          }
        }
        var counter = block_bits[0].split(' = ').slice(-1)[0];
        block_bits = blocks.split(' = 1;');
        if (block_bits.length > 1) {
          // check if in while loop
          if (blocks.indexOf(' = 1;') > blocks.indexOf('while ')) {
            window.alert("make sure you aren't rewriting your original variable declaration for the amount of cells!");
            return;
          }
        }
        var init = block_bits[0].split('\n').slice(-1)[0];
        if (init == counter) {
          block_bits = conditional.split(counter);
          if (block_bits.length > 1) {
            conditional = block_bits[1];
          } else {
            window.alert('ok now you have to fix your while block :)');
            return;
          }
        } else {
          window.alert('we will only do the iteration for one successful cell division and then try and get it to do more :)')
          conditional = '< 2';
        }
        var iter = 1;
        var gen = 1;
        while (eval(iter + conditional)) {
          gen += 1;
          var mod = gen % 2;
          var pow = gen/2;
          var scale;
          if (mod == 1) {
            pow = (gen - 1)/2;
            scale = 1;
          } else {
            scale = 2;
          }
          gen -= 1;
          var col = Math.pow(2,pow);
          var row = col/scale;
          var visScreen = '<table style="width: 100%; height: 100%; padding: 0 0 0 0;">';
          for (var i = 0; i < row; i++) {
            visScreen += '<tr>'
            for (var j = 0; j < col; j++) {
              visScreen += '<td>'
              visScreen += '<div id="finalCell' + i + '" style="position: relative; width:100%; height:100%; color: white">' + OGimg + '</div>';
              visScreen += '</td>'
            }
            visScreen += '</tr>'
          }
          visScreen += '</table>'
          document.getElementById('vis_screen').innerHTML +=
              '<div id="OGimg' + (gen + 1) + '" style="position: absolute; width: 100%; height: 100%; opacity: 0">' + visScreen + '</div>';
          renderCmd += '$("#OGimg' + gen + '").velocity({opacity: 0}, 750);';
          renderCmd += '$("#OGimg' + (gen + 1) + '").velocity({opacity: 1}, 750, function() {';
          offset -= 1;
          iter *= 2;
          gen += 1;
        }
        // congrats
        document.getElementById('vis_screen').innerHTML += 
          '<div id="congrats" style="position: absolute; align: center; width: 100%; height: 100%; color: blue; opacity: 0">' 
          + '<h3>Good Work!</h3>' + '</div>';
        renderCmd += '$("#congrats").velocity({opacity: "1"}, 1000);'
        //offset -= 1;
        extra = '});'.repeat(2*(cellList) - offset);
        renderCmd += extra;
      }
      
      // show animations
      eval(renderCmd);
    } else {
      window.alert('try writing using the while block under Loops to run the interphase/division commands for a specific amount of iterations!');
      return;
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
      level: 1, // CHANGE THIS TO LEVEL NUMBER
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
    var handle = Meteor.subscribe("loadBlocks", userName, 1, { // CHANGE TO LEVEL NUMBER
        onError: function() {console.log(error)},
        onReady: function() {
          console.log('ready');
          const ws = UserBlocks.findOne({username: userName, level: 1}).ws; // CHANGE TO LEVEL NUMBER
          var xml = Blockly.Xml.textToDom(ws);
          Blockly.Xml.domToWorkspace(xml, workspace);
          console.log('restored');
          handle.stop();
        }
    });
  },

});
