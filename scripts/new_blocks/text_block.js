Blockly.Blocks['text_'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"")
        .appendField(new Blockly.FieldTextInput(""), "text_input")
        .appendField("\"");
    this.setInputsInline(false);
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['text_'] = function(block) {
  // var text_text_input = block.getFieldValue('text_input');
  // TODO: Assemble JavaScript into code variable.
  var code = "\"" + (block.getFieldValue('text_input')) + "\"";
  if(code.match(/create/i) || code.match(/alter/i) || code.match(/index/i) || code.match(/drop/i) || code.match(/show/i) || code.match(/execute/i) || code.match(/insert/i) || code.match(/update/i) || code.match(/delete/i) || code.match(/file/i) || code.match(/grant/i) /*|| code.match(/super/i)*/ || code.match(/process/i) || code.match(/shutdown/i) || code.match(/reload/i) || code.match(/lock/i) || code.match(/replication/i)){
      code = '';
  }
  if(code.match(/Ä/g)){
      code = code.replace(/Ä/g, 'Ae');
  }
  if(code.match(/ä/g)){
      code = code.replace(/ä/g, 'ae');
  }
  if(code.match(/Ö/g)){
      code = code.replace(/Ö/g, 'Oe');
  }
  if(code.match(/ö/g)){
      code = code.replace(/ö/g, 'oe');
  }
  if(code.match(/Ü/g)){
      code = code.replace(/Ü/g, 'Ue');
  }
  if(code.match(/ü/g)){
      code = code.replace(/ü/g, 'ue');
  }
  var countEscape1 = (code.match(/"/g) || []).length;
  var countEscape2 = (code.match(/'/g) || []).length;
  if(countEscape1%2 != 0 || countEscape2%2 != 0 || code.includes('\u005C') || code.includes('\u002F')){
      code = '';
  }

  var chosenOrderfI = '';
  if(this.getInput('listOrder')){
      chosenOrderfI = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('orderfI'));
      if(chosenOrderfI == 'BLANK'){
          chosenOrderfI = '';
      }
      else{
          code = code + ' ' + chosenOrderfI;
      }
  }

  return code;
};