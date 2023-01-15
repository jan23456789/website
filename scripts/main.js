function showCode() {
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  
  return Blockly.JavaScript.workspaceToCode(workspace);
};

function getAllRecords() {
  //let recordArray = getTables();
  // Fill RecordArray with all available Records
  let recordArray = [["albums","albums"],["artists","artists"],["customers","customers"],["employees","employees"],["genres","genres"],["invoices","invoices"],["invoice_items","invoice_items"],["media_types","media_types"],["playlists","playlists"],["playlist_track","playlist_track"],["tracks","tracks"]];

//    allTables = [['Drag me onto the canvas','UNDEFINED']];
  return recordArray;
};
