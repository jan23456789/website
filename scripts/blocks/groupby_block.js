Blockly.Blocks['groupby'] = {
    init: function() {
        this.appendValueInput('groupInput')
            .setCheck(['String', "CONDITIONCHOOSER"])
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("GROUP BY ");
        this.setPreviousStatement(true, ['WHERE', 'FROM']);
        this.setNextStatement(true, ['GROUP BY', 'HAVING']);
        this.setColour('%{BKY_LOOPS_HUE}');
        this.setHelpUrl("https://www.w3schools.com/sql/sql_groupby.asp");
    }
};
Blockly.JavaScript['groupby'] = function(block) {
    var code = Blockly.JavaScript.statementToCode(block, 'groupInput');
    return 'group by ' + code + ';';
}
