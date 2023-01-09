Blockly.Blocks['select'] = {
  init: function() {
    this.appendStatementInput("SELECT")
        .setCheck("table")
        .appendField("SELECT")
        .appendField(new Blockly.FieldDropdown([["\u2009",""], ["COUNT","COUNT"], ["AVG","AVERAGE"], ["SUM","SUM"]]), "SYNTAX")
        .appendField(new Blockly.FieldDropdown([["\u2009",""], ["DISTINCT","DISTINCT"]]), "DISTINCT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(180);
 this.setTooltip("To be defined");
 this.setHelpUrl("To be defined");
  }
};

Blockly.JavaScript['select'] = function(block) {
  let dropdown_syntax = block.getFieldValue('SYNTAX');
  let dropdown_distinct = block.getFieldValue('DISTINCT');
  let statements_select = Blockly.JavaScript.statementToCode(block, 'SELECT');
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  // Code assembly
  let code = 'SELECT ';
  code += dropdown_syntax+' '+dropdown_distinct+' '+statements_select+'<br>';
  return code;
};