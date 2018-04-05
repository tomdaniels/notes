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
  let notes = fetchNotes();
  const expandedNote = notes.filter((note) => note.title === title);
  return expandedNote[0];
};

let removeNote = (title) => {
  let notes = fetchNotes();
  let notesToKeep = notes.filter((note) => note.title !== title)
  saveNotes(notesToKeep);

  return notes.length !== notesToKeep.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
