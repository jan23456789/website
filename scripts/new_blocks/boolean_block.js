Blockly.Blocks['bool_dropdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["true","true"], ["false","false"]]), "BOOLEAN");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['bool_dropdown'] = function(block) {
  var dropdown_boolean = block.getFieldValue('BOOLEAN');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_boolean;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};