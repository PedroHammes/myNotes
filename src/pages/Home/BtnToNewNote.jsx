import { Link } from "react-router-dom";

export default function BtnToNewNote() {
    return (
        <Link to="/new-note" >
            <button
                className="bg-blue-500 rounded-lg h-20 w-16 flex items-center justify-center"
            >
                <svg 
                    className="size-10"
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.25}
                    stroke="currentColor"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

            </button>
        </Link>
        
    )
}