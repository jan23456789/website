Blockly.Blocks['alias'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("AS")
        .appendField(new Blockly.FieldTextInput("alias"), "ALIAS");
    this.setInputsInline(false);
    this.setOutput(true, "alias");
    this.setColour(160);
 this.setTooltip("To be Defined");
 this.setHelpUrl("To be Defined");
  }
};

Blockly.JavaScript['alias'] = function(block) {
  let text_alias = block.getFieldValue('ALIAS');
  // TODO: Assemble JavaScript into code variable.test
  let code = 'AS \''+text_alias+'\'';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
