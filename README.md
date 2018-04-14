# notes

Command line interface to jot down quick notes.
Node.js app. 

## Installing the application
- Run the below commands:
```bash
    git clone git@github.com:tomdaniels/notes.git && cd weatherize
    yarn install
```

### How to use it? 

- Add a note
```bash
node app.js add -t {title of the note} -b {body/description}
```

- Remove a note
```bash
node app.js remove -t {title of note to remove}
```

- Read a note
```bash
node app.js read -t {title of note to expand}
```

- list all notes
```bash
node app.js list
```