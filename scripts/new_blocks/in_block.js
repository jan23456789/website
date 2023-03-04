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
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['in'] = function(block) {
//   var value_input_rec = Blockly.JavaScript.valueToCode(block, 'input_rec', Blockly.JavaScript.ORDER_ATOMIC);
//   var dropdown_in = block.getFieldValue('IN');
//   var statements_input_rec_in = Blockly.JavaScript.statementToCode(block, 'input_rec_in');
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };
// Blockly.JavaScript['innifier'] = function(block) {
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