function noteListTests(){
  var list = new NoteList();
  assert.isTrue(Array.isArray(list.notes), "test that noteList has an empty array of notes");
}

noteListTests();
