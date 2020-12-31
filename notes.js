const fs = require('fs')
const { title } = require('process')
const chalk = require('chalk')

const getNotes = () => {
    return "Your Notes...."
}

const addNote = (title, body) =>{
    const notes = loadNote()
    const duplicateNote = notes.filter(note =>  note.title === title)
    if(duplicateNote.length === 0){
        notes.push({title, body})
        saveNote(notes)
    }
    else {
        console.log("This title already exist")
    }
}

const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (error) {
        return []   
    }
}
const saveNote = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}
const removeNote = (title)=> {
    const notes = loadNote()
    const noteLeft = notes.filter(note => note.title !== title)
    saveNote(noteLeft)
    
}
const listNote = () => {
    console.log(chalk.green.inverse("Your Notes"))
    const notes = loadNote()
    notes.forEach(element => {
        console.log(element.title)
    });
}
const readNote = (title) => {
    const notes = loadNote()
    const noteToRead = notes.find(note => note.title === title)
    if(noteToRead){
        console.log(chalk.red(`${noteToRead.title}`))
        console.log(`${noteToRead.body}`)
    }
    else {
        console.log(`can't find the requested note`)
    }
}
module.exports = {
     addNote,
     getNotes, 
     removeNote,
     listNote,
     readNote
}