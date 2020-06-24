function testClassInstantiatesWithNoteList() {
  let noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  expect.isTrue(noteListView.noteList instanceof NoteList);
};

testClassInstantiatesWithNoteList()
