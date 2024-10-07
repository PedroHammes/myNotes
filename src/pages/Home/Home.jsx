import useNotes from "../../hooks/useNotes"
import Note from "./Note"
import BtnToNewNote from "./BtnToNewNote"
import '../../styles/index.css'

export default function Home() {
 
    const { myNotes } = useNotes()
    
    return (
      <>
        <h1 className="">Minhas notas - Início</h1>

        <section className="min-h-96 flex flex-col px-4 space-y-4">
          <BtnToNewNote />
          {
            myNotes.length > 0 ?
            myNotes.map((note) => (
              Note({note})
            )) :
            <p>Não há nada por aqui ainda... <br />Comece a escrever :)</p>

          }
        </section>
      </>
    )
  }