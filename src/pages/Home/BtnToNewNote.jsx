import { Link } from "react-router-dom";

export default function BtnToNewNote() {
    return (
        <Link to="/myNotes/new-note" >
            <button
                className=" box-border border-2 border-blue-500 rounded-lg h-24 w-20 flex items-center justify-center
                            lg:border-4
                            lg:h-40
                            lg:w-32"
            >
                <svg
                    className="size-12 fill-blue-500 lg:size-20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                </svg>

            </button>
        </Link>
        
    )
}