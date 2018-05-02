(function(exports){

  function NoteController(list = new NoteList()){
    this.noteList = list;
    this.noteList.createNote("Purple amazing")
    this.notesView = new NoteListView(this.noteList);
  };

  NoteController.prototype = {

    getHTML: function(app = document.getElementById("app")){
      app.innerHTML = this.notesView.display()
    },

  }

  exports.NoteController = NoteController;

})(this);
