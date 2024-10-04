import { NotesContextProvider } from "./context/Notes"
import AppRoutes from "./Routes"

export default function App() {
  return (
    <NotesContextProvider>
      <div>
        <AppRoutes />
      </div>
    </NotesContextProvider>
  )
}
