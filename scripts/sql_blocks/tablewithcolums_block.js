Blockly.Blocks['tablecolumn'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("alias")
          .appendField(new Blockly.FieldDropdown(getAllRecords()), "TABLE")
          .appendField(new Blockly.FieldLabelSerializable("."), "DOT")
          .appendField(new Blockly.FieldDropdown([["Column 1","COLUMN1"]]), "COLUMN");
      this.setPreviousStatement(true, "table");
      this.setNextStatement(true, "table");
      this.setColour(160);
   this.setTooltip("To be defined");
   this.setHelpUrl("To be defined");
    }
};

Blockly.JavaScript['tablecolumn'] = function(block) {
    let dropdown_table = block.getFieldValue('TABLE');
    let dropdown_column = block.getFieldValue('COLUMN');
    let value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    let code = '...;\n';
    return code;
};

Blockly.Ext