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

function testStoresANoteWhenAddingNewNote() {
  let noteList = new NoteList();
  noteList.addNote('Here is another note');
  noteList.addNote('Here is another another note');
  expect.isTrue(noteList.returnNote()[0].text === 'Here is another note');
  expect.isTrue(noteList.returnNote()[1].text === 'Here is another another note');
};

testClassInstantiatesWithArray()
testStoresNotesInAnArray()
testReturnAllNotesInArray()
testStoresANoteWhenAddingNewNote()
