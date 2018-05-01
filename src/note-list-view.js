(function(exports){

  function NoteListView(){
    this.noteList = new NoteList()
  }

  NoteListView.prototype.addNote = function (string) {
    this.noteList.createNote(string)
  };

  NoteListView.prototype.show = function () {
    return "<ul><li><div>" + this.noteList.list().join("</div></li><li><div>") + "</div></li></ul>"
  };

  exports.NoteListView = NoteListView;
})(this);
