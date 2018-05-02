function NoteViewTest(){
  var note = new Note("Hello bitch", 1)
  var noteView = new NoteView(note)

  assert.isTrue(
    "Note View: HTML display for single note",
    noteView.display() === "<div>Hello bitch</div>"
  );
}

NoteViewTest();
