const yargs = require('yargs')
const notes = require('./notes')


yargs.version('1.1.0')

//create add command
yargs.command({
   command: 'add',
   describe: 'Add a note',
   builder: {
    title: {
        describe: 'Note title',
        demandOption: true,
        type: 'String'
    },
    body: {
        describe: 'Note',
        demandOption: true,
        type: 'String'
    }
},
   handler: function (argv) {
     notes.addNotes(argv.title, argv.body)
   }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note',
            demandOption: true,
            type: 'String'
        },
    },
    handler: (argv)=>{
     notes.removeNotes(argv.title)
    }
})

//create a list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler:(argv)=> {
        notes.listNotes(argv)
    }
})

//read all notes
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note',
            demandOption: true,
            type: 'String'
        },
    },
    handler: (argv)=>{
      notes.readNotes(argv.title, argv.body)
    }
})

yargs.parse()