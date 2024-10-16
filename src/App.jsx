import { NotesContextProvider } from "./context/Notes"
import AppRoutes from "./Routes"
import './styles/index.css'

export default function App() {
  return (
    <NotesContextProvider>
      <div
        className=" box-border flex-1 flex flex-col h-screen px-4 py-4 pb-10 font-outfit">
        <AppRoutes />
      </div>
    </NotesContextProvider>
  )
}
