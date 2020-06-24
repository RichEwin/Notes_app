(function (exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.returnHtml = function() {
    return `<ul><li><div>Test</div></li>`;
  }

  exports.NoteListView = NoteListView;
})(this);
