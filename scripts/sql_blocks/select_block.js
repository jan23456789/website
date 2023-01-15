Blockly.Blocks['select'] = {
  init: function() {
    this.appendStatementInput("SELECT")
        .setCheck("table")
        .appendField("SELECT")
        .appendField(new Blockly.FieldDropdown([["\u2009",""], ["COUNT"," COUNT("], ["AVG"," AVG("], ["SUM"," SUM("]]), "SYNTAX")
        .appendField(new Blockly.FieldDropdown([["\u2009",""], ["DISTINCT","DISTINCT("]]), "DISTINCT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "statement");
    this.setNextStatement(true, "statement");
    this.setColour(180);
 this.setTooltip("To be defined");
 this.setHelpUrl("To be defined");
  }
};

function setDropdown_Distinct(distinct, syntax) {
  if ((distinct!='')&&(syntax=='')) {
    return(' '+distinct);
  } else {
    return(distinct);
  }
}

Blockly.JavaScript['select'] = function(block) {
  let dropdown_syntax = block.getFieldValue('SYNTAX');
  let dropdown_distinct = block.getFieldValue('DISTINCT');
  let statements_select = Blockly.JavaScript.statementToCode(block, 'SELECT');
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  // Code assembly
  let code = 'SELECT';
  code += dropdown_syntax;
  code += setDropdown_Distinct(dropdown_distinct,dropdown_syntax);
  code += statements_select;
  return code;
};