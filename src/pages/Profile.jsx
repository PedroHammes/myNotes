import useNotes from "../hooks/useNotes"

export default function Profile() {

    const { storedNotes, firstNote, lastEdited, oldestNote } = useNotes()

    return (
      <div className="flex-1 min-w-24
        flex
        flex-col
        gap-4
       bg-yellow-300">
        <h1 className="text-3xl">Suas notas</h1>

      {/* Métricas do perfil */}
      <section className="flex flex-row flex-wrap gap-4">
        <div 
            className="box-border 
            h-28 min-w-24 
            border-2 border-blue-500 rounded-lg bg-blue-500 text-blue-50
            flex flex-col
            items-start justify-between 
            p-2"
        >
            <p className="text-xl">Notas</p>
            <p className="text-3xl">{storedNotes}</p>
        </div>

        <div 
            className="box-border h-28 min-w-24 grow max-w-80 border-2 border-blue-500 rounded-lg bg-blue-500 flex flex-col items-start justify-between p-2 text-blue-50"
        >
            <p className="text-xl">Primeira nota</p>
            <p className="text-3xl">
                {
                  firstNote ? 
                  (`${firstNote.created.slice(0,2)} ${firstNote.created.slice(5,9)} ${firstNote.created.slice(19,21)}`) : 
                  '-'
                }
            </p>
        </div>

        <div 
            className="box-border h-28 min-w-24 grow max-w-80 border-2 border-blue-500 rounded-lg bg-blue-500 flex flex-col items-start justify-between p-2 text-blue-50"
        >
            <p className="text-xl">Nota mais antiga</p>
            <p className="text-3xl">
                {
                  oldestNote ? 
                  (`${oldestNote.created.slice(0,2)} ${oldestNote.created.slice(5,9)} ${oldestNote.created.slice(19,21)}`) : 
                  '-'
                }
            </p>
        </div>

        <div  
            className="box-border h-28 min-w-24 grow max-w-80 border-2 border-blue-500 rounded-lg bg-blue-500 flex flex-col items-start justify-between p-2 text-blue-50"
        >
            <p className="text-xl">Última edição</p>
            <p className="text-3xl">
            {
                  lastEdited ? 
                  (`${lastEdited.edited.slice(0,2)} ${lastEdited.edited.slice(5,9)} ${lastEdited.edited.slice(19,21)} - ${lastEdited.edited.slice(23,28)}`) : 
                  '-'
                }
            </p>
        </div>
      </section>
      </div>
    )
  }