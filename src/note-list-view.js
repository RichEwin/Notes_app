(function (exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.returnHtml = function() {
    let notes = this.noteList.returnNote();
    for (let i = 0; i < notes.length; i++) {
      return `<ul><li><div>${notes[i].returnText()}</div></li>`;
    }
  };

  exports.NoteListView = NoteListView;
})(this);
