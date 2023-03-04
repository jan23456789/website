Blockly.Blocks['bool'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["true","true"], ["false","false"]]), "BOOLEAN");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour('%{BKY_TEXTS_HUE}');
  }
};

Blockly.JavaScript['bool'] = function(block) {
  var dropdown_boolean = block.getFieldValue('BOOLEAN');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_boolean;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};