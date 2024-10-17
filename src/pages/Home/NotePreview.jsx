import PropTypes from "prop-types"
import useNotes from "../../hooks/useNotes"
import { Link } from "react-router-dom"

NotePreview.propTypes = {
    note: PropTypes.object
}

export default function NotePreview({note}) {

    const { deleteNote } = useNotes()

    function handleDeleteNote(noteId) {
        console.log(`Deletando a nota: ${noteId}`)
        deleteNote(noteId)
    }

    return (
            <div 
                key={note.id}
                className=" min-w-72 grow max-w-[32rem] h-[104px] rounded-lg flex flex-col p-2 space-y-2 bg-blue-200
                            lg:h-[200px]
                            lg:p-4
                            lg:justify-around"
            >
                <Link to={`/myNotes/${note.id}`} className="lg:space-y-4">
                    <div className="flex flex-row justify-between"> 
                        <p className="  text-xl font-bold  text-slate-800
                                        lg:text-3xl"
                        > {note.title} </p>
                        <p className="  text-xl font-semibold text-slate-400
                                        lg:text-3xl"
                        > {note.created.slice(23, 28)} </p>
                    </div>

                    {note.content.length > 25 ? 
                        <p className="  text-lg font-medium text-slate-800
                                        lg:text-3xl"
                        > 
                                        {note.content.slice(0,24)}...
                        </p>
                        :
                        <p className="  text-lg font-medium text-slate-800
                                        lg:text-3xl"
                        >
                                        {note.content}
                        </p>
                    }
                </Link>

                <div className="flex flex-row justify-between">
                    <span className="   text-xl font-semibold text-slate-400
                                        lg:text-3xl">
                        {note.created.slice(0, 9)}
                    </span>

                    <div className="flex flex-row space-x-2">
                        <button onClick={() => handleDeleteNote(note.id)}>
                            <svg 
                                className="size-6 fill-slate-800 lg:size-10"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
    )
}