const fs = require('fs')

const getNotes = ()=> {
    console.log("Your notes....")
}

const addNotes = (title,body)=> {
    const notes = loadNotes()
    //Ensure that the note is not duplicated
    const duplicates = notes.find((note)=> note.title === title)

    if(!duplicates){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new note added')
    }else {
        console.log('note not as its duplicated')
    }
}

//removing a note 
const removeNotes = (title)=> {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=> note.title !== title)
        
        if(notes.length > notesToKeep.length){
            saveNotes(notesToKeep)
           console.log('Note removed')
        }else{
            console.log('Note removed')
        }     
}

//List Notes
const listNotes = ()=> {
    const notes =  loadNotes()

    notes.forEach(note => {
        console.log("Note Title: ",note.title)
        console.log("Note Body: ",note.body)
    });
}

//read Notes
const readNotes = (title)=> {
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)

    if(note){
         console.log(note.title)
         console.log(note.body)
    }else {
        console.log('Note not found')
    }

}


//Load existing data
const loadNotes = ()=> {
   try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
   }catch(e){
    return []
   }
}


//save the notes
const saveNotes = (notes)=> {
    const dataJSON  = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}