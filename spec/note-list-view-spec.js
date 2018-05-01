function noteListViewTests(){
  var view = new NoteListView()
  view.addNote("Favourite food: pesto")
  view.addNote("Favourite drink: seltzer")

  assert.isTrue(view.represent() === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>", "returns a string of HTML that represents the note list mode");
}

noteListViewTests();
