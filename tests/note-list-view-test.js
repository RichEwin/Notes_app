function testClassInstantiatesWithNoteList() {
  let noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  expect.isTrue(noteListView.noteList instanceof NoteList);
};

function testReturnHtml() {
  let noteList = new NoteList();
  noteList.addNote('Test');
  var noteListView = new NoteListView(noteList);
  expect.isTrue(noteListView.returnHtml()) === `<ul><li><div>Test</div></li>`
};

testClassInstantiatesWithNoteList()
testReturnHtml()
