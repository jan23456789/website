function showCode() {
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  return code.replace(/  +/g, ' ');

};

var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
let workspace = Blockly.inject(blocklyDiv, 
                              {
                                media: 'https://unpkg.com/blockly/media/',
                                toolbox: document.getElementById('toolbox'),
                                scrollbars: false,
                                trashcan: true,
                                grid: {
                                        spacing: 40,
                                        length: 2,
                                        colour: '#000000',
                                        snap: false
                                      },
                              });
var onresize = function(e) {
  var element = blocklyArea;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();

function show_Code(){
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  let code = showCode()
  document.getElementById('commands').innerHTML = code;
  editor.setValue(showCode());
};     

function setToDefault(block,parentblock) {
  block.removeInput('COLUMN');
  block.appendValueInput("COLUMN")
        .setCheck("alias")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([['Choose a Field...','PLEASESELECT']]), "COLUMN");
};

function getAssociatedColumn(block,parent){
  if (!block||!parent) return;
  let parentFieldValue = parent.getFieldValue('TABLE');
  options = fieldMapping[parentFieldValue];
  if (!options) {
  options = [['Choose a Field...','PLEASESELECT']];
  }
  block.removeInput('COLUMN');
  block.appendValueInput("COLUMN")
        .setCheck("alias")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown(options), "COLUMN");
  return;
};

function connectionChangeColumn(event) {
  if (event.type != 'move') return;
  let block = workspace.getBlockById(event.blockId);
  if ((block.type != 'column')||!((event.oldParentId)||(event.newParentId))) return;
  if (event.newParentId) {
    getAssociatedColumn(block,workspace.getBlockById(event.newParentId));
    return;
  }
  setToDefault(block,workspace.getBlockById(event.newParentId));
};

function tableBlockNewValue(event) {
  if (event.type != 'change') return;
  let block = workspace.getBlockById(event.blockId);
  if (block.type != 'table'||event.newValue==event.oldValue) return;
  getAssociatedColumn(block.getChildren(false)[0],block);
};

function onchange(event) {
  connectionChangeColumn(event);
  tableBlockNewValue(event);
  show_Code();
};
workspace.addChangeListener(onchange);
onchange();
