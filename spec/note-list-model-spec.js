function noteListTests(){
  var list = new NoteList();

  assert.isTrue(Array.isArray(list.notes), "test that noteList has an empty array of notes");

  list.createNote("Favourite drink: seltzer")
  assert.isTrue(list.notes[0].view() === "Favourite drink: seltzer", "test that the created note stores in the notes array");
}

noteListTests();
