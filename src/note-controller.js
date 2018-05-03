(function(exports){

  function NoteController(list = new NoteList()){
    this.noteList = list;
    this.noteList.createNote("this is pretty shitty")
    this.noteList.createNote("i mean life")
    this.noteList.createNote("js is amazing")
    this.noteList.createNote("this is a joke")
    this.noteList.createNote("this note more than 20 charrrrrrr")
  };

  NoteController.prototype = {

    getHTML: function(){
      var notes = getField("notes")
      notesHtmlUpdate(this.noteList)
    },

    urlChangeDisplayNote: function(){
      var noteList = this.noteList;
      window.addEventListener("hashchange", function(event){
        event.preventDefault();
        var id = getNoteID(window.location);
        var note = noteList.getNoteById(Number(id));
        noteHtmlUpdate(note);
      })
    },

    noteSubmit: function(){
      var noteList = this.noteList
      getField("submit").addEventListener("submit" ,function(event){
        event.preventDefault();
        var newnote = getField("addnote").value
        noteList.createNote(newnote);
        notesHtmlUpdate(noteList);
        textAreaReset();
      })
    },

  }

  function getNoteID(location){
    return location.hash.split("#")[1];
  };

  function getField(field){
    return document.getElementById(field)
  };

  function notesHtmlUpdate(noteList){
    var notes = getField("notes")
    notes.innerHTML = new NoteListView(noteList).display()
  };

  function noteHtmlUpdate(singleNote){
    var note = getField("note")
    note.innerHTML = new NoteView(singleNote).display()
  };

  function textAreaReset(){
    document.getElementById("addnote").value = ""
  };

  exports.NoteController = NoteController;

})(this);
