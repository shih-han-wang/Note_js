(function(exports){

  function Note(string, id){
    this.string = string;
    this.id = id;
  }

  Note.prototype = {
    text: function(){
      return this.string;
    },

    id: function(){
      return this.id;
    }
  }

  exports.Note = Note;

})(this);
