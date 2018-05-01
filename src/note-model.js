(function(exports){

  function Note(string){
    this.text = string;
  }

  Note.prototype.view = function () {
    return this.text;
  };

  exports.Note = Note;

})(this);
