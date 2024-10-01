import useNotes from "../hooks/useNotes"

export default function Home() {
 
    const { myNotes } = useNotes()
    return (
      <>
        <h1>Minhas notas - Início</h1>
        <p>Tamanho: {myNotes.length}</p>
        <section>
            {myNotes.map((note) => (
            <div key={note.id}>
                <p>{note.title} | {note.date}</p>
                <p>{note.content}</p>
            </div>
            ))}
        </section>
      </>
    )
  }