const chalk = require('chalk')
const { describe } = require('yargs')
const yargs = require('yargs')
const {addNote, removeNote, listNote, readNote} = require('./notes.js')

//create a add command
yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title:{
            decsribe:"Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        addNote(argv.title, argv.body)
        
    }
})
// create a remove command

yargs.command({
    command: 'remove',
    describe: 'remove this note',
    builder: {
        title:{
            decsribe:"Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        removeNote(argv.title)
    }

})
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler(){
        listNote()
    }
})

yargs.command({
    command: 'read',
    describe: 'read notes',
    builder: {
        title:{
            decsribe:"Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        readNote(argv.title)
    }
})

yargs.parse()