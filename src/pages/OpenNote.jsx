// import { useParams } from "react-router-dom"
// import useNotes from "../hooks/useNotes"

// export default function OpenNote() {
//     const { id } = useParams()
//     const { myNotes } = useNotes()

//     const noteToOpen = myNotes.find(note => note.id == id)
//     console.log(`id: ${id}\nNote.id: ${noteToOpen.id}`)
//     return (
//         <div>
//             <h1>{noteToOpen}</h1>
//         </div>
//     )
// }

export default function OpenNote() {
    return (
        <h1>Nota aberta!</h1>
    )
}