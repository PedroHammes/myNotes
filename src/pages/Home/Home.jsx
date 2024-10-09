import useNotes from "../../hooks/useNotes"
import Note from "./Note"
import BtnToNewNote from "./BtnToNewNote"
import '../../styles/index.css'

export default function Home() {
 
    const { myNotes } = useNotes()
    
    return (
      <div className="box-border bg-blue-50 px-4 py-4 space-y-4">
        <p>myNotes</p>
        <BtnToNewNote />
        <section className="mb-10 min-h-96 flex flex-col space-y-4">
          {
            myNotes.length > 0 ?
            myNotes.map((note) => (
              Note({note})
            )) :
            <p>Não há nada por aqui ainda... <br />Comece a escrever :)</p>
          }
        </section>
      </div>
    )
  }