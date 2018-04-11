const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const TITLE_COMMAND_CONFIG = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
};

const BODY_COMMAND_CONFIG = {
  describe: 'A more detailed description of the note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: {
      ...TITLE_COMMAND_CONFIG
    },
    body: {
      ...BODY_COMMAND_CONFIG
    }
  })
  .command('list', 'List all notes')
  .command('read', 'Read a specific note', {
    title: {
      ...TITLE_COMMAND_CONFIG
    }
  })
  .command('remove', 'Removes a specific note', {
    title: {
      ...TITLE_COMMAND_CONFIG
    }
  })
  .help()
  .argv;
let command = argv._[0];

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`${note.title} has succsefully been added`);
    notes.logNote(note);
  } else {
    console.log(`there is already a note titled ${argv.title}`);
  };
} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  let note = notes.getNote(argv.title);
  if (note) {
    console.log(`${note.title} found`);
    notes.logNote(note);
  } else {
    console.log(`could not find a note titled ${argv.title}`);
  }
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? `${argv.title} successully removed` : `note title: ${argv.title}, does not exist, cannot remove`;
  console.log(message);
} else {
  console.log('command not recognized');
}
