function testClassConstructsWithText() {
  let string = 'My favourite language is JavaScript.';
  let note = new Note(string);
  expect.isTrue(note.text === string);
};

testClassConstructsWithText()
