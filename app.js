const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = argv._[0];

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`${note.title} has succsefully been added`);
    console.log('-----------')
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log(`there is already a note titled ${argv.title}`);
  };
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  let noteExpanded = notes.getNote(argv.title);
  if (noteExpanded) {
    console.log(`${noteExpanded.title} found`);
    console.log('-----------')
    console.log(`Title: ${noteExpanded.title}`);
    console.log(`Body: ${noteExpanded.body}`);
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
