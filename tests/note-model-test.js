function testClassConstructsWithText() {
  let string = 'My favourite language is JavaScript.';
  let note = new Note(string);
  expect.isTrue(note.text === string);
};

function testMethodReturnsNoteText() {
  let string = 'Hello World!';
  let note = new Note(string);
  expect.isTrue(note.returnText() === string);
};

testClassConstructsWithText()
testMethodReturnsNoteText()
