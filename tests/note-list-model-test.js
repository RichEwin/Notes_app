function testClassInstantiatesWithArray() {
  let noteList = new NoteList();
  expect.isTrue(Array.isArray(noteList.notes));
}

testClassInstantiatesWithArray()
