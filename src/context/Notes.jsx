import { createContext, useState, useEffect } from "react"
import PropTypes from "prop-types"

NotesContextProvider.propTypes = {
    children: PropTypes.node
}

export const NotesContext = createContext({})

export function NotesContextProvider({children}) {
    
    //  myNotes é iniciado como um array vazio
    const [ myNotes, setMyNotes ] = useState([])

    //  adiciona a nova nota ao array myNotes
    const addNote = (newNote) => {
        const myNotesUpdated = [newNote, ...myNotes]
        setMyNotes(myNotesUpdated)
    }
    
    //  1) filtra todas as notas (exceto a nota à ser deletada) para um novo array
    //  2) seta este novo array como o valor de myNotes
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

    //  Sempre que o myNotes for alterado (adição, exclusão, edição)
    //  essas quatro operações são executadas:
    
    //  (1/4) O total de notas será atualizado para a quantidade de notas salvas 
    const [ storedNotes, setStoredNotes] = useState(0)
    useEffect(() => { 
        setStoredNotes(myNotes.length)
    }, [myNotes])

    //  (2/4) A data da primeira nota criada será conferido 
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

    //  (3/4) A data da última edição será atualizada
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

    //  (4/4) A nota mais antiga entre as notas salvas será atualizada
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