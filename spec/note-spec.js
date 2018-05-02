function noteTests(){
  var note = new Note("My favourite language is JavaScript", 1);

  assert.isTrue(
    "Note: Test for note stores string: ",
    note.text() === "My favourite language is JavaScript");
}

noteTests();
