import { useState } from "react"
import useNotes from "../hooks/useNotes"

export default function NewNote() {
    
    const { addNote } = useNotes()
    const [ title, setTitle ] = useState("")
    const [ content, setContent ] = useState("")

    function saveNote(event) {
        event.preventDefault()
        const id = Date.now()
        const createdAt = new Date()
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric'}
        const date = `${createdAt.toLocaleDateString('pt-BR', dateOptions)} (${createdAt.toLocaleTimeString()})`
        // const date = `${createdAt.getDay()}/${createdAt.getMonth()}/${createdAt.getFullYear()} (${createdAt.getHours()}h${createdAt.getMinutes()})`
        const newNote = { title, content, id, createdAt, date }
        console.log(`Nota salva!`)
        console.log(newNote)
        addNote(newNote)
        setTitle('')
        setContent('')
    }

    return (
        <>
            <h1>Nova nota</h1>
            <form onSubmit={saveNote}> {/* Passando a função como callback */}

                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                />

                <textarea
                    name=""
                    id=""
                    placeholder="Nota"
                    value={content}
                    onChange={(ev) => setContent(ev.target.value)}
                >
                </textarea>

                <button type="submit">Salvar</button> {/* Adicionando o tipo="submit" */}
        
            </form>
        </>
    )
}