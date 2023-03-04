Blockly.defineBlocksWithJsonArray([
    {
        "type": "not",//NOT-BLOCK
        "message0": "NOT %1",//Text on Block (First Input) --> messages need to be numbereds
        "args0": [
            {
                "type": "input_value",//FirstInput
                "name": "Con0",//name of FirstInput
                "check": ["OR", "AND", 'COMPARE', 'BETWEEN']//Acceptance Condition for following Blocks to be combined
            }
        ],
        "output": "NOT",//Condition of this Block defining, how this Block could be combined to previous Blocks
        "colour": '%{BKY_LOGIC_HUE}',
        "helpUrl": "https://www.w3schools.com/sql/sql_and_or.asp",
    },
]);// NOT-Block in Workspace
Blockly.JavaScript['not'] = function(block) {
    var code = 'not ' + Blockly.JavaScript.statementToCode(block, 'Con0');
    return code;
};//CodeGenerator NOT
