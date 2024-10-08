import { NotesContextProvider } from "./context/Notes"
import AppRoutes from "./Routes"
import './styles/index.css'

export default function App() {
  return (
    <NotesContextProvider>
      <div className="flex flex-col h-screen bg-blue-50">
        <AppRoutes />
      </div>
    </NotesContextProvider>
  )
}
