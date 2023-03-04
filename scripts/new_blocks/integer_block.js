Blockly.Blocks['integer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, -2147483647, 2147483647), "integer");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['integer'] = function(block) {
  var code = parseFloat(block.getFieldValue('NUM'));
  code = '' + code;
  return code;
};