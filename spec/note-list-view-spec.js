function noteListViewTests(){

  const noteList = new NoteList()
  noteList.createNote("Yo!Yo!yo!")
  noteList.createNote("Check it out!")
  const view = new NoteListView(noteList)

  console.log(view.display())

  assert.isTrue(
    "List View: HTML display for notes: ",
    view.display() === "<ul><li><div><a href='#0'>Yo!Yo!yo!</a></div></li><li><div><a href='#1'>Check it out!</a></div></li></ul>"
);
}

noteListViewTests();
