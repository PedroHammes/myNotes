import { useState } from "react"
import useNotes from "../hooks/useNotes"
import { Link } from "react-router-dom"

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
        const newNote = { title, content, id, createdAt, date }
        console.log(`Nota salva!`)
        console.log(newNote)
        addNote(newNote)
        setTitle('')
        setContent('')
    }

    return (
        <>
        {/* <div className="box-border bg-blue-50 px-4 py-4 space-y-4">
            <p className="bg-blue-500">oi</p> */}
            <form 
                onSubmit={saveNote}
                className="flex-1 bg-green-500"
            >
                {/* Div do cabeçalho OK */}
                <div className="flex flex-row justify-start gap-2 bg-yellow-300">
                    <button type="submit">
                        <svg 
                            className="size-7 stroke-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <input type="text" />
                </div>
                <textarea className="w-full h-full bg-pink-500 ">

                </textarea>
                {/* <div
                    className="box-border flex flex-row gap-2 items-center"
                >
                    <button type="submit">
                        <svg 
                            className="size-7 stroke-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <input
                        className="bg-blue-50 text-3xl text-slate-700 outline-none ring-0"
                        type="text"
                        placeholder="Título"
                        value={title}
                        maxLength={20}
                        onChange={(ev) => setTitle(ev.target.value)}
                    />
                </div> */}
                {/* <textarea
                    className="box-border bg-blue-50 px-4 text-xl text-slate-600 outline-none ring-0"
                    name=""
                    id=""
                    placeholder="Nota"
                    value={content}
                    maxLength={409}
                    onChange={(ev) => setContent(ev.target.value)}
                ></textarea> */}
            </form>
        {/* </div> */}
        </>
    )
}