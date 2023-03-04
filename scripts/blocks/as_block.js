Blockly.defineBlocksWithJsonArray([
    {
        "type": "as",
        "message0": "%1 AS %2",
        "args0": [
            {
                "type": "input_value",
                "name": "as_oldName",
                "check": ["aggregate_min", "aggregate_max", "aggregate_avg", "aggregate_count", "aggregate_sum", "CONDITIONCHOOSER", "String", "TABLE"]
            },
            {
                "type": "input_value",
                "name": "as_newName",
                "check": ["String"]
            }
        ],
        "inputsInline": true,
        "output": 'AS',
        "colour": '%{BKY_LISTS_HUE}',
        "helpUrl": "https://www.w3schools.com/sql/sql_alias.asp",
        'extensions': 'assExtensions'
    },
]);//AS-Modifier
Blockly.Extensions.register('assExtensions', function(){
    this.setOnChange(function (changeEvent) {
        var parent = this.getSurroundParent();
        if(parent != null){
            if(parent.toDevString().includes('select') || parent.toDevString().includes('join')){
                this.getInput('as_oldName').setCheck("TABLE");
            }
            else{
                this.getInput('as_oldName').setCheck(["String", "aggregate_min", "aggregate_max", "aggregate_avg", "aggregate_count", "aggregate_sum", "CONDITIONCHOOSER"]);
            }
        }
    })
});
Blockly.JavaScript['as'] = function(block) {
    var argumentOld = Blockly.JavaScript.statementToCode(block, 'as_oldName');
    var argumentNew = Blockly.JavaScript.statementToCode(block, 'as_newName');
    var code = argumentOld + ' as ' + argumentNew;
    return code;
};
