import { useContext } from "react";
import { NotesContext } from "../context/Notes";

export default function useNotes() {
    return useContext(NotesContext)
}