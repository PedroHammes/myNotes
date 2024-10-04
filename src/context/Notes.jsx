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

    const notes = {
        myNotes,
        addNote
    }

    return (
        <NotesContext.Provider value={notes}>
            {children}
        </NotesContext.Provider>
    )
}