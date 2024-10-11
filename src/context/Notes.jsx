import { createContext, useState } from "react"
import PropTypes from "prop-types"

NotesContextProvider.propTypes = {
    children: PropTypes.node
}

export const NotesContext = createContext({})

export function NotesContextProvider({children}) {
    
    const [ myNotes, setMyNotes ] = useState([])
    
    const addNote = (newNote) => {
        const myNotesUpdated = [newNote, ...myNotes]
        setMyNotes(myNotesUpdated)
    }

    const deleteNote = (idToDelete) => {
        const myNotesUpdated = myNotes.filter((note) => note.id != idToDelete)
        setMyNotes(myNotesUpdated)
    }

    // A função recebe o ID da nota a ser alterada e um objeto com novos dados
    // Percorre myNotes e se o id da nota for igual ao do parâmetro atualiza os dados dessa nota
    // Ao final o myNotesUpdated estará atualizado e será usado
    //  como parâmetro para setMyNotes
    const editNote = (noteID, editedNote) => {
        const myNotesUpdated = myNotes.map(note => {
            if (note.id === noteID) {
                return {...note, ...editedNote}
            }
            return note
        })
        setMyNotes(myNotesUpdated)
    }

    const notes = {
        myNotes,
        addNote,
        deleteNote,
        editNote
    }

    return (
        <NotesContext.Provider value={notes}>
            {children}
        </NotesContext.Provider>
    )
}