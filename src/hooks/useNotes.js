import { useState } from "react";

function useNotes() {
    const [ myNotes, setMyNotes ] = useState([])

    function addNote(newNote) {
        const myNotesUpdated = [newNote, ...myNotes]
        setMyNotes(myNotesUpdated)
    }

    return { myNotes, addNote }
}

export default useNotes