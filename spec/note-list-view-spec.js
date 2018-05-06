function noteListViewTests(){

  const noteList = new NoteList()
  noteList.createNote("Yo!Yo!yo!")
  noteList.createNote("Check it out!")
  const view = new NoteListView(noteList)

  assert.isTrue(
    "List View: HTML display for notes: ",
    view.display() ===
    "<ul><a href='#0' id='note0' class='list-group-item list-group-item-action list-group-item-light'>Yo!Yo!yo!</a><a href='#1' id='note1' class='list-group-item list-group-item-action list-group-item-light'>Check it out!</a></ul>"
);
}

noteListViewTests();
