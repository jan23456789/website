// Initalize workspace and add resize event
var blocklyArea = document.getElementById("blocklyArea");
var blocklyDiv = document.getElementById("blocklyDiv");
let workspace = Blockly.inject(blocklyDiv, 
                              {
                                media: "https://unpkg.com/blockly/media/",
                                toolbox: document.getElementById("toolbox"),
                                scrollbars: false,
                                trashcan: true,
                                grid: {
                                        spacing: 40,
                                        length: 2,
                                        colour: "#000000",
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
  blocklyDiv.style.left = x + "px";
  blocklyDiv.style.top = y + "px";
  blocklyDiv.style.width = blocklyArea.offsetWidth + "px";
  blocklyDiv.style.height = blocklyArea.offsetHeight + "px";
  Blockly.svgResize(workspace);
};
window.addEventListener("resize", onresize, false);
onresize();

// Return all code generated by blocks in the workspace
function showCode() {
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  return code.replace(/  +/g, " ");
};

// Fill editor with code generated by all Blocks in the workspace
function show_Code(){
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  editor.setValue(showCode());
};     

// Set dropdown of the column block with a given list of options (only accepts blocks of type "column")
function setColumnDropdown(block,options) {
  if (block.type == "column") {
    block.removeInput("COLUMN");
    block.appendDummyInput("COLUMN")
          .appendField(".")
          .appendField(new Blockly.FieldDropdown(options), "COLUMN");
  }
};

// sets the column block dropdown options depending on the selected table on the parent block
function getAssociatedColumn(block,parent){
  if (!block||!parent) return;
  if (block.type != "column") return;
  let parentFieldValue = parent.getFieldValue("TABLE");
  options = fieldMapping[parentFieldValue];
  if (!options) {
    setColumnDropdown(block,[["Mit Tabellen Block verbinden",""]]);
  } else {
    setColumnDropdown(block,options);
  }
};

// checks if the change event was caused by changes to a columnn block and updates the dropdown options
function connectionChangeColumn(event) {
  if (event.type != "move") return;
  let block = workspace.getBlockById(event.blockId);
  if ((block.type != "column")||!((event.oldParentId)||(event.newParentId))) return;
  if (event.newParentId) {
    getAssociatedColumn(block,workspace.getBlockById(event.newParentId));
    return;
  }
  setColumnDropdown(block,[["Mit Tabellen Block verbinden",""]]);
};

// checks if the change event was caused by a change to a table block 
// then updates the dropdown options of connected column blocks
function tableBlockNewValue(event) {
  if (event.type != "change") return;
  let block = workspace.getBlockById(event.blockId);
  if (block.type != "table"||event.newValue==event.oldValue) return;
  getAssociatedColumn(block.getChildren(false)[0],block);
};

// Eventhandler
function onchange(event) {
  connectionChangeColumn(event);
  tableBlockNewValue(event);
  show_Code();
};
workspace.addChangeListener(onchange);
onchange();
