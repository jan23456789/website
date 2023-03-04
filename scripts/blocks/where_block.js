Blockly.Blocks['where'] = {
    init: function() {
        this.appendValueInput('whereInput')
            .setCheck(['BETWEEN', 'AND', 'OR', 'COMPARE', 'TBALE', 'IN', 'NOT', 'String'])
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("WHERE                 ");
        this.setPreviousStatement(true, ['FROM']);
        this.setNextStatement(true, ['WHERE', 'GROUP BY']);
        this.setColour('%{BKY_LOOPS_HUE}');
        this.setHelpUrl("https://www.w3schools.com/sql/sql_where.asp");
    }
};
Blockly.JavaScript['where'] = function(block) {
    var code = Blockly.JavaScript.statementToCode(block, 'whereInput');
    return 'where ' + code + ';';
}
