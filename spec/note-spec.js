function noteTests(){
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.view() === "My favourite language is JavaScript", "test for note stores string");
}

noteTests();
