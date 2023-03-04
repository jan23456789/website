Blockly.Blocks['column'] = {
  init: function() {
    this.appendDummyInput("COLUMN")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([['Mit Tabellen Block verbinden','']]), "COLUMN");
    this.setOutput(true, "column"); 
    this.setColour('%{BKY_LISTS_HUE}');
  },
};

Blockly.JavaScript['column'] = function(block) {
  let dropdown_column = block.getFieldValue('COLUMN');
  let code = '.'+dropdown_column;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

