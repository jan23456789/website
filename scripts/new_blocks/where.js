Blockly.Blocks['where'] = {
    init: function() {
        this.appendValueInput('whereInput')
            .setCheck(['BETWEEN', 'AND', 'OR', 'COMPARE', 'NULLIFIER', 'INNIFIER', 'NOT', 'freeinput'])
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("WHERE                 ");
        this.setPreviousStatement(true, ['FROM']);
        this.setNextStatement(true, ['WHERE', 'GROUP BY']);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['where'] = function(block) {
    var code = Blockly.JavaScript.statementToCode(block, 'whereInput');
    return 'where ' + code + ';';
}
