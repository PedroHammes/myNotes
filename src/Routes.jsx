import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NewNote from "./pages/NewNote";
import Profile from "./pages/Profile";
import useNotes from "./hooks/useNotes";

export default function AppRoutes() {

    return (
        <BrowserRouter>
        <nav>
            <Link to="/" > Início </Link>
            <Link to="/new-note" > Nova </Link>
            <Link to="/profile" > Perfil </Link>
        </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-note" element={<NewNote />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}