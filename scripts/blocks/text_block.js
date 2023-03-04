Blockly.Blocks['text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"")
        .appendField(new Blockly.FieldTextInput(""), "text_input")
        .appendField("\"");
    this.setInputsInline(false);
    this.setOutput(true, "String");
    this.setColour('%{BKY_TEXTS_HUE}');
  }
};

Blockly.JavaScript['text'] = function(block) {
  // var text_text_input = block.getFieldValue('text_input');
  // TODO: Assemble JavaScript into code variable.
  var code = "\"" + (block.getFieldValue('text_input')) + "\"";
  return code;
};