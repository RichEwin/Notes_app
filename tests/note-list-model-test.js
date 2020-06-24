function testClassInstantiatesWithArray() {
  let noteList = new NoteList();
  expect.isTrue(Array.isArray(noteList.notes));
};

function testStoresNotesInAnArray() {
  let noteList = new NoteList();
  noteList.addNote('Note');
  expect.isTrue(noteList.notes[0] instanceof Note);
};

function testReturnAllNotesInArray() {
  let noteList = new NoteList();
  noteList.addNote('this is a note');
  expect.isTrue(noteList.returnNote().length == 1);
};

testClassInstantiatesWithArray()
testStoresNotesInAnArray()
testReturnAllNotesInArray()
