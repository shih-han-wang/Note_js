(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList
  }

  NoteListView.prototype.display = function () {
    var html = "<ul>"

    this.noteList.list().forEach(function(note){
      html += `<a href='#${note[0]}' id='note${note[0]}' class='list-group-item list-group-item-action list-group-item-light'>${note[1].substring(0,20)}</a>`
    })
    html += "</ul>"

    return html
  };

  exports.NoteListView = NoteListView;
})(this);
