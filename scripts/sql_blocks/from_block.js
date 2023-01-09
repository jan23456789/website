Blockly.Blocks['from'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck("table")
        .appendField("FROM");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(230);
 this.setTooltip("To be defined");
 this.setHelpUrl("To be defined");
  }
};

Blockly.JavaScript['from'] = function(block) {
  let statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  let code = 'FROM '+statements_name+'<br>';
  return code;
};
