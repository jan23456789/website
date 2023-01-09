let RecordArray = [['Choose a Field...','PLEASESELECT']];

Blockly.Blocks['column'] = {
  init: function() {
    this.appendValueInput("COLUMN")
        .setCheck("alias")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown(RecordArray), "COLUMN");
    this.setInputsInline(false);
    this.setOutput(true, "column"); 
    this.setColour(230);
    this.setTooltip("To be defined");
    this.setHelpUrl("To be defined");
  },
};

Blockly.JavaScript['column'] = function(block) {
  let dropdown_column = block.getFieldValue('COLUMN');
  let value_column = Blockly.JavaScript.valueToCode(block, 'COLUMN', Blockly.JavaScript.ORDER_ATOMIC);
  let code = '.'+dropdown_column+' '+value_column;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

