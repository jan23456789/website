Blockly.Blocks['table'] = {
  init: function() {
    this.appendValueInput("TABLE")
        .setCheck(["column", "alias"])
        .appendField(new Blockly.FieldDropdown(getAllRecords()), "TABLE");
    this.setPreviousStatement(true, "table");
    this.setNextStatement(true, "table");
    this.setColour(230);
    this.setTooltip("To be defined");
    this.setHelpUrl("To be defined");
  },
};

Blockly.JavaScript['table'] = function(block) {
  let dropdown_table = block.getFieldValue('TABLE');
  let value_table = Blockly.JavaScript.valueToCode(block, 'TABLE', Blockly.JavaScript.ORDER_ATOMIC);
  // Code assembly
  let code = dropdown_table+value_table;
  return code;
};