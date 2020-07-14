/**
 * generate move blocks into java script code
 * 
 * nicole pagane | roberts lab
 */

'use strict'; 

goog.provide('Blockly.Javascript');

// select capsule
Blockly.JavaScript['select_capsule'] = function(block) {
  var SHAPE = {
    'CAPSULE1': 'oval',
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['capsule.' + shape, Blockly.JavaScript.ORDER_ATOMIC];
}

// select cell wall
Blockly.JavaScript['select_cell_wall'] = function(block) {
  var SHAPE = {
    'CELLWALL1': 'oval',
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['cell_wall.' + shape, Blockly.JavaScript.ORDER_ATOMIC];
}

// select plasma membrane
Blockly.JavaScript['select_plasma_membrane'] = function(block) {
  var SHAPE = {
    'MEMBRANE1': 'circle',
    'MEMBRANE2': 'oval'
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['plasma_membrane.' + shape, Blockly.JavaScript.ORDER_ATOMIC];
}

// select nucleoid
Blockly.JavaScript['select_nucleoid'] = function(block) {
  var SHAPE = {
    'NUCLEOID1': 'purple',
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['nucleoid.' + shape, Blockly.JavaScript.ORDER_ATOMIC];
}

// select plasmid
Blockly.JavaScript['select_plasmid'] = function(block) {
  var SHAPE = {
    'PLASMID1': 'circle',
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['plasmid.' + shape, Blockly.JavaScript.ORDER_ATOMIC];
}

// select flagella
Blockly.JavaScript['select_flagella'] = function(block) {
  var SHAPE = {
    'FLAGELLA1': 'black',
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['flagella.' + shape, Blockly.JavaScript.ORDER_ATOMIC];
}

// select membrane
Blockly.JavaScript['select_membrane'] = function(block) {
  var SHAPE = {
    'MEMBRANE1': 'circle',
    'MEMBRANE2': 'oval'
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['membrane.' + shape, Blockly.JavaScript.ORDER_ATOMIC];
}

// select mitochondira
Blockly.JavaScript['select_mitochondria'] = function(block) {
  var SHAPE = {
    'MITOCHONDRIA1': 'orange',
    'MITOCHONDRIA2': 'red'
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['mitochondria.' + shape, Blockly.JavaScript.ORDER_ATOMIC];
}

// select nucleus
Blockly.JavaScript['select_nucleus'] = function(block) {
  var SHAPE = {
    'NUCLEUS1': 'yellow',
    'NUCLEUS2': 'roughER'
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['nucleus.' + shape, Blockly.JavaScript.ORDER_ATOMIC];
}

// select smooth ER
Blockly.JavaScript['select_smoothER'] = function(block) {
  var SHAPE = {
    'ER1': 'yellow',
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['smoothER.' + shape, Blockly.JavaScript.ORDER_ATOMIC];
}

// lysosome
Blockly.JavaScript['select_lysosome'] = function(block) {
  var SHAPE = {
    'LYSOSOME1': 'pink',
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['lysosome.' + shape, Blockly.JavaScript.ORDER_ATOMIC];
}

// select golgi apparatus
Blockly.JavaScript['select_golgi'] = function(block) {
  var SHAPE = {
    'GA1': 'yellow',
    'GA2': 'red'
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['golgi.' + shape, Blockly.JavaScript.ORDER_ATOMIC];
}

// select ribosomes
Blockly.JavaScript['select_ribosomes'] = function(block) {
  var SHAPE = {
    'RIBOSOMES1': 'sparse',
    'RIBOSOMES2': 'dense'
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['ribosomes.' + shape, Blockly.JavaScript.ORDER_ATOMIC];
}

// select ribosomes
Blockly.JavaScript['select_cytoskeleton'] = function(block) {
  var SHAPE = {
    'CYTOSKELETON1': 'black'
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['cytoskeleton.' + shape, Blockly.JavaScript.ORDER_ATOMIC];
}

// double an element
Blockly.JavaScript['double'] = function(block) {
  var variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  return 'double(' + variable + ');\n';
}

// divide
Blockly.JavaScript['divide_cell'] = function(block) {
  var parent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE1'),
      Blockly.Variables.NAME_TYPE);
  return 'divide(' + parent + ');\n';
}

// interphase
Blockly.JavaScript['interphase'] = function(block) {
  var variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  return 'interphase(' + variable + ');\n';
}

// mitosis
Blockly.JavaScript['mitosis'] = function(block) {
  var variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  return 'mitosis(' + variable  + ');\n';
}

// cytokinesis
Blockly.JavaScript['cytokinesis'] = function(block) {
  var variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  return 'cytokinesis(' + variable + ');\n';
}

// glycolysis
Blockly.JavaScript['glycolysis'] = function(block) {
  var variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var times = Blockly.JavaScript.valueToCode(block, 'TIMES', order);
  var code = 'for (var i = 0; i < ' + times + '; i++) {\n  ' + 
      variable + ' = glycolysis(' + variable + ');\n' + '}\n';
  return code;
}

// pyruvate oxidation
Blockly.JavaScript['pyruvate_oxidation'] = function(block) {
  var variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var times = Blockly.JavaScript.valueToCode(block, 'TIMES', order);
  var code = 'for (var i = 0; i < ' + times + '; i++) {\n  ' + 
      variable + ' = pyruvate_oxidation(' + variable + ');\n' + '}\n';
  return code;
}

// citric acid cycle
Blockly.JavaScript['citric_acid_cycle'] = function(block) {
  var variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var times = Blockly.JavaScript.valueToCode(block, 'TIMES', order);
  var code = 'for (var i = 0; i < ' + times + '; i++) {\n  ' + 
      variable + ' = citric_acid_cycle(' + variable + ');\n' + '}\n';
  return code;
}

// oxidate phosphorylation
Blockly.JavaScript['oxidative_phosphorylation'] = function(block) {
  var variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  return variable + ' = oxidative_phosphorylation(' + variable + ');\n';
}

// cellular metabolism species numbers
Blockly.JavaScript['species_list'] = function(block) {
  // Create a list with any number of elements of any type.
  var listLength = 10; // predetermined length of metabolism list
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var elements = [];
  for (var i = 1; i < listLength + 1; i++) {
    elements.push(block.getFieldValue('NAME' + i) + ': ' + 
      Blockly.JavaScript.valueToCode(block, 'NUMBER' + i, order));
  }
  var code = '{\n   ' + elements.join(',\n   ') + '\n}';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// get field of object
Blockly.JavaScript['get_field_object'] = function(block) {
  var variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'),
      Blockly.Variables.NAME_TYPE);
  var code = variable + '[' + block.getFieldValue('FIELD') + ']';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

// return all fields of the object
Blockly.JavaScript['return_fields_object'] = function(block) {
  var variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'),
      Blockly.Variables.NAME_TYPE);
  var code = 'Object.keys(' + variable + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

// detect salt concentration
Blockly.JavaScript['detect_concentration'] = function(block) {
  var MOLECULE = {
    'SUGAR': 'sugar',
    'SALT': 'salt',
    'ATP': 'ATP',
  };
  var LOCATION = {
    'INSIDE': 'in',
    'OUTSIDE': 'out',
  };
  var location = LOCATION[block.getFieldValue('LOCATION')];
  var molecule = MOLECULE[block.getFieldValue('MOLECULE')];
  var code =  'detect_concentration("'+ molecule + '", "' + location + '")';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

// pump water
Blockly.JavaScript['pump_water'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var liter = Blockly.JavaScript.valueToCode(block, 'NUMBER', order) || '0';
  return 'pump_water(' + liter + ');\n'
}

// detect equilibrium
Blockly.JavaScript['equilibrium'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['equilibrium()', Blockly.JavaScript.ORDER_ATOMIC];
}

// detect name
Blockly.JavaScript['detect_name'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['detect_name("nearest")', Blockly.JavaScript.ORDER_ATOMIC];
}

// detect hydrophobicity
Blockly.JavaScript['detect_dipole_moment'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['detect_dipole_moment("nearest")', Blockly.JavaScript.ORDER_ATOMIC];
}

// detect size
Blockly.JavaScript['detect_size'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['detect_size("nearest")', Blockly.JavaScript.ORDER_ATOMIC];
}

// transport molecule
Blockly.JavaScript['transport_molecule'] = function(block) {
  var TRANSPORT = {
    'DIFFUSION': 'diffusion',
    'OSMOSIS': 'osmosis',
    'FACILITATED': 'facilitated',
  };
  var transport = TRANSPORT[block.getFieldValue('TRANSPORT')];
  return 'transport("nearest", "' + transport + '");\n';
}

// shape match
Blockly.JavaScript['shape_match'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var substrate = Blockly.JavaScript.valueToCode(block, 'SUBSTRATE', order);
  var enzyme = Blockly.JavaScript.valueToCode(block, 'ENZYME', order);
  return ['shape_match(' + substrate + ', ' + enzyme + ')', order]
}

// catalyze
Blockly.JavaScript['catalyze'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var substrate = Blockly.JavaScript.valueToCode(block, 'SUBSTRATE', order);
  var enzyme = Blockly.JavaScript.valueToCode(block, 'ENZYME', order);
  return 'catalyze(' + enzyme + ', ' + substrate + ');\n'
}

// circle enzyme
Blockly.JavaScript['circle_enzyme'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['"circle_enzyme"', Blockly.JavaScript.ORDER_ATOMIC];
}

// square enzyme
Blockly.JavaScript['square_enzyme'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['"square_enzyme"', Blockly.JavaScript.ORDER_ATOMIC];
}

// star enzyme
Blockly.JavaScript['star_enzyme'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['"star_enzyme"', Blockly.JavaScript.ORDER_ATOMIC];
}

// squiggle enzyme
Blockly.JavaScript['squiggle_enzyme'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['"squiggle_enzyme"', Blockly.JavaScript.ORDER_ATOMIC];
}

// triangle enzyme
Blockly.JavaScript['triangle_enzyme'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['"triangle_enzyme"', Blockly.JavaScript.ORDER_ATOMIC];
}

// circle substrate
Blockly.JavaScript['circle_substrate'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['"circle_substrate"', Blockly.JavaScript.ORDER_ATOMIC];
}

// square substrate
Blockly.JavaScript['square_substrate'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['"square_substrate"', Blockly.JavaScript.ORDER_ATOMIC];
}

// star substrate
Blockly.JavaScript['star_substrate'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['"star_substrate"', Blockly.JavaScript.ORDER_ATOMIC];
}

// squiggle substrate
Blockly.JavaScript['squiggle_substrate'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['"squiggle_substrate"', Blockly.JavaScript.ORDER_ATOMIC];
}

// triangle substrate
Blockly.JavaScript['triangle_substrate'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['"triangle_substrate"', Blockly.JavaScript.ORDER_ATOMIC];
}

// crawl cell
Blockly.JavaScript['crawl_specified_direction'] = function(block) {
  //move the sprite by delta in the given direction
  var direction = Blockly.JavaScript.valueToCode(block, 'DIRECTION', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var delta = Blockly.JavaScript.valueToCode(block, 'DELTA', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code =  'crawl(' + direction + ', '+ delta + ');\n';
  return code;
}

// swim cell
Blockly.JavaScript['swim_specified_direction'] = function(block) {
  //move the sprite by delta in the given direction
  var direction = Blockly.JavaScript.valueToCode(block, 'DIRECTION', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var delta = Blockly.JavaScript.valueToCode(block, 'DELTA', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code =  'swim(' + direction + ', '+ delta + ');\n';
  return code;
}

// sense surface
Blockly.JavaScript['sense_surface'] = function(block) {
  //move the sprite by delta in the given direction
  var direction = Blockly.JavaScript.valueToCode(block, 'DIRECTION', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return ['sense_surface(' + direction + ')', Blockly.JavaScript.ORDER_ATOMIC];
}

// activated receptors
Blockly.JavaScript['activated_receptors'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['activated_receptors()', Blockly.JavaScript.ORDER_ATOMIC];
}

// flagella run
Blockly.JavaScript['flagella_run'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', order) || '0';
  return 'flagella_run(' + angle + ');\n';
};

// flagella tumble
Blockly.JavaScript['flagella_tumble'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['flagella_tumble()', Blockly.JavaScript.ORDER_ATOMIC];
}

// choose trait
Blockly.JavaScript['choose_trait'] = function(block) {
  var TRAIT = {
    'HAIRLINE': 'hairline',
    'DIMPLES': 'dimples',
    'FRECKLES': 'freckles',
    'HAIRTYPE': 'hairtype'
  }
  var trait = TRAIT[block.getFieldValue('TRAIT')];
  return ['trait.' + trait, Blockly.JavaScript.ORDER_ATOMIC];
}

// choose genetic disorder
Blockly.JavaScript['choose_genetic_disorder'] = function(block) {
  var GD = {
    'PKU': 'oku',
    'SC': 'sickle cell',
    'CF': 'cystic fibrosis',
    'HUNTINGTONS': 'huntingtons'
  }
  var gd = GD[block.getFieldValue('GD')];
  return ['gd.' + gd, Blockly.JavaScript.ORDER_ATOMIC];
}

// choose non-mendelian trait
Blockly.JavaScript['choose_nonmendelian_trait'] = function(block) {
  var NONMENDELTRAIT = {
    'EYECOLOR': 'eyecolor',
    'HAIRCOLOR': 'haircolor',
    'BLOODTYPE': 'bloodtype'
  }
  var nonmendeltrait = NONMENDELTRAIT[block.getFieldValue('NONMENDELTRAIT')];
  return ['nonmendeltrait.' + nonmendeltrait, Blockly.JavaScript.ORDER_ATOMIC];
}

// codon map
Blockly.JavaScript['codons'] = function(block) {
  // Create a list with any number of elements of any type.
  var listLength = 24; // predetermined length of metabolism list
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var elements = [];
  for (var i = 1; i < listLength + 1; i++) {
    elements.push('"' + block.getFieldValue('NAME' + i) + '": ' + 
        Blockly.JavaScript.valueToCode(block, 'NUMBER' + i, order));
  }
  var code = '{\n   ' + elements.join(',\n   ') + '\n}';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// light reactions
Blockly.JavaScript['light_reactions'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var lambda = Blockly.JavaScript.valueToCode(block, 'wavelength', order) || '0';
  return 'light_reactions(' + lambda + ');\n';
}

// flagella tumble
Blockly.JavaScript['dark_reactions'] = function(block) {
  return 'dark_reactions();\n';
}

// hairline
Blockly.JavaScript['hairline'] = function(block) {
  return ['"hairline"', Blockly.JavaScript.ORDER_ATOMIC];
}
// hairtype
Blockly.JavaScript['hairtype'] = function(block) {
  return ['"hairtype"', Blockly.JavaScript.ORDER_ATOMIC];
}

// freckles
Blockly.JavaScript['freckles'] = function(block) {
  return ['"freckles"', Blockly.JavaScript.ORDER_ATOMIC];
}

// dimples
Blockly.JavaScript['dimples'] = function(block) {
  return ['"dimples"', Blockly.JavaScript.ORDER_ATOMIC];
}

//reproduction
Blockly.JavaScript['reproduction'] = function(block) {
  var variable_parentone = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ParentOne'), 
    Blockly.Variables.NAME_TYPE);
  var variable_parenttwo = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ParentTwo'), 
    Blockly.Variables.NAME_TYPE);
  return 'reproduction(' + variable_parentone + variable_parenttwo + ');\n'
};

// choose dominant or recessive
Blockly.JavaScript['recessive_or_dominant'] = function(block) {
  var DOMORREC = {
    'RECESSIVE': 'dominant',
    'DOMINANT': 'recessive',
  }
  var domorrec = DOMORREC[block.getFieldValue('DOMORREC')];
  return ['domorrec.' + domorrec, Blockly.JavaScript.ORDER_ATOMIC];
};


// choose carrier status
Blockly.JavaScript['carrier_status'] = function(block) {
  var CS = {
    'CARRIER': 'carrier',
    'NONCARRIER': 'noncarrier',
    'AFFECTED': 'affected'
  }
  var cs = CS[block.getFieldValue('CS')];
  return ['cs.' + cs, Blockly.JavaScript.ORDER_ATOMIC];
};

// choose trait
Blockly.JavaScript['test'] = function(block) {
  var TRAIT = {
    'T': 't',
    'TE': 'te',
    'TES': 'tes',
    'TEST': 'test'
  }
  var test = TEST[block.getFieldValue('TEST')];
  return ['test.' + trait, Blockly.JavaScript.ORDER_ATOMIC];
};

// shape match immmune
Blockly.JavaScript['binding_site'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var molecule = Blockly.JavaScript.valueToCode(block, 'MOLECULE', order);
  return ['binding_site(' + molecule + ')', order]
}

// antibody 1
Blockly.JavaScript['antibody1'] = function(block) {
  return ['"antibody1"', Blockly.JavaScript.ORDER_ATOMIC];
}

// antibody 2
Blockly.JavaScript['antibody2'] = function(block) {
  return ['"antibody2"', Blockly.JavaScript.ORDER_ATOMIC];
}

// antibody 3
Blockly.JavaScript['antibody3'] = function(block) {
  return ['"antibody3"', Blockly.JavaScript.ORDER_ATOMIC];
}

// antibody 4
Blockly.JavaScript['antibody4'] = function(block) {
  return ['"antibody4"', Blockly.JavaScript.ORDER_ATOMIC];
}

// antibody 5
Blockly.JavaScript['antibody5'] = function(block) {
  return ['"antibody5"', Blockly.JavaScript.ORDER_ATOMIC];
}

// antigen 1
Blockly.JavaScript['antigen1'] = function(block) {
  return ['"antigen1"', Blockly.JavaScript.ORDER_ATOMIC];
}

// antigen 2
Blockly.JavaScript['antigen2'] = function(block) {
  return ['"antigen2"', Blockly.JavaScript.ORDER_ATOMIC];
}

// antigen 3
Blockly.JavaScript['antigen3'] = function(block) {
  return ['"antigen3"', Blockly.JavaScript.ORDER_ATOMIC];
}

// antigen 4
Blockly.JavaScript['antigen4'] = function(block) {
  return ['"antigen4"', Blockly.JavaScript.ORDER_ATOMIC];
}

// antigen 5
Blockly.JavaScript['antigen5'] = function(block) {
  return ['"antigen5"', Blockly.JavaScript.ORDER_ATOMIC];
}

// fungal immune response
Blockly.JavaScript['fungal_response'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var antibody = Blockly.JavaScript.valueToCode(block, 'ANTIBODY', order);
  var antigen = Blockly.JavaScript.valueToCode(block, 'ANTIGEN', order);
  return 'fungal_response(' + antibody + ', ' + antigen + ');\n';
}

// cold immune response
Blockly.JavaScript['cold_response'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var antibody = Blockly.JavaScript.valueToCode(block, 'ANTIBODY', order);
  var antigen = Blockly.JavaScript.valueToCode(block, 'ANTIGEN', order);
  return 'cold_response(' + antibody + ', ' + antigen + ');\n';
}

// autoimmune immune response
Blockly.JavaScript['autoimmune_response'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var antibody = Blockly.JavaScript.valueToCode(block, 'ANTIBODY', order);
  var antigen = Blockly.JavaScript.valueToCode(block, 'ANTIGEN', order);
  return 'autoimmune_response(' + antibody + ', ' + antigen + ');\n';
}

// HIV immune response
Blockly.JavaScript['HIV_response'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var antibody = Blockly.JavaScript.valueToCode(block, 'ANTIBODY', order);
  var antigen = Blockly.JavaScript.valueToCode(block, 'ANTIGEN', order);
  return 'HIV_response(' + antibody + ', ' + antigen + ');\n';
}

// flu immune response
Blockly.JavaScript['flu_response'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var antibody = Blockly.JavaScript.valueToCode(block, 'ANTIBODY', order);
  var antigen = Blockly.JavaScript.valueToCode(block, 'ANTIGEN', order);
  return 'flu_response(' + antibody + ', ' + antigen + ');\n';
}

// sense signal
Blockly.JavaScript['sense_signal'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  return ['sense_signal()', order];
}

// transmit signal
Blockly.JavaScript['transmit_signal'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var from = Blockly.JavaScript.valueToCode(block, 'FROM', order);
  return ['transmit_signal(' + from + ')', order];
}

// process signal
Blockly.JavaScript['process_signal'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var aff = Blockly.JavaScript.valueToCode(block, 'AFFERENT', order);
  return ['process_signal(' + aff + ')', order];
}

// respond signal
Blockly.JavaScript['response_signal'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var response = Blockly.JavaScript.valueToCode(block, 'RESPONSE', order);
  return 'response_signal(' + response + ');\n';
}

// detect fitness
Blockly.JavaScript['detect_fitness'] = function(block) {
  return ['detect_fitness()', Blockly.JavaScript.ORDER_ATOMIC];
}

// collective migration
Blockly.JavaScript['collective_migration'] = function(block) {
  return 'collective_migration();\n';
}

// engulf
Blockly.JavaScript['engulf'] = function(block) {
  return 'engulf();\n';
}

// background query
Blockly.JavaScript['background_query'] = function(block) {
  var order = Blockly.JavaScript.ORDER_ATOMIC;
  var bgquery = Blockly.JavaScript.valueToCode(block, 'BGQUERY', order);
  return 'background_query(' + bgquery + ');\n';
}

//background color change
Blockly.JavaScript['change_background'] = function(block) {
  var order =Blockly.JavaScript.ORDER_ATOMIC;
  var change = Blockly.JavaScript.valueToCode(block,'CHANGE', order);
  return 'change_background(' + change + ');\n';
}

//display punnett square
Blockly.JavaScript['display_ps'] = function(block) {
  return [' "display_ps"', Blockly.JavaScript.ORDER_ATOMIC];
}

//rh positive
Blockly.JavaScript['positive'] = function(block) {
  return ['"positive"', Blockly.JavaScript.ORDER_ATOMIC];
}

//rh negative
Blockly.JavaScript['negative'] = function(block) {
  return ['"negative"', Blockly.JavaScript.ORDER_ATOMIC];
}

//type a
Blockly.JavaScript['a_type'] = function(block) {
  return ['"a_type"', Blockly.JavaScript.ORDER_ATOMIC];
}

//type b
Blockly.JavaScript['b_type'] = function(block) {
  return ['"b_type"', Blockly.JavaScript.ORDER_ATOMIC];
}
 
//type ab
Blockly.JavaScript['ab_type'] = function(block) {
  return ['"ab_type"', Blockly.JavaScript.ORDER_ATOMIC];
}

//type o
Blockly.JavaScript['o_type'] = function(block) {
  return ['"o_type"', Blockly.JavaScript.ORDER_ATOMIC];
}
// grey background
Blockly.JavaScript['grey_background'] = function(block) {
  return ['"grey_background"', Blockly.JavaScript.ORDER_ATOMIC];
}

//white background
Blockly.JavaScript['white_background'] = function(block) {
  return ['"white_background"', Blockly.JavaScript.ORDER_ATOMIC];
}

//eat grey moths
Blockly.JavaScript['eat_grey_moths'] = function(block) {
  return ['"eat_grey_moths"', Blockly.JavaScript.ORDER_ATOMIC];
}

//eat white moths
Blockly.JavaScript['eat_white_moths'] = function(block) {
  return ['"eat_white_moths"', Blockly.JavaScript.ORDER_ATOMIC];
}

// alive
Blockly.JavaScript['alive'] = function(block) {
  return ['alive()', Blockly.JavaScript.ORDER_ATOMIC];
}

// detect damage
Blockly.JavaScript['detect_damage'] = function(block) {
  return ['detect_damage()', Blockly.JavaScript.ORDER_ATOMIC];
}

// fix damage
Blockly.JavaScript['fix_damage'] = function(block) {
  var FIX = {
    'HEAT': 'heat shock proteins',
    'TOXINS': 'stress proteins/pathways',
    'IRREVERSIBLE': 'apoptosis'
  }
  var fix = FIX[block.getFieldValue('FIX')];
  return 'fix_damage("' + fix + '");\n';
};

// switch statement that i found online lol
// link: https://groups.google.com/forum/#!topic/blockly/djhO2jUb0Xs
Blockly.JavaScript['switch_case'] = function(block) {
	var code = '';
	var do_n;
	var case_n;
	var switchVariable = Blockly.JavaScript.valueToCode(block, 'CONDITION',
												Blockly.JavaScript.ORDER_NONE) || null;
	if (switchVariable){
		var pattern = /^([a-zA-Z_]+(\d|[a-zA-Z_])*)$/g;
		if (pattern.test(switchVariable)){ // Check to see if the switch is a kind of variable type
			code = '\nswitch (' + switchVariable + '){\n';
			var case_0 = Blockly.JavaScript.valueToCode(block, 'CASECONDITION0',
														Blockly.JavaScript.ORDER_NONE) || null;
			var do_0 = Blockly.JavaScript.statementToCode(block, 'CASE0');
			code += '  case ' + case_0 + ':\n  ' + do_0 + '\n    break;\n';
			
			for (var n = 1; n <= block.caseCount_; n++) {
				case_n = Blockly.JavaScript.valueToCode(block, 'CASECONDITION' + n,
					Blockly.JavaScript.ORDER_NONE) || null;
				if (case_n){
					do_n = Blockly.JavaScript.statementToCode(block, 'CASE' + n);
					code += '  case ' + case_n + ':\n  ' + do_n + '\n    break;\n';
				}
			}
			if (block.defaultCount_) {
				do_n = Blockly.JavaScript.statementToCode(block, 'ONDEFAULT');
				code += '  default:\n  ' + do_n + '\n    break;\n';
			}
			code += '}\n';
	  }
	  else
		  alert('switch_case: ' + switchVariable + ' is not a variable name');
	}
	return code;
}