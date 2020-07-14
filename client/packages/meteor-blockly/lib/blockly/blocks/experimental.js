/**
 * blocks developed for the BRBT video game
 *
 * nicole pagane | roberts lab
 */

'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

var color = 180;

// define blocks for level 0 (cell biology)
Blockly.defineBlocksWithJsonArray([

  {
    // select capsule
    "type": "select_capsule",
    "message0": "capsule %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SHAPE",
        "options": [
          [{ "src": "./img/oval.png", "width": 35, "height": 35, "alt": "oval" }, "CAPSULE1"],
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select the shape of your capsule"
  },

  {
    // select cell wall
    "type": "select_cell_wall",
    "message0": "cell wall %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SHAPE",
        "options": [
          [{ "src": "./img/oval.png", "width": 35, "height": 35, "alt": "oval" }, "CELLWALL1"],
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select the shape of your cell wall"
  },

  {
    // select membrane
    "type": "select_plasma_membrane",
    "message0": "plasma membrane %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SHAPE",
        "options": [
          [{ "src": "./img/oval.png", "width": 35, "height": 35, "alt": "oval" }, "MEMBRANE1"],
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select the shape of your plasma membrane"
  },

  {
    // select nucleoid
    "type": "select_nucleoid",
    "message0": "nucleoid %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SHAPE",
        "options": [
          [{ "src": "./img/nucleoid.png", "width": 35, "height": 35, "alt": "purple" }, "NUCLEOID1"],
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select the shape of your nuceloid region"
  },

  {
    // select plasmid
    "type": "select_plasmid",
    "message0": "plasmid %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SHAPE",
        "options": [
          [{ "src": "./img/plasmid.png", "width": 35, "height": 35, "alt": "circle" }, "PLASMID1"],
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select the shape of your plasmid"
  },

  {
    // select flagella
    "type": "select_flagella",
    "message0": "flagella %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SHAPE",
        "options": [
          [{ "src": "./img/flagella.png", "width": 35, "height": 35, "alt": "black" }, "FLAGELLA1"],
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select the shape of your plasmid"
  },

  {
    // select membrane
    "type": "select_membrane",
    "message0": "plasma membrane %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SHAPE",
        "options": [
          [{ "src": "./img/membrane1.png", "width": 35, "height": 35, "alt": "circle" }, "MEMBRANE1"],
          [{ "src": "./img/membrane2.png", "width": 35, "height": 35, "alt": "oval" }, "MEMBRANE2"],
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select the shape of your plasma membrane"
  },


  {
    // select mitochondria
    "type": "select_mitochondria",
    "message0": "mitochondria %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SHAPE",
        "options": [
          [{ "src": "./img/mitochondria1.png", "width": 35, "height": 35, "alt": "orange" }, "MITOCHONDRIA1"],
          [{ "src": "./img/mitochondria2.png", "width": 35, "height": 35, "alt": "red" }, "MITOCHONDRIA2"]
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select mitochondria for your cell"
  },

  {
    // select nucleus
    "type": "select_nucleus",
    "message0": "nucleus %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SHAPE",
        "options": [
          [{ "src": "./img/nucleus1.png", "width": 35, "height": 35, "alt": "yellow" }, "NUCLEUS1"],
          [{ "src": "./img/nucleus2.png", "width": 35, "height": 35, "alt": "roughER" }, "NUCLEUS2"]
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select a nucleus for your cell"
  },

  {
    // select smooth ER
    "type": "select_smoothER",
    "message0": "smooth endoplasmic reticulum %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SHAPE",
        "options": [
          [{ "src": "./img/ER1.png", "width": 35, "height": 35, "alt": "yellow" }, "ER1"],
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select smooth ER for your cell"
  },

  {
    // lysosome
    "type": "select_lysosome",
    "message0": "lysosome %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SHAPE",
        "options": [
          [{ "src": "./img/lysosome1.png", "width": 35, "height": 35, "alt": "pink" }, "LYSOSOME1"],
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select smooth ER for your cell"
  },

  {
    // select golgi body
    "type": "select_golgi",
    "message0": "golgi apparatus %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SHAPE",
        "options": [
          [{ "src": "./img/GA1.png", "width": 35, "height": 35, "alt": "yellow" }, "GA1"],
          [{ "src": "./img/GA2.png", "width": 35, "height": 35, "alt": "red" }, "GA2"],
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select smooth ER for your cell"
  },

  {
    // select ribosomes
    "type": "select_ribosomes",
    "message0": "ribosomes %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SHAPE",
        "options": [
          [{ "src": "./img/ribosome1.png", "width": 35, "height": 35, "alt": "sparse" }, "RIBOSOMES1"],
          [{ "src": "./img/ribosome2.png", "width": 35, "height": 35, "alt": "dense" }, "RIBOSOMES2"]
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select the density of ribosomes in your cell"
  },

  {
    // select cytoskeleton
    "type": "select_cytoskeleton",
    "message0": "cytoskeleton %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SHAPE",
        "options": [
          [{ "src": "./img/cytoskeleton.png", "width": 35, "height": 35, "alt": "black" }, "CYTOSKELETON1"],
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select the density of ribosomes in your cell"
  },

  {
    // double/grow
    "type": "double",
    "message0": "double component %1 in size/quanitity",
    "args0": [
      {
        "type": "field_variable",
        "name": "VARIABLE",
        "variable": "item",
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "replicate and grow cell components to prepare for binary fission"
  },

  {
    // divide cell
    "type": "divide_cell",
    "message0": "divide cell %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VARIABLE1",
        "variable": "item",
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "divide the grown cell into two idential daughter cells"
  },

  {
    // interphase
    "type": "interphase",
    "message0": "interphase on cell line %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VARIABLE",
        "variable": "item",
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "let your cell(s) go through interphase (growth and DNA replication)"
  },

  {
    // mitosis
    "type": "mitosis",
    "message0": "mitosis on cell line %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VARIABLE",
        "variable": "item",
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "let your cell(s) go through mitosis (cell division)"
  },

  {
    // cytokinesis
    "type": "cytokinesis",
    "message0": "cytokinesis on cell line %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VARIABLE",
        "variable": "item",
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "divide the cytoplasm(s) so that you have two identical daughter cells"
  },

  {
    // glycolysis
    "type": "glycolysis",
    "message0": "glycolysis on species %1 %2 time(s)",
    "args0": [
      {
        "type": "field_variable",
        "name": "VARIABLE",
        "variable": "item",
      },
      {
        "type": "input_value",
        "name": "TIMES",
        "variable": "item",
        "check": "Number"
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "perform glycolysis on the input species"
  },

  {
    // pyruvate oxidation
    "type": "pyruvate_oxidation",
    "message0": "pyruvate oxidation on species %1 %2 time(s)",
    "args0": [
      {
        "type": "field_variable",
        "name": "VARIABLE",
        "variable": "item",
      },
      {
        "type": "input_value",
        "name": "TIMES",
        "variable": "item",
        "check": "Number"
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "perform pyuvate oxidation on the input species"
  },

  {
    // citric acid cycle
    "type": "citric_acid_cycle",
    "message0": "citric acid cycle on species %1 %2 time(s)",
    "args0": [
      {
        "type": "field_variable",
        "name": "VARIABLE",
        "variable": "item",
      },
      {
        "type": "input_value",
        "name": "TIMES",
        "variable": "item",
        "check": "Number"
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "perform the citric acid cycle on the input species"
  },

  {
    // oxidative phosphorylation
    "type": "oxidative_phosphorylation",
    "message0": "oxidative phosphorylation on species %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VARIABLE",
        "variable": "item",
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "perform the citric acid cycle on the input species"
  },

  {
    // speceis list
    "type": "species_list",
    "message0": "species number of %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME1",
        "text": "sugar"
      },
      {
        "type": "input_value",
        "name": "NUMBER1",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME2",
        "text": "oxygen"
      },
      {
        "type": "input_value",
        "name": "NUMBER2",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME3",
        "text": "ADP"
      },
      {
        "type": "input_value",
        "name": "NUMBER3",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME4",
        "text": "ATP"
      },
      {
        "type": "input_value",
        "name": "NUMBER4",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME5",
        "text": "oxidizedElectronCarriers"
      },
      {
        "type": "input_value",
        "name": "NUMBER5",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME6",
        "text": "reducedElectronCarriers"
      },
      {
        "type": "input_value",
        "name": "NUMBER6",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME7",
        "text": "pyruvate"
      },
      {
        "type": "input_value",
        "name": "NUMBER7",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME8",
        "text": "acetylCoA"
      },
      {
        "type": "input_value",
        "name": "NUMBER8",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME9",
        "text": "water"
      },
      {
        "type": "input_value",
        "name": "NUMBER9",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME10",
        "text": "carbonDioxide"
      },
      {
        "type": "input_value",
        "name": "NUMBER10",
        "check": "Number",
        "align": "RIGHT"
      },
    ],
    "output": null,
    "inputsInline": false,
    "colour": color,
    "helpUrl": null,
    "tooltip": "list of the number of species at each stage of metabolism"
  },

  {
    // get field of species object
    "type": "get_field_object",
    "message0": "get field %1 of object %2",
    "args0": [
      {
        "type": "field_input",
        "name": "FIELD",
        "text": "sugar"
      },
      {
        "type": "field_variable",
        "name": "OBJECT",
        "variable": "item",
      },
    ],
    "output": null,
    "inputsInline": false,
    "colour": color,
    "helpUrl": null,
    "tooltip": "get the specified field of the given object"
  },

  {
    // return the fields of the object
    "type": "return_fields_object",
    "message0": "return all the fields for object %1",
    "args0": [
      {
        "type": "field_variable",
        "name": "OBJECT",
        "variable": "item",
      },
    ],
    "output": null,
    "inputsInline": false,
    "colour": color,
    "helpUrl": null,
    "tooltip": "return all the fields of the given object"
  },

  {
    // sense solute concentration
    "type": "detect_concentration",
    "message0": "detect %1 concentration (M) %2 of cell",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "MOLECULE",
        "options": [
          ["sugar", "SUGAR"],
          ["salt", "SALT"],
          ["ATP", "ATP"],
        ]

      },
      {
        "type": "field_dropdown",
        "name": "LOCATION",
        "options": [
          ["inside", "INSIDE"],
          ["outside", "OUTSIDE"],
        ]

      },
    ],
    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "detect and return the solute/ATP concentration (M) at the given location relative to the cell"
  },

  {
    // pump water in/out
    "type": "pump_water",
    "message0": "pump %1 L of water out of cell",
    "args0": [
      {
        "type": "input_value",
        "name": "NUMBER",
        "check": "Number",
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "pump the designated amount of water in (negative) or out of (positive) the cell"
  },

  {
    // equilibrium
    "type": "equilibrium",
    "message0": "at equilibrium",
    "args0": [
    ],
    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "return true if the environment is at equilibrium and false otherwise"
  },

  {
    // sense hydrophobicity
    "type": "detect_dipole_moment",
    "message0": "detect nearest molecular dipole moment (D)",
    "args0": [
    ],
    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "detect the dipole moment (debyes) of the molecule nearest the outer membrane and return the value"
  },

  {
    // sense nearest molecule
    "type": "detect_name",
    "message0": "detect nearest molecule name",
    "args0": [
    ],
    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "detect the type of the molecule nearest the outer membrane and return the value"
  },

  {
    // sense size
    "type": "detect_size",
    "message0": "detect nearest molecular size (Å)",
    "args0": [
    ],
    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "detect the size of the molecule (angstroms) nearest the outer membrane and return the value"
  },

  {
    // transport molecule
    "type": "transport_molecule",
    "message0": "transport nearest molecule via %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "TRANSPORT",
        "options": [
          ["diffusion", "DIFFUSION"],
          ["osmosis", "OSMOSIS"],
          ["facilitated diffusion", "FACILITATED"],
        ]

      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "transport the molecule nearest to the outer membrane via the chosen method"
  },

  {
    // shape match
    "type": "shape_match",
    "message0": "substrate %1 fits enzyme %2 active site",
    "args0": [
      {
        "type": "input_value",
        "name": "SUBSTRATE",
      },
      {
        "type": "input_value",
        "name": "ENZYME",
      },
    ],
    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "return true if the shapes match and false otherwise"
  },

  {
    // catalyze 
    "type": "catalyze",
    "message0": "activate enzyme %1 catalysis with substrate %2",
    "args0": [
      {
        "type": "input_value",
        "name": "ENZYME",
      },
      {
        "type": "input_value",
        "name": "SUBSTRATE",
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "initatiate catalysis of the enzyme with its matching substrate"
  },

  {
    // circle enzyme
    "type": "circle_enzyme",
    "message0": "enzyme: %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/circle_enzyme.png",
        "width": 30,
        "height": 30,
        "alt": "circle"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // square enzyme
    "type": "square_enzyme",
    "message0": "enzyme: %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/square_enzyme.png",
        "width": 30,
        "height": 30,
        "alt": "square"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // triangle enzyme
    "type": "triangle_enzyme",
    "message0": "enzyme: %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/triangle_enzyme.png",
        "width": 30,
        "height": 30,
        "alt": "triangle"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // star enzyme
    "type": "star_enzyme",
    "message0": "enzyme: %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/star_enzyme.png",
        "width": 30,
        "height": 30,
        "alt": "star"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // squiggle enzyme
    "type": "squiggle_enzyme",
    "message0": "enzyme: %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/squiggle_enzyme.png",
        "width": 30,
        "height": 30,
        "alt": "squiggle"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // circle substrate
    "type": "circle_substrate",
    "message0": "substrate: %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/circle_substrate.png",
        "width": 35,
        "height": 35,
        "alt": "circle"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // square substrate
    "type": "square_substrate",
    "message0": "substrate: %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/square_substrate.png",
        "width": 35,
        "height": 35,
        "alt": "square"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // triangle substrate
    "type": "triangle_substrate",
    "message0": "substrate: %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/triangle_substrate.png",
        "width": 35,
        "height": 35,
        "alt": "triangle"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // star substrate
    "type": "star_substrate",
    "message0": "substrate: %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/star_substrate.png",
        "width": 35,
        "height": 35,
        "alt": "star"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // squiggle substrate
    "type": "squiggle_substrate",
    "message0": "substrate: %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/squiggle_substrate.png",
        "width": 35,
        "height": 35,
        "alt": "squiggle"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // crawl up/down/left/right
    "type": "crawl_specified_direction",
    "message0": "crawl %1 ° by %2 μm",
    "args0": [
      {
        "type": "input_value",
        "name": "DIRECTION",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "DELTA",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "crawl in the specfied direction for the specified distance, assumes the cell is on the ECM or some other adhesive surface",
  },

  {
    // swim up/down/left/right
    "type": "swim_specified_direction",
    "message0": "swim %1 ° by %2 μm",
    "args0": [
      {
        "type": "input_value",
        "name": "DIRECTION",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "DELTA",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "swim in the specfied direction for the specified distance, assumes the cell is afloat in a fluid",
  },

  {
    // sense surface
    "type": "sense_surface",
    "message0": "the surface %1 ° is fluid",
    "args0": [
      {
        "type": "input_value",
        "name": "DIRECTION",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "detect whether the surface in the specified direction is a fluid (return true) or not a fluid (false)",
  },

  {
    // activated receptors
    "type": "activated_receptors",
    "message0": "locations of activated receptors",
    "args0": [
    ],
    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "return the angle (in degrees) representing the activated receptors' location on the cell",
  },

  {
    // flagella run
    "type": "flagella_run",
    "message0": "run flagella at %1 °",
    "args0": [
      {
        "type": "input_value",
        "name": "ANGLE",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "rotate the flagella counterclockwise to swim in the designated direction",
  },

  {
    // flagella tumble
    "type": "flagella_tumble",
    "message0": "tumble flagella",
    "args0": [
    ],
    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "rotate the flagella clockwise to randomly reorient the cell and return this angle (°)",
  },



  {
    // choose trait displayed
    "type": "choose_trait",
    "message0": "trait %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "TRAIT",
        "options": [
          [ "hairline" , "HAIRLINE"],
          [ "dimples"  , "DIMPLES"],
          [ "freckles" , "FRECKLES"],
          [ "hairtype" , "HAIRTYPE"],
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select the trait to be displayed"
  },

  {
    // choose genetic disorder displayed
    "type": "choose_genetic_disorder",
    "message0": "disorder %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "DISORDER",
        "options": [
          [ "pku" , "PKU"],
          [ "sickle cell"  , "SICKLECELL"],
          [ "cystic fibrosis" , "CF"],
          [ "huntingtons" , "HUNTINGTONS"],
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select the genetic disorder to be displayed"
  },
  
  {
    //hairline
    "type": "hairline",
    "message0": "hairline",
    "output": null,
    "colour": 230,
    "tooltip": "",
  },

 {
   //hair type
   "type": "hairtype",
   "message0": "hair type",
   "output": null,
   "colour": 230,
   "tooltip": ""
 },
 
 {
   //freckles
   "type": "freckles",
   "message0": "freckles",
   "output": null,
   "colour": 230,
   "tooltip": ""
 },

 {
   //dimples
   "type": "dimples",
   "message0": "dimples",
   "output": null,
   "colour": 230,
   "tooltip": ""
 },

  {
    "type": "choose_nonmendelian_trait",
    "message0": "choose non-mendelian trait looked at %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "nonmendel",
        "options": [
          [
            "eye color",
            "EYECOLOR"
          ],
          [
            "hair color",
            "HAIRCOLOR"
          ],
          [
            "blood type",
            "BLOODTYPE"
          ]
        ]
      }
    ],
    "output": "Array",
    "colour": 150,
    "tooltip": "Use the drop down to determine which trait you want to look at",
    "helpUrl": ""
  },

  {
  // choose blood type displayed
    "type": "choose_blood_type",
    "message0": "blood type %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "BLOODTYPE",
        "options": [
          [{ "src": "./img/oneg.png", "width": 35, "height": 35, "alt": "oneg" }, "ONEG"],
          [{ "src": "./img/opos.png", "width": 35, "height": 35, "alt": "opos" }, "OPOS"],
          [{ "src": "./img/aneg.png", "width": 35, "height": 35, "alt": "aneg" }, "ANEG"],
          [{ "src": "./img/apos.png", "width": 35, "height": 35, "alt": "apos" }, "APOS"],
          [{ "src": "./img/bneg.png", "width": 35, "height": 35, "alt": "bneg" }, "BNEG"],
          [{ "src": "./img/bpos.png", "width": 35, "height": 35, "alt": "bpos" }, "BPOS"],
          [{ "src": "./img/abneg.png", "width": 35, "height": 35, "alt": "abneg" }, "ABNEG"],
          [{ "src": "./img/abpos.png", "width": 35, "height": 35, "alt": "abpos" }, "ABPOS"],
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select the trait to be displayed"
  },

  {
    // amino acids
    "type": "codons",
    "message0": "map codons to amino acids %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30 %31 %32 %33 %34 %35 %36 %37 %38 %39 %40 %41 %42 %43 %44 %45 %46 %47 %48 %49",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "NAME1",
        "text": "UU$"
      },
      {
        "type": "input_value",
        "name": "NUMBER1",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME2",
        "text": "UU&"
      },
      {
        "type": "input_value",
        "name": "NUMBER2",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME3",
        "text": "CU*"
      },
      {
        "type": "input_value",
        "name": "NUMBER3",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME4",
        "text": "AU$"
      },
      {
        "type": "input_value",
        "name": "NUMBER4",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME5",
        "text": "AUA"
      },
      {
        "type": "input_value",
        "name": "NUMBER5",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME6",
        "text": "AUG"
      },
      {
        "type": "input_value",
        "name": "NUMBER6",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME7",
        "text": "GU*"
      },
      {
        "type": "input_value",
        "name": "NUMBER7",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME8",
        "text": "UC*"
      },
      {
        "type": "input_value",
        "name": "NUMBER8",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME9",
        "text": "CC*"
      },
      {
        "type": "input_value",
        "name": "NUMBER9",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME10",
        "text": "AC*"
      },
      {
        "type": "input_value",
        "name": "NUMBER10",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME11",
        "text": "GC*"
      },
      {
        "type": "input_value",
        "name": "NUMBER11",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME12",
        "text": "UA$"
      },
      {
        "type": "input_value",
        "name": "NUMBER12",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME13",
        "text": "CA$"
      },
      {
        "type": "input_value",
        "name": "NUMBER13",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME14",
        "text": "CA&"
      },
      {
        "type": "input_value",
        "name": "NUMBER14",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME15",
        "text": "AA$"
      },
      {
        "type": "input_value",
        "name": "NUMBER15",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME16",
        "text": "AA&"
      },
      {
        "type": "input_value",
        "name": "NUMBER16",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME17",
        "text": "GA$"
      },
      {
        "type": "input_value",
        "name": "NUMBER17",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME18",
        "text": "GA&"
      },
      {
        "type": "input_value",
        "name": "NUMBER18",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME19",
        "text": "UG$"
      },
      {
        "type": "input_value",
        "name": "NUMBER19",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME20",
        "text": "UGG"
      },
      {
        "type": "input_value",
        "name": "NUMBER20",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME21",
        "text": "CG*"
      },
      {
        "type": "input_value",
        "name": "NUMBER21",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME22",
        "text": "AG$"
      },
      {
        "type": "input_value",
        "name": "NUMBER22",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME23",
        "text": "AG&"
      },
      {
        "type": "input_value",
        "name": "NUMBER23",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "field_input",
        "name": "NAME24",
        "text": "GG*"
      },
      {
        "type": "input_value",
        "name": "NUMBER24",
        "check": "String",
        "align": "RIGHT"
      },
    ],
    "output": null,
    "inputsInline": false,
    "colour": color,
    "helpUrl": null,
    "tooltip": "amino acid keys that map to codons to encode for a protein where '*' represents a wobble of all 4 bases, '$' represents a UC wobble, and '&' represents a AG wobble"
  },

  {
    // light reactions
    "type": "light_reactions",
    "message0": "light reactions with photons at %1 nm",
    "args0": [
      {
        "type": "input_value",
        "name": "wavelength",
        "check": "Number",
      },
    ],
    "inputsInline": true,
    "previousStatement": null, 
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "try to undergo the light reactions of photosynthesis at the given wavelength of light; if the photon was energized enough, then ATP was made for the dark reactions",
  },

  {
    // dark reactions
    "type": "dark_reactions",
    "message0": "dark reactions",
    "args0": [
    ],
    "inputsInline": true,
    "previousStatement": null, 
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "try to undergo the dark reactions of photosynthesis; if a sugar product is made, it can be detected",
  },

  {
    "type": "recessive_or_dominant",
    "message0": "set trait to %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "recessive",
            "RECESSIVE"
          ],
          [
            "dominant",
            "DOMINANT"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": "decide whether your trait will become dominant or recessive"
  },

  {
    "type": "carrier_status",
    "message0": "carrier status %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "carrier",
            "CARRIER"
          ],
          [
            "noncarrier",
            "NONCARRIER"
          ]
        ,
        [
          "affected",
          "AFFECTED"
        ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": "determines if offspring will become a carrier o noncarrier"
  },

  {
    "type": "reproduction",
    "message0": "Reproduction Between %1 & %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "ParentOne",
        "variable": "item"
      },
      {
        "type": "field_variable",
        "name": "ParentTwo",
        "variable": "item"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "select the parents you want to reproduce in order to determine a potential child's bloodtype",
    "helpUrl": ""
  },

  {
    // choose trait displayed
    "type": "test",
    "message0": "choose the trait displayed %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "TEST",
        "options": [
          [{ "src": "./img/hairline.png", "width": 35, "height": 35, "alt": "hairline" }, "T"],
          [{ "src": "./img/dimples.png", "width": 35, "height": 35, "alt": "dimples" }, "TE"],
          [{ "src": "./img/freckles.png", "width": 35, "height": 35, "alt": "freckles" }, "TES"],
          [{ "src": "./img/hairtype.png", "width": 35, "height": 35, "alt": "hairtype" }, "TEST"],
        ]

      },
    ],
    "output": null,
    "colour": color,
    "extensions": ["parent_tooltip_when_inline"],
    "tooltip": "select the trait to be displayed"
  },

  {
    // binding_site
    "type": "binding_site",
    "message0": "binding site %1",
    "args0": [
      {
        "type": "input_value",
        "name": "MOLECULE",
      },
    ],
    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "return a number that signifies the shape of either the anitgen epitope or the antigen binding site on the variable domain of the antibody (returns 1-5)"
  },

  {
    // antibody 1
    "type": "antibody1",
    "message0": "antibody: %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/antibody1.png",
        "width": 30,
        "height": 30,
        "alt": "1"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // antibody 2
    "type": "antibody2",
    "message0": "antibody: %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/antibody2.png",
        "width": 30,
        "height": 30,
        "alt": "2"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },


  {
    // antibody 3
    "type": "antibody3",
    "message0": "antibody: %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/antibody3.png",
        "width": 30,
        "height": 30,
        "alt": "3"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // antibody 4
    "type": "antibody4",
    "message0": "antibody: %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/antibody4.png",
        "width": 30,
        "height": 30,
        "alt": "4"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },
  
  {
    // antibody 5
    "type": "antibody5",
    "message0": "antibody: %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/antibody5.png",
        "width": 30,
        "height": 30,
        "alt": "5"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // antigen 1
    "type": "antigen1",
    "message0": "fungal infection %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/antigen1.png",
        "width": 35,
        "height": 35,
        "alt": "1"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // antigen 2
    "type": "antigen2",
    "message0": "common cold %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/antigen2.png",
        "width": 35,
        "height": 35,
        "alt": "2"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // antigen 3
    "type": "antigen3",
    "message0": "blood cell %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/antigen3.png",
        "width": 35,
        "height": 35,
        "alt": "3"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // antigen 4
    "type": "antigen4",
    "message0": "HIV %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/antigen4.png",
        "width": 35,
        "height": 35,
        "alt": "4"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // antigen 5
    "type": "antigen5",
    "message0": "flu %1",
    "args0": [
      {
        "type": "field_image",
        "src": "./img/antigen5.png",
        "width": 35,
        "height": 35,
        "alt": "5"
      }
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null
  },

  {
    // fungal immune response
    "type": "fungal_response",
    "message0": "fungal immune response from antibody %1 anitgen %2 complex",
    "args0": [
      {
        "type": "input_value",
        "name": "ANTIBODY",
      },
      {
        "type": "input_value",
        "name": "ANTIGEN",
      },
    ],

    "inputsInline": true,
    "previousStatement": null, 
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "mount an attack on the fungal infection"
  },

  {
    // cold immune response
    "type": "cold_response",
    "message0": "cold immune response from antibody %1 anitgen %2 complex",
    "args0": [
      {
        "type": "input_value",
        "name": "ANTIBODY",
      },
      {
        "type": "input_value",
        "name": "ANTIGEN",
      },
    ],

    "inputsInline": true,
    "previousStatement": null, 
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "mount an attack on the cold"
  },

  {
    // autoimmune
    "type": "autoimmune_response",
    "message0": "autoimmune response from antibody %1 anitgen %2 complex",
    "args0": [
      {
        "type": "input_value",
        "name": "ANTIBODY",
      },
      {
        "type": "input_value",
        "name": "ANTIGEN",
      },
    ],

    "inputsInline": true,
    "previousStatement": null, 
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "mount an attack on the autoimmune response"
  },

  {
    // HIV
    "type": "HIV_response",
    "message0": "HIV immune response from antibody %1 anitgen %2 complex",
    "args0": [
      {
        "type": "input_value",
        "name": "ANTIBODY",
      },
      {
        "type": "input_value",
        "name": "ANTIGEN",
      },
    ],

    "inputsInline": true,
    "previousStatement": null, 
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "mount an attack on the HIV viral infection"
  },

  {
    // flu
    "type": "flu_response",
    "message0": "flu immune response from antibody %1 anitgen %2 complex",
    "args0": [
      {
        "type": "input_value",
        "name": "ANTIBODY",
      },
      {
        "type": "input_value",
        "name": "ANTIGEN",
      },
    ],

    "inputsInline": true,
    "previousStatement": null, 
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "mount an attack on the flu virus"
  },

  {
    // sense signal
    "type": "sense_signal",
    "message0": "sense signal",
    "args0": [
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "sense a signal from a sensory organ and return that signal to the nearest afferent neuron"
  },

  {
    // transmit signal
    "type": "transmit_signal",
    "message0": "transmit signal from neuron %1",
    "args0": [
      {
        "type": "input_value",
        "name": "FROM",
      },
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "transmit the signal from neuron to neruon"
  },

  {
    // process signal
    "type": "process_signal",
    "message0": "process signal %1",
    "args0": [
      {
        "type": "input_value",
        "name": "AFFERENT",
      },
    ],

    "inputsInline": true,
    "output": null, 
    "colour": color,
    "helpUrl": null,
    "tooltip": "process the signal in the brain from the nearest afferent neurone and return the response to the nearest efferent neuron"
  },

  {
    // repsonse signal
    "type": "response_signal",
    "message0": "respond to signal %1",
    "args0": [
      {
        "type": "input_value",
        "name": "RESPONSE",
      },
    ],

    "inputsInline": true,
    "previousStatement": null, 
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "respond to the processed signal from the nearest efferent neuron"
  },

  {
    // detect damage
    "type": "detect_damage",
    "message0": "detect damage",
    "args0": [
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "detect damage and return either 'heat', 'toxins', or 'irreversible' to describe the injury inflicted"
  },

  {
    // fix damage
    "type": "fix_damage",
    "message0": "fix damage with %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "FIX",
        "options": [
          [
            "heat shock proteins",
            "HEAT"
          ],
          [
            "stress proteins/pathways",
            "TOXINS"
          ],
          [
            "apoptosis",
            "IRREVERSIBLE"
          ]
        ]
      }
    ],

    "inputsInline": true,
    "previousStatement": null, 
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "detect damage and return either 'heat', 'toxin', or 'irreversible' to describe the injury inflicted"
  },

  {
    // alive
    "type": "alive",
    "message0": "cell is alive",
    "args0": [
    ],

    "inputsInline": true,
    "output": null, 
    "colour": color,
    "helpUrl": null,
    "tooltip": "return true if the cell is alive and false otherwise"
  },

  {
    // detect fitness
    "type": "detect_fitness",
    "message0": "detect fitness of nearby cell(s)",
    "args0": [
    ],

    "inputsInline": true,
    "output": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "detect the fitness of nearby cell(s) and return a number between 1 and 10 that signifies the collective cellular fitness (10 being most fit and 1 being least fit)"
  },

  {
    // collective migration
    "type": "collective_migration",
    "message0": "collective migration",
    "args0": [
    ],

    "inputsInline": true,
    "previousStatement": null, 
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "migrate collectively with any nearby cells"
  },

  {
    // engulfing
    "type": "engulf",
    "message0": "engulf nearest cell(s)",
    "args0": [
    ],

    "inputsInline": true,
    "previousStatement": null, 
    "nextStatement": null,
    "colour": color,
    "helpUrl": null,
    "tooltip": "outcompete and engulf nearby cell(s)"
  },
  
  {
    "type": "display_ps",
    "message0": "display punnet square",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 135,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    //rh positive
    "type": "positive",
    "message0": "rH positive",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    //rh negative
    "type": "negative",
    "message0": "rH negative",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    //a blood type
    "type": "a_type",
    "message0": "type A",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    //b blood type
    "type": "bgir_type",
    "message0": "type B",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    //ab type
    "type": "ab_type",
    "message0": "type AB",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    //o type
    "type": "o_type",
    "message0": "type O",
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },


  {
    "type": "background_query",
    "message0": "Current Background Color %1",
    "args0": [
      {
        "type": "input_value",
        "name": "BGCOLOR"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 260,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "grey_background",
    "message0": "%1",
    "args0": [
      {
        "type": "field_colour",
        "name": "GREYBG",
        "colour": "#727272"
      }
    ],
    "output": null,
    "colour": 150,
    "tooltip": "do not change the preset color, it won't render and then we all have issues to deal with",
    "helpUrl": ""
  },

  {
    "type": "white_background",
    "message0": "%1",
    "args0": [
      {
        "type": "field_colour",
        "name": "WHITEBG",
        "colour": "#ffffff"
      }
    ],
    "output": null,
    "colour": 150,
    "tooltip": "do not change the preset color, it won't render and then we all have issues to deal with",
    "helpUrl": ""
  },


  {"type": "eat_grey_moths",
  "message0": "eat the %1 moths!",
  "args0": [
    {
      "type": "field_colour",
      "name": "greymoth",
      "colour": "#727272"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "do not change the preset color, it won't render and then we all have issues to deal with",
  "helpUrl": ""
},


{"type": "eat_white_moths",
"message0": "eat the %1 moths!",
"args0": [
  {
    "type": "field_colour",
    "name": "whitemoth",
    "colour": "#ffffff"
  }
],
"previousStatement": null,
"nextStatement": null,
"colour": 230,
"tooltip": "do not change the preset color, it won't render and then we all have issues to deal with",
"helpUrl": ""
},

{
  "type": "eat_moths",
  "message0": "eat all the moths!",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpURL": ""
},


{
  "type": "change_background",
"message0": "change the background color to  %1",
"args0": [
  {
    "type": "input_value",
    "name": "CHANGEBG"
  }
],
"inputsInline": true,
"previousStatement": null,
"nextStatement": null,
"colour": 290,
"tooltip": "",
"helpUrl": ""
}

]);

// switch block that i found online lol
// link: https://groups.google.com/forum/#!topic/blockly/djhO2jUb0Xs
Blockly.Blocks['switch_case'] = {
  init: function() {
    this.setColour(210);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendValueInput('CONDITION')
        .appendField('the case is');
    this.appendValueInput('CASECONDITION0')
        .appendField('in case of');
    this.appendStatementInput('CASE0')
        .appendField('do');
    this.setMutator(new Blockly.Mutator(['case_incaseof','case_default']));
    this.setTooltip('Does something if the condition is true. If there isn\'t a matching case the default function will be executed.');
    this.caseCount_ = 0;
    this.defaultCount_ = 0;
  },

  mutationToDom: function() {
    if(!this.caseCount_ && !this.defaultCount_) {
        return null;
    }
    var container = document.createElement('mutation');
    if (this.caseCount_) {
        container.setAttribute('case', this.caseCount_);
    }
    if (this.defaultCount_) {
        container.setAttribute('default', 1);
    }
    return container;
  },

  domToMutation: function(xmlElement) {
    this.caseCount_ = parseInt(xmlElement.getAttribute('case'), 10);
    this.defaultCount_ = parseInt(xmlElement.getAttribute('default'), 10);
    for (var x = 1; x <= this.caseCount_; x++) {
        this.appendValueInput('CASECONDITION' + x)
            .appendField('in case of');
        this.appendStatementInput('CASE' + x)
            .appendField('do');
    }
    if (this.defaultCount_) {
        this.appendStatementInput('ONDEFAULT')
            .appendField('default');
    }
  },

  decompose: function(workspace) {
    var containerBlock = Blockly.Block.obtain(workspace, 'control_case');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 1; x <= this.caseCount_; x++) {
        var caseBlock = Blockly.Block.obtain(workspace, 'case_incaseof');
        caseBlock.initSvg();
        connection.connect(caseBlock.previousConnection);
        connection = caseBlock.nextConnection;
    }
    if(this.defaultCount_) {
        var defaultBlock = Blockly.Block.obtain(workspace, 'case_default');
        defaultBlock.initSvg();
        connection.connect(defaultBlock.previousConnection);
    }
    return containerBlock;
  },

  compose: function(containerBlock) {
    //Disconnect all input blocks and remove all inputs.
    if (this.defaultCount_) {
        this.removeInput('ONDEFAULT');
    }
    this.defaultCount_ = 0;
    for (var x = this.caseCount_; x > 0; x--) {
        this.removeInput('CASECONDITION' + x);
        this.removeInput('CASE' + x);
    }
    this.caseCount_ = 0;
    var caseBlock = containerBlock.getInputTargetBlock('STACK');
    while (caseBlock) {
        switch(caseBlock.type) {
            case 'case_incaseof':
                this.caseCount_++;
                var caseconditionInput = this.appendValueInput('CASECONDITION' + this.caseCount_)
                                             .appendField('in case of');   
                var caseInput = this.appendStatementInput('CASE' + this.caseCount_)
                                    .appendField('do');
                if (caseBlock.valueConnection_) {
                    caseconditionInput.connection.connect(caseBlock.valueConnection_);
                }
                if (caseBlock.statementConnection_) {
                    caseInput.connection.connect(caseBlock.statementConnection_);
                }
                break;
            case 'case_default':
                this.defaultCount_++;
                var defaultInput = this.appendStatementInput('ONDEFAULT')
                                       .appendField('default');
                if(caseBlock.statementConnection_) {
                    defaultInput.connection.connect(caseBlock.statementConnection_);
                }
                break;
            default:
                throw 'Unknown block type.';
        }
        caseBlock = caseBlock.nextConnection &&
                  caseBlock.nextConnection.targetBlock();
    }
  },

  saveConnections: function(containerBlock) {
    var caseBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 1;
    while (caseBlock) {
        switch (caseBlock.type) {
            case'case_incaseof':
                var caseconditionInput = this.getInput('CASECONDITION' + x);  
                var caseInput = this.getInput('CASE' + x);
                caseBlock.valueConnection_ = caseconditionInput && caseconditionInput.connection.targetConnection;
                caseBlock.statementConnection_ = caseInput && caseInput.connection.targetConnection;
                x++;
                break;
            case'case_default':
                var defaultInput = this.getInput('ONDEFAULT');
                caseBlock.satementConnection_ = defaultInput && defaultInput.connection.targetConnection;
                break;
            default:
                throw 'Unknown block type';
        }
        caseBlock = caseBlock.nextConnection &&
                    caseBlock.nextConnection.targetBlock();
    }
  }
};

Blockly.Blocks['control_case'] = {
  init: function() {
    this.setColour(180);
    this.appendDummyInput()
        .appendField('the case is');
    this.appendStatementInput('STACK');
    this.setTooltip('--Placeholder--');
    this.contextMenu = false;
  }
};

Blockly.Blocks['case_incaseof'] = {
  init: function() {
    this.setColour(180);
    this.appendDummyInput()
        .appendField('in case of');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('--Placeholder--');
    this.contextMenu = false;
  }
};

Blockly.Blocks['case_default'] = {
  init: function() {
      this.setColour(180);
      this.appendDummyInput()
          .appendField('default');
      this.setPreviousStatement(true);
      this.setNextStatement(false);
      this.setTooltip('This function will run if there aren\'t any matching cases.');
      this.contextMenu = false;
  }
};