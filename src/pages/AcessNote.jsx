import { useParams } from "react-router-dom"
import useNotes from "../hooks/useNotes"
import Form from "../components/Form"


export default function AcessNote() {
    const { id } = useParams()
    const { myNotes } = useNotes()

    const noteToEdit = myNotes.find(note => Number(note.id) == Number(id))
    console.log(`id: ${id}\nNote.id: ${noteToEdit.id}`)


    return (
        <Form noteToEdit={noteToEdit}/>
    )
}