(function(exports){

  function NoteListView(){
    this.noteList = new NoteList()
  }

  NoteListView.prototype.addNote = function (string) {
    this.noteList.createNote(string)
  };

  NoteListView.prototype.listLength = function () {
    return this.noteList.list().length
  };

  NoteListView.prototype.noteView = function (index) {
    return this.noteList.list()[index].view()
  };

  NoteListView.prototype.represent = function () {
  var result = ""
  for (var i = 0; i < this.listLength(); i++){
    result += "<li><div>" + this.noteView(i) + "</div></li>"
  }
  return "<ul>" + result + "</ul>"
  };

  exports.NoteListView = NoteListView;
})(this);
