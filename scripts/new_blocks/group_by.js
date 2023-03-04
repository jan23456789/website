Blockly.Blocks['groupby'] = {
    init: function() {
        this.appendValueInput('groupInput')
            .setCheck(['freeinput', "CONDITIONCHOOSER"])
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("GROUP BY ");
        this.setPreviousStatement(true, ['WHERE', 'FROM']);
        this.setNextStatement(true, ['GROUP BY', 'HAVING']);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['groupby'] = function(block) {
    var code = Blockly.JavaScript.statementToCode(block, 'groupInput');
    return 'group by ' + code + ';';
}
