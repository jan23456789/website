Blockly.Blocks['integer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, -2147483647, 2147483647), "INT");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour('%{BKY_TEXTS_HUE}');
  }
};

Blockly.JavaScript['integer'] = function(block) {
  var code = block.getFieldValue('INT').toString();
  return code;
};