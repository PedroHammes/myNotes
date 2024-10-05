import useNotes from "../hooks/useNotes"
import '../styles/index.css'

export default function Home() {
 
    const { myNotes } = useNotes()
    return (
      <>
        <h1 className="">Minhas notas - Início</h1>

        <section>
            {myNotes.map((note) => (
            <div key={note.id} className="font-bold bg-black text-white">
                <p>{note.title} | {note.date}</p>
                <p>{note.content}</p>
            </div>
            ))}
        </section>
      </>
    )
  }