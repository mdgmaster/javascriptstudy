import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


  const notesToShow = showAll 
    ? notes // si es True 
    : notes.filter(note => note.important === true) // si es False

  const addNote = (event) =>{
      event.preventDefault() // Sirve para evitar que se envíe el formulario.
      const noteObject = {
          content: newNote,
          date: new Date().toISOString(),
          important: Math.random() < 0.5,
          id: notes.length + 1
      }

      setNotes(notes.concat(noteObject)) // Empleamos concat porque no queremos modificar directamente el valor de State
      setNewNote('')

  }

  const handleNoteChange = (event) => {
      console.log("valor",event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
          <button onClick={()=>setShowAll(!showAll)}>
              show {showAll ? "All" : "Important"}
          </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange}/>
          <button type="submtit">save</button>
      </form>
    </div>
  )
}

export default App 