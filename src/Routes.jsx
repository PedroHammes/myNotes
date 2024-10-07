import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import NewNote from "./pages/NewNote";
import Profile from "./pages/Profile";

export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-note" element={<NewNote />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <footer 
                className = "flex flex-row justify-between px-4 bg-blue text-white"
            >
                <Link to="/" className=""> Início </Link>
                <Link to="/profile" > Perfil </Link>
            </footer>
        </BrowserRouter>
    )
}