(function(exports){

  function NoteList(){
    this.notes = [];
  }

  NoteList.prototype = {

    createNote: function (text) {
      const id = this.notes.length
      this.notes.push(new Note(text, id));
    },

    list: function () {
      return this.notes;
    }

  }

  exports.NoteList = NoteList;

})(this);
