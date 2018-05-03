(function(exports){

  function NoteList(){
    this.notes = [];
  }

  NoteList.prototype = {

    createNote: function (text) {
      const id = this.notes.length;
      const note = new Note(text, id);
      this.notes.push([note.id, note.text()]);
    },

    list: function () {
      return this.notes;
    },

    getNoteById: function(id, notes = this.notes){
      const notesHash = new Map(notes)
      return notesHash.get(id)
    }

  }

  exports.NoteList = NoteList;

})(this);
