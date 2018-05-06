function NoteControllerTest(){

  var controller = new NoteController();
  var list = new NoteList()
  list.createNote("testing for controller")

  var doubleapp = {
    innerHTML: null
  }

  doubleapp.innerHTML = new NoteListView(list).display()

  assert.isTrue(
    "Controller: doubleapp contains HTML",
    doubleapp.innerHTML === "<ul><a href='#0' id='note0' class='list-group-item list-group-item-action list-group-item-light'>testing for controll</a></ul>"
  );

}

 NoteControllerTest()
