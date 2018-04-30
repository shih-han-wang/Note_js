function noteTests(){
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.text === "My favourite language is JavaScript", "test for note stores string");
}

noteTests();
