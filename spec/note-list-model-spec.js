function noteListTests(){
  var list = new NoteList();

  assert.isTrue(
    "Note List: an empty array of notes: ",
    Array.isArray(list.list())
    );

  list.createNote("Favourite drink: seltzer")

  assert.isTrue(
    "Note List: created note stores in the notes array: ",
    list.notes[0].text() === "Favourite drink: seltzer"
    );
}

noteListTests();
