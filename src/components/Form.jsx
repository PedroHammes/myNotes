import { useState } from "react"
import useNotes from "../hooks/useNotes"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"

Form.propTypes = {
    noteToEdit: PropTypes.object
}

export default function Form({noteToEdit}) {

    const { addNote, editNote } = useNotes()
    const navigate = useNavigate()

    const [ title, setTitle ] = useState(noteToEdit ? noteToEdit.title : "")
    const [ content, setContent ] = useState(noteToEdit ? noteToEdit.content : "")

    function saveNote(event) {
        event.preventDefault()
        if (!noteToEdit) {
            const id = Date.now()
            const createdAt = new Date()
            const editedAt = new Date()
            const dateOptions = { year: 'numeric', month: 'long', day: 'numeric'}
            const created = `${createdAt.toLocaleDateString('pt-BR', dateOptions)} (${createdAt.toLocaleTimeString()})`
            const edited = `${editedAt.toLocaleDateString('pt-BR', dateOptions)} (${editedAt.toLocaleTimeString()})`
            const newNote = { title, content, id, createdAt, created, editedAt, edited }
            console.log(`Nota salva!`)
            console.log(newNote)
            addNote(newNote)
            setTitle('')
            setContent('')
            navigate("/myNotes")
        } else {
            const editedAt = new Date()
            const dateOptions = { year: 'numeric', month: 'long', day: 'numeric'}
            const edited = `${editedAt.toLocaleDateString('pt-BR', dateOptions)} (${editedAt.toLocaleTimeString()})`
            const editedNote = {title, content, editedAt, edited}
            editNote(noteToEdit.id, editedNote)
            console.log('Nota atualizada!')
            navigate("/myNotes")
        }
    }

    return (
        <form
            onSubmit={saveNote}
            className="flex-1"
        >
            <div className="flex flex-row justify-start items-top gap-2">
                <button type="submit">
                    <svg 
                        className="size-7 fill-blue-500 lg:size-14"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                </button>
                <input 
                    type="text"
                    className=" w-full text-slate-800 text-3xl outline-none font-outfit
                                lg:text-5xl"
                    placeholder="Título"
                    value={title}
                    maxLength={20}
                    onChange={(ev) => setTitle(ev.target.value)}
                />
            </div>
            <textarea 
                    className=" w-full h-full p-4 text-xl text-slate-800 outline-none font-outfit
                                lg:text-3xl"
                    name=""
                    id=""
                    placeholder="Nota..."
                    value={content}
                    maxLength={280}
                    onChange={(ev) => setContent(ev.target.value)}
                >
                </textarea>
        </form>
    )
}