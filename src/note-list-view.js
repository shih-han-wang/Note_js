(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList
  }

  NoteListView.prototype.display = function () {
    var html = "<ul>"

    this.noteList.list().forEach(function(note){
      html += `<li><div><a href='#${note.id}'>${note.string.substring(0,20)}</a></div></li>`
    })
    html += "</ul>"

    return html
  };

  exports.NoteListView = NoteListView;
})(this);
