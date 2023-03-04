Blockly.Blocks['in'] = {
  init: function() {
    this.appendValueInput("input_rec1")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_CENTRE);
    this.appendStatementInput("input_rec2")
        .setCheck("String")
        .appendField(new Blockly.FieldDropdown([["IN","IN"], ["NOT IN","NOT IN"]]), "IN");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('%{BKY_LOGIC_HUE}');
 this.setHelpUrl("https://www.w3schools.com/sql/sql_in.asp");
  }
};

Blockly.JavaScript['in'] = function(block) {
  var OPERATORS = {
      'I': 'IN',
      'NI': 'NOT IN'
  };
  var operator = block.getFieldValue('IN');
  var argument0 = Blockly.JavaScript.statementToCode(block, 'input_rec1');
  var argument1 = Blockly.JavaScript.statementToCode(block, 'input_rec2');
  if(operator == 'IN' || operator == 'NOT IN'){
      if(argument1.includes(';')){
          if(argument1.includes(';SELECT')){
              argument1 = argument1.replace(/;SELECT/g, '<BR> union <BR>select');
          }
          argument1 = argument1.replace(/;/g, ' ');
      }
      argument1 = '(' + argument1 + ')';
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return code;
};