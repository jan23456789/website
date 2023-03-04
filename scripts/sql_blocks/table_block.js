Blockly.Blocks['table'] = {
  init: function() {
    this.appendValueInput("TABLE")
        .setCheck(["column", "alias"])
        .appendField(new Blockly.FieldDropdown(getTables()), "TABLE");
        this.setInputsInline(false);
        this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip("To be defined");
    this.setHelpUrl("To be defined");
  },
};

Blockly.JavaScript['table'] = function(block) {
  let dropdown_table = block.getFieldValue('TABLE');
  let value_table = Blockly.JavaScript.valueToCode(block, 'TABLE', Blockly.JavaScript.ORDER_ADDITION);
  // Code assembly
  let code = dropdown_table+value_table;
  return code;
};