import useNotes from "../../hooks/useNotes"
import Note from "./Note"
import BtnToNewNote from "./BtnToNewNote"
import '../../styles/index.css'

export default function Home() {
 
    const { myNotes } = useNotes()
    
    return (
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="font-mono text-2xl">myNotes</h1>
        <BtnToNewNote />

        <section
          className="mb-12 flex flex-row flex-wrap gap-4"
        >
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