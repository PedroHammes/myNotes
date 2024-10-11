import { createContext, useState, useEffect } from "react"
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

    const [ storedNotes, setStoredNotes] = useState(0)
    // Sempre que o total de notas for alterado (adição ou exclusão)
    //  o total de notas será atualizado para a quantidade de notas salvas 
    useEffect(() => { 
        setStoredNotes(myNotes.length)
    }, [myNotes])

    const [ firstNote, setFirstNote ] = useState("")
    useEffect(() => {
        let oldestDate = new Date()
        myNotes.forEach((note) => {
            if (note.createdAt < oldestDate) {
                oldestDate = note.createdAt
                setFirstNote(note)
            }
        })
    }, [myNotes])

    const [ lastEdited, setLastEdited ] = useState("")
    useEffect(() => {
        let lastEdited = firstNote.createdAt
        myNotes.forEach((note) => {
            if (note.editedAt > lastEdited) {
                lastEdited = note.editedAt
                setLastEdited(note)
            }
        })
    })

    const [ oldestNote, setOldestNote ] = useState("")
    useEffect(() => {
        let oldestDate = new Date()
        if (myNotes.length == 0) {
            setOldestNote("")
        }
        myNotes.forEach((note) => {
            if (note.createdAt < oldestDate) {
                oldestDate = note.createdAt
                setOldestNote(note)
            }
        })
    }, [myNotes])

    const notes = {
        myNotes,
        addNote,
        deleteNote,
        editNote,
        storedNotes,
        firstNote,
        lastEdited,
        oldestNote
    }

    return (
        <NotesContext.Provider value={notes}>
            {children}
        </NotesContext.Provider>
    )
}