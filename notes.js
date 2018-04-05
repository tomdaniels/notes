const fs = require('fs');

let addNote = (title, body) => {
  let notes = []
  let note = {
    title,
    body
  };

  try {
    let notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {
    // If there is no file, don't do anything.
  }

  let duplicateNote = notes.filter((note) => note.title === title);

  if (duplicateNote.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

let getAll = () => {
  console.log('getting all notes');
};

let getNote = (title) => {
  console.log('reading note', title)
};

let removeNote = (title) => {
  console.log('removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
