const fs = require('fs');

const fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNote = notes.filter((note) => note.title === title);

  if (duplicateNote.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
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
