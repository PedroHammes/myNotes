import { useState, useEffect } from "react"
import useNotes from "../hooks/useNotes"

export default function Profile() {

    const { myNotes } = useNotes()
    const [ myNotesLength, setMyNotesLength] = useState(0)

    // Sempre que o total de notas for alterado (adição ou exclusão)
    //  o total de notas será alterado para a quantidade de notas salvas 
    useEffect(() => { 
        setMyNotesLength(myNotes.length)
    }, [myNotes])

    return (
      <>
        <h1>Perfil</h1>
      
        <p>Minhas notas: {myNotesLength}</p>
      </>
    )
  }