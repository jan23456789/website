Blockly.Blocks['having'] = {
    init: function() {
        this.appendValueInput('haveInput')
            .setCheck(["COMPARE"])
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("HAVING           ");
        this.setPreviousStatement(true, ['HAVING']);
        this.setNextStatement(true, ['HAVING', 'GROUP BY']);
        this.setColour('%{BKY_LOOPS_HUE}');
        this.setHelpUrl("https://www.w3schools.com/sql/sql_having.asp");
        this.setInputsInline(true);
    }
};
Blockly.JavaScript['having'] = function(block) {
    var code = Blockly.JavaScript.statementToCode(block, 'haveInput');
    return 'having ' + code + ';';
}
