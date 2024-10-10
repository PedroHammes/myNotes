import { useParams } from "react-router-dom"
import useNotes from "../hooks/useNotes"


export default function OpenNote() {
    const { id } = useParams()
    const { myNotes } = useNotes()

    const noteToOpen = myNotes.find(note => Number(note.id) == Number(id))
    console.log(`id: ${id}\nNote.id: ${noteToOpen.id}`)
    return (
        <div>
            <h1>{noteToOpen.title}</h1>
        </div>
    )
}