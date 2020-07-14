/**
 * generate move blocks into java script code
 * 
 * nicole pagane | roberts lab
 */

'use strict'; 

goog.require('Blockly.Python');

// select capsule
Blockly.Python['select_capsule'] = function(block) {
  var SHAPE = {
    'CAPSULE1': 'oval',
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['capsule.' + shape, Blockly.Python.ORDER_ATOMIC];
}

// select cell wall
Blockly.Python['select_cell_wall'] = function(block) {
  var SHAPE = {
    'CELLWALL1': 'oval',
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['cell_wall.' + shape, Blockly.Python.ORDER_ATOMIC];
}

// select plasma membrane
Blockly.Python['select_plasma_membrane'] = function(block) {
  var SHAPE = {
    'MEMBRANE1': 'circle',
    'MEMBRANE2': 'oval'
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['plasma_membrane.' + shape, Blockly.Python.ORDER_ATOMIC];
}

// select nucleoid
Blockly.Python['select_nucleoid'] = function(block) {
  var SHAPE = {
    'NUCLEOID1': 'purple',
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['nucleoid.' + shape, Blockly.Python.ORDER_ATOMIC];
}

// select plasmid
Blockly.Python['select_plasmid'] = function(block) {
  var SHAPE = {
    'PLASMID1': 'circle',
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['plasmid.' + shape, Blockly.Python.ORDER_ATOMIC];
}

// select flagella
Blockly.Python['select_flagella'] = function(block) {
  var SHAPE = {
    'FLAGELLA1': 'black',
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['flagella.' + shape, Blockly.Python.ORDER_ATOMIC];
}

// select membrane
Blockly.Python['select_membrane'] = function(block) {
  var SHAPE = {
    'MEMBRANE1': 'circle',
    'MEMBRANE2': 'oval'
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['membrane.' + shape, Blockly.Python.ORDER_ATOMIC];
}

// select mitochondira
Blockly.Python['select_mitochondria'] = function(block) {
  var SHAPE = {
    'MITOCHONDRIA1': 'orange',
    'MITOCHONDRIA2': 'red'
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['mitochondria.' + shape, Blockly.Python.ORDER_ATOMIC];
}

// select nucleus
Blockly.Python['select_nucleus'] = function(block) {
  var SHAPE = {
    'NUCLEUS1': 'yellow',
    'NUCLEUS2': 'roughER'
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['nucleus.' + shape, Blockly.Python.ORDER_ATOMIC];
}

// select smooth ER
Blockly.Python['select_smoothER'] = function(block) {
  var SHAPE = {
    'ER1': 'yellow',
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['smoothER.' + shape, Blockly.Python.ORDER_ATOMIC];
}

// lysosome
Blockly.Python['select_lysosome'] = function(block) {
  var SHAPE = {
    'LYSOSOME1': 'pink',
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['lysosome.' + shape, Blockly.Python.ORDER_ATOMIC];
}

// select golgi apparatus
Blockly.Python['select_golgi'] = function(block) {
  var SHAPE = {
    'GA1': 'yellow',
    'GA2': 'red'
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['golgi.' + shape, Blockly.Python.ORDER_ATOMIC];
}

// select ribosomes
Blockly.Python['select_ribosomes'] = function(block) {
  var SHAPE = {
    'RIBOSOMES1': 'sparse',
    'RIBOSOMES2': 'dense'
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['ribosomes.' + shape, Blockly.Python.ORDER_ATOMIC];
}

// select cytoskeleton
Blockly.Python['select_cytoskeleton'] = function(block) {
  var SHAPE = {
    'CYTOSKELETON1': 'black'
  };
  var shape = SHAPE[block.getFieldValue('SHAPE')];
  return ['cytoskeleton.' + shape, Blockly.Python.ORDER_ATOMIC];
}

// double an element
Blockly.Python['double'] = function(block) {
  var variable = Blockly.Python.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  return 'double(' + variable + ')\n';
}

// divide
Blockly.Python['divide_cell'] = function(block) {
  var parent = Blockly.Python.variableDB_.getName(block.getFieldValue('VARIABLE1'),
      Blockly.Variables.NAME_TYPE);
  return 'divide(' + parent + ')\n';
}

// interphase
Blockly.Python['interphase'] = function(block) {
  var variable = Blockly.Python.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  return 'interphase(' + variable + ')\n';
}

// mitosis
Blockly.Python['mitosis'] = function(block) {
  var variable = Blockly.Python.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  return 'mitosis(' + variable  + ')\n';
}

// cytokinesis
Blockly.Python['cytokinesis'] = function(block) {
  var variable = Blockly.Python.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  return 'cytokinesis(' + variable + ')\n';
}

// glycolysis
Blockly.Python['glycolysis'] = function(block) {
  var variable = Blockly.Python.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  var order = Blockly.Python.ORDER_ATOMIC;
  var times = Blockly.Python.valueToCode(block, 'TIMES', order);
  var code = 'for i in range(1,' + times + '):\n  ' + 
      variable + ' = glycolysis(' + variable + ')\n';
  return code;
}

// pyruvate oxidation
Blockly.Python['pyruvate_oxidation'] = function(block) {
  var variable = Blockly.Python.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  var order = Blockly.Python.ORDER_ATOMIC;
  var times = Blockly.Python.valueToCode(block, 'TIMES', order);
  var code = 'for i in range(1,' + times + '):\n  ' + 
      variable + ' = pyruvate_oxidation(' + variable + ')\n';
  return code;
}

// citric acid cycle
Blockly.Python['citric_acid_cycle'] = function(block) {
  var variable = Blockly.Python.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  var order = Blockly.Python.ORDER_ATOMIC;
  var times = Blockly.Python.valueToCode(block, 'TIMES', order);
  var code = 'for i in range(1,' + times + '):\n  ' + 
      variable + ' = citric_acid_cycle(' + variable + ')\n';
  return code;
}

// oxidate phosphorylation
Blockly.Python['oxidative_phosphorylation'] = function(block) {
  var variable = Blockly.Python.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  return variable + ' = oxidative_phosphorylation(' + variable + ')\n';
}

// cellular metabolism species numbers
Blockly.Python['species_list'] = function(block) {
  // Create a list with any number of elements of any type.
  var listLength = 10; // predetermined length of metabolism list
  var order = Blockly.Python.ORDER_ATOMIC;
  var elements = [];
  for (var i = 1; i < listLength + 1; i++) {
    elements.push('"' + block.getFieldValue('NAME' + i) + '": ' + 
      Blockly.Python.valueToCode(block, 'NUMBER' + i, order));
  }
  var code = '{\n   ' + elements.join(',\n   ') + '\n}';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// get field of object
Blockly.Python['get_field_object'] = function(block) {
  var variable = Blockly.Python.variableDB_.getName(block.getFieldValue('OBJECT'),
      Blockly.Variables.NAME_TYPE);
  var code = variable + '[' + block.getFieldValue('FIELD') + ']';
  return [code, Blockly.Python.ORDER_ATOMIC];
}

// return all fields of the object
Blockly.Python['return_fields_object'] = function(block) {
  var variable = Blockly.Python.variableDB_.getName(block.getFieldValue('OBJECT'),
      Blockly.Variables.NAME_TYPE);
  var code = variable + '.keys()';
  return [code, Blockly.Python.ORDER_ATOMIC];
}

// detect salt concentration
Blockly.Python['detect_concentration'] = function(block) {
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
  return [code, Blockly.Python.ORDER_ATOMIC];
}

// pump water
Blockly.Python['pump_water'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  var liter = Blockly.Python.valueToCode(block, 'NUMBER', order) || '0';
  return 'pump_water(' + liter + ')\n'
}

// detect equilibrium
Blockly.Python['equilibrium'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['equilibrium()', Blockly.Python.ORDER_ATOMIC];
}

// detect name
Blockly.Python['detect_name'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['detect_name("nearest")', Blockly.Python.ORDER_ATOMIC];
}

// detect hydrophobicity
Blockly.Python['detect_dipole_moment'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['detect_dipole_moment("nearest")', Blockly.Python.ORDER_ATOMIC];
}

// detect size
Blockly.Python['detect_size'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['detect_size("nearest")', Blockly.Python.ORDER_ATOMIC];
}

// transport molecule
Blockly.Python['transport_molecule'] = function(block) {
  var TRANSPORT = {
    'DIFFUSION': 'diffusion',
    'OSMOSIS': 'osmosis',
    'FACILITATED': 'facilitated',
  };
  var transport = TRANSPORT[block.getFieldValue('TRANSPORT')];
  return 'transport("nearest", "' + transport + '")\n';
}

// shape match
Blockly.Python['shape_match'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  var substrate = Blockly.Python.valueToCode(block, 'SUBSTRATE', order);
  var enzyme = Blockly.Python.valueToCode(block, 'ENZYME', order);
  return ['shape_match(' + substrate + ', ' + enzyme + ')', order]
}

// catalyze
Blockly.Python['catalyze'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  var substrate = Blockly.Python.valueToCode(block, 'SUBSTRATE', order);
  var enzyme = Blockly.Python.valueToCode(block, 'ENZYME', order);
  return 'catalyze(' + enzyme + ', ' + substrate + ')\n'
}

// circle enzyme
Blockly.Python['circle_enzyme'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['"circle_enzyme"', Blockly.Python.ORDER_ATOMIC];
}

// square enzyme
Blockly.Python['square_enzyme'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['"square_enzyme"', Blockly.Python.ORDER_ATOMIC];
}

// star enzyme
Blockly.Python['star_enzyme'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['"star_enzyme"', Blockly.Python.ORDER_ATOMIC];
}

// squiggle enzyme
Blockly.Python['squiggle_enzyme'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['"squiggle_enzyme"', Blockly.Python.ORDER_ATOMIC];
}

// triangle enzyme
Blockly.Python['triangle_enzyme'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['"triangle_enzyme"', Blockly.Python.ORDER_ATOMIC];
}

// circle substrate
Blockly.Python['circle_substrate'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['"circle_substrate"', Blockly.Python.ORDER_ATOMIC];
}

// square substrate
Blockly.Python['square_substrate'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['"square_substrate"', Blockly.Python.ORDER_ATOMIC];
}

// star substrate
Blockly.Python['star_substrate'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['"star_substrate"', Blockly.Python.ORDER_ATOMIC];
}

// squiggle substrate
Blockly.Python['squiggle_substrate'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['"squiggle_substrate"', Blockly.Python.ORDER_ATOMIC];
}

// triangle substrate
Blockly.Python['triangle_substrate'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['"triangle_substrate"', Blockly.Python.ORDER_ATOMIC];
}

// crawl cell
Blockly.Python['crawl_specified_direction'] = function(block) {
  //move the sprite by delta in the given direction
  var direction = Blockly.Python.valueToCode(block, 'DIRECTION', Blockly.Python.ORDER_ATOMIC) || '0';
  var delta = Blockly.Python.valueToCode(block, 'DELTA', Blockly.Python.ORDER_ATOMIC) || '0';
  var code =  'crawl(' + direction + ', '+ delta + ')\n';
  return code;
}

// swim cell
Blockly.Python['swim_specified_direction'] = function(block) {
  //move the sprite by delta in the given direction
  var direction = Blockly.Python.valueToCode(block, 'DIRECTION', Blockly.Python.ORDER_ATOMIC) || '0';
  var delta = Blockly.Python.valueToCode(block, 'DELTA', Blockly.Python.ORDER_ATOMIC) || '0';
  var code =  'swim(' + direction + ', '+ delta + ')\n';
  return code;
}

// sense surface
Blockly.Python['sense_surface'] = function(block) {
  //move the sprite by delta in the given direction
  var direction = Blockly.Python.valueToCode(block, 'DIRECTION', Blockly.Python.ORDER_ATOMIC) || '0';
  return ['sense_surface(' + direction + ')', Blockly.Python.ORDER_ATOMIC];
}

// activated receptors
Blockly.Python['activated_receptors'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['activated_receptors()', Blockly.Python.ORDER_ATOMIC];
}

// flagella run
Blockly.Python['flagella_run'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  var angle = Blockly.Python.valueToCode(block, 'ANGLE', order) || '0';
  return 'flagella_run(' + angle + ')\n';
};

// flagella tumble
Blockly.Python['flagella_tumble'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['flagella_tumble()', Blockly.Python.ORDER_ATOMIC];
}

// choose trait
Blockly.Python['choose_trait'] = function(block) {
  var TRAIT = {
    'HAIRLINE': 'hairline',
    'DIMPLES': 'dimples',
    'FRECKLES': 'freckles',
    'HAIRTYPE': 'hairtype'
  }
  var trait = TRAIT[block.getFieldValue('TRAIT')];
  return ['trait.' + trait, Blockly.Python.ORDER_ATOMIC];
}

// choose non-mendelian trait
Blockly.Python['choose_nonmendelian_trait'] = function(block) {
  var NONMENDELTRAIT = {
    'EYECOLOR': 'eyecolor',
    'HAIRCOLOR': 'haircolor',
    'BLOODTYPE': 'bloodtype'
  }
  var nonmendeltrait = NONMENDELTRAIT[block.getFieldValue('NONMENDELTRAIT')];
  return ['nonmendeltrait.' + nonmendeltrait, Blockly.Python.ORDER_ATOMIC];
}

// codon map
Blockly.Python['codons'] = function(block) {
  // Create a list with any number of elements of any type.
  var listLength = 24; // predetermined length of metabolism list
  var order = Blockly.Python.ORDER_ATOMIC;
  var elements = [];
  for (var i = 1; i < listLength + 1; i++) {
    elements.push('"' + block.getFieldValue('NAME' + i) + '": ' + 
        Blockly.Python.valueToCode(block, 'NUMBER' + i, order));
  }
  var code = '{\n   ' + elements.join(',\n   ') + '\n}';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// light reactions
Blockly.Python['light_reactions'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  var lambda = Blockly.Python.valueToCode(block, 'wavelength', order) || '0';
  return 'light_reactions(' + lambda + ')\n';
}

// flagella tumble
Blockly.Python['dark_reactions'] = function(block) {
  return 'dark_reactions()\n';
}

//reproduction
Blockly.Python['reproduction'] = function(block) {
  var variable_parentone = Blockly.Python.variableDB_.getName(block.getFieldValue('ParentOne'), 
    Blockly.Variables.NAME_TYPE);
  var variable_parenttwo = Blockly.Python.variableDB_.getName(block.getFieldValue('ParentTwo'), 
    Blockly.Variables.NAME_TYPE);
  return 'reproduction(' + variable_parentone + variable_parenttwo + ')\n'
};

// choose dominant or recessive
Blockly.Python['recessive_or_dominant'] = function(block) {
  var DOMORREC = {
    'RECESSIVE': 'dominant',
    'DOMINANT': 'recessive',
  }
  var domorrec = DOMORREC[block.getFieldValue('TEST')];
  return ['domorrec.' + domorrec, Blockly.Python.ORDER_ATOMIC];
};

// choose trait
Blockly.Python['test'] = function(block) {
  var TRAIT = {
    'T': 't',
    'TE': 'te',
    'TES': 'tes',
    'TEST': 'test'
  }
  var test = TEST[block.getFieldValue('TEST')];
  return ['test.' + trait, Blockly.Python.ORDER_ATOMIC];
};

// shape match immmune
Blockly.Python['binding_site'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  var molecule = Blockly.Python.valueToCode(block, 'MOLECULE', order);
  return ['binding_site(' + molecule + ')', order]
}

// anitbody 1
Blockly.Python['antibody1'] = function(block) {
  return ['"antibody1"', Blockly.Python.ORDER_ATOMIC];
}

// anitbody 2
Blockly.Python['antibody2'] = function(block) {
  return ['"antibody2"', Blockly.Python.ORDER_ATOMIC];
}

// anitbody 3
Blockly.Python['antibody3'] = function(block) {
  return ['"antibody3"', Blockly.Python.ORDER_ATOMIC];
}

// anitbody 4
Blockly.Python['antibody4'] = function(block) {
  return ['"antibody4"', Blockly.Python.ORDER_ATOMIC];
}

// anitbody 5
Blockly.Python['antibody5'] = function(block) {
  return ['"antibody5"', Blockly.Python.ORDER_ATOMIC];
}

// antigen 1
Blockly.Python['antigen1'] = function(block) {
  return ['"antigen1"', Blockly.Python.ORDER_ATOMIC];
}

// antigen 2
Blockly.Python['antigen2'] = function(block) {
  return ['"antigen2"', Blockly.Python.ORDER_ATOMIC];
}

// antigen 3
Blockly.Python['antigen3'] = function(block) {
  return ['"antigen3"', Blockly.Python.ORDER_ATOMIC];
}

// antigen 4
Blockly.Python['antigen4'] = function(block) {
  return ['"antigen4"', Blockly.Python.ORDER_ATOMIC];
}

// antigen 5
Blockly.Python['antigen5'] = function(block) {
  return ['"antigen5"', Blockly.Python.ORDER_ATOMIC];
}

// fungal immune response
Blockly.Python['fungal_response'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  var antibody = Blockly.Python.valueToCode(block, 'ANTIBODY', order);
  var antigen = Blockly.Python.valueToCode(block, 'ANTIGEN', order);
  return 'fungal_response(' + antibody + ', ' + antigen + ')\n';
}

// cold immune response
Blockly.Python['cold_response'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  var antibody = Blockly.Python.valueToCode(block, 'ANTIBODY', order);
  var antigen = Blockly.Python.valueToCode(block, 'ANTIGEN', order);
  return 'cold_response(' + antibody + ', ' + antigen + ')\n';
}

// autoimmune immune response
Blockly.Python['autoimmune_response'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  var antibody = Blockly.Python.valueToCode(block, 'ANTIBODY', order);
  var antigen = Blockly.Python.valueToCode(block, 'ANTIGEN', order);
  return 'autoimmune_response(' + antibody + ', ' + antigen + ')\n';
}

// HIV immune response
Blockly.Python['HIV_response'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  var antibody = Blockly.Python.valueToCode(block, 'ANTIBODY', order);
  var antigen = Blockly.Python.valueToCode(block, 'ANTIGEN', order);
  return 'HIV_response(' + antibody + ', ' + antigen + ')\n';
}

// flu immune response
Blockly.Python['flu_response'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  var antibody = Blockly.Python.valueToCode(block, 'ANTIBODY', order);
  var antigen = Blockly.Python.valueToCode(block, 'ANTIGEN', order);
  return 'flu_response(' + antibody + ', ' + antigen + ')\n';
}

// sense signal
Blockly.Python['sense_signal'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  return ['sense_signal()', order];
}

// transmit signal
Blockly.Python['transmit_signal'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  var from = Blockly.Python.valueToCode(block, 'FROM', order);
  return ['transmit_signal(' + from + ')', order];
}

// process signal
Blockly.Python['process_signal'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  var aff = Blockly.Python.valueToCode(block, 'AFFERENT', order);
  return ['process_signal(' + aff + ')', order];
}

// respond signal
Blockly.Python['response_signal'] = function(block) {
  var order = Blockly.Python.ORDER_ATOMIC;
  var response = Blockly.Python.valueToCode(block, 'RESPONSE', order);
  return 'response_signal(' + response + ')\n';
}

// detect fitness
Blockly.Python['detect_fitness'] = function(block) {
  return ['detect_fitness()', Blockly.Python.ORDER_ATOMIC];
}

// collective migration
Blockly.Python['collective_migration'] = function(block) {
  return 'collective_migration()';
}

// engulf
Blockly.Python['engulf'] = function(block) {
  return 'engulf()';
}

// alive
Blockly.Python['alive'] = function(block) {
  return ['alive()', Blockly.Python.ORDER_ATOMIC];
}

// detect damage
Blockly.Python['detect_damage'] = function(block) {
  return ['detect_damage()', Blockly.Python.ORDER_ATOMIC];
}

// fix damage
Blockly.Python['fix_damage'] = function(block) {
  var FIX = {
    'HEAT': 'heat shock proteins',
    'TOXINS': 'stress proteins/pathways',
    'IRREVERSIBLE': 'apoptosis'
  }
  var fix = FIX[block.getFieldValue('FIX')];
  return 'fix_damage("' + fix + '")\n';
};

// switch statement that i found online lol
// link: https://groups.google.com/forum/#!topic/blockly/djhO2jUb0Xs
Blockly.Python['switch_case'] = function(block) {
	var code = '';
	var do_n;
	var case_n;
	var switchVariable = Blockly.Python.valueToCode(block, 'CONDITION',
												Blockly.Python.ORDER_NONE) || null;
	if (switchVariable){
		var pattern = /^([a-zA-Z_]+(\d|[a-zA-Z_])*)$/g;
		if (pattern.test(switchVariable)){ // Check to see if the switch is a kind of variable type
			code = '\nswitch = {\n';
			var case_0 = Blockly.Python.valueToCode(block, 'CASECONDITION0',
														Blockly.Python.ORDER_NONE) || null;
			var do_0 = Blockly.Python.statementToCode(block, 'CASE0');
			code += '  ' + case_0 + ':' + do_0 + ',\n';
			
			for (var n = 1; n <= block.caseCount_; n++) {
				case_n = Blockly.Python.valueToCode(block, 'CASECONDITION' + n,
					Blockly.Python.ORDER_NONE) || null;
				if (case_n){
					do_n = Blockly.Python.statementToCode(block, 'CASE' + n);
					code += '  ' + case_n + ':' + do_n + ',\n';
				}
			}
			/*if (block.defaultCount_) {
				do_n = Blockly.Python.statementToCode(block, 'ONDEFAULT');
				code += '  default:\n  ' + do_n + '\n    break\n';
			}*/
      code += '}\n';
      code += 'switch[' + switchVariable + ']()';
	  }
	  else
		  alert('switch_case: ' + switchVariable + ' is not a variable name');
	}
	return code;
}