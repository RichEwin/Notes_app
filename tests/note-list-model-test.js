function testClassInstantiatesWithArray() {
  let noteList = new NoteList();
  expect.isTrue(Array.isArray(noteList.notes));
};

function testStoresNotesInAnArray() {
  let noteList = new NoteList();
  noteList.addNote('Note');
  expect.isTrue(noteList.notes[0] instanceof Note);
};

testClassInstantiatesWithArray()
testStoresNotesInAnArray()
