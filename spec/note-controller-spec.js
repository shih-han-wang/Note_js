function NoteControllerTest(){

  var controller = new NoteController();

  var doubleapp = {
    innerHTML: null
  }

  controller.getHTML(doubleapp)

  assert.isTrue(
    "Controller: doubleapp contains HTML",
    doubleapp.innerHTML === "<ul><li><div><a href='#0'>Purple amazing</a></div></li></ul>"
  );
}

 NoteControllerTest()
