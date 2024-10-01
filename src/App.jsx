import { useState } from "react"

export default function App() {

  const [ title, setTitle ] = useState("")
  const [ content, setContent ] = useState("")
  const [ myNotes, setMyNotes ] = useState([])

  function saveNote(event) {
    event.preventDefault()
    const id = Date.now()
    const createdAt = new Date()
    const newNote = { title, content, id, createdAt }
    console.log(`Nota salva!`)
    console.log(newNote)
    addNote(newNote)
    setTitle('')
    setContent('')
  }

  function addNote(newNote) {
    const myNotesUpdated = [newNote, ...myNotes]
    setMyNotes(myNotesUpdated)
    console.log(myNotes)
  }

  return (
    <>
      <h1>Minhas notas - Início</h1>



      <hr />

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
      <hr />

    </>
  )
}
