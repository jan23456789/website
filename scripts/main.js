function showCode() {
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  let code = Blockly.JavaScript.workspaceToCode(workspace);
  return code;
};

function getAllRecords() {
  //let recordArray = getTables();
  // Fill RecordArray with all available Records
  let recordArray = [["name","albums"],["name","artists"],["name","customers"],["name","employees"],["name","genres"],["name","invoices"],["name","invoice_items"],["name","media_types"],["name","playlists"],["name","playlist_track"],["name","tracks"]];

//    allTables = [['Drag me onto the canvas','UNDEFINED']];
  return recordArray;
};
