(function(exports){

  function NoteController(){
    this.noteList = new NoteList();
    this.noteList.createNote("Purple amazing")
    this.noteList.createNote("Purple amazing as well")
    this.noteList.createNote("js is amazing")
    this.noteList.createNote("last note is a joke")
    this.noteList.createNote("this note more than 20 charrrrrrr")
    this.notesView = new NoteListView(this.noteList);
  };




  NoteController.prototype = {

    getHTML: function(){
      var notes = getField("notes")
      notes.innerHTML = this.notesView.display();
      console.log(this.notesView.display());
    },

    urlChangeDisplayNote: function(){
      var noteField = getField("note");
      var notelist = this.noteList
      window.addEventListener("hashchange", function(event){
        event.preventDefault();
        var id = getNoteID(window.location)
        var note = notelist.getNoteById(Number(id))
        noteField.innerHTML = new NoteView(note).display();
      })
    },


  }

  function getNoteID(location){
    return location.hash.split("#")[1];
  };

  function getField(field){
    return document.getElementById(field)
  };

  exports.NoteController = NoteController;

})(this);
