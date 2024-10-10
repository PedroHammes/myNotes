import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import NewNote from "./pages/NewNote";
import Profile from "./pages/Profile";
import AcessNote from "./pages/AcessNote";

export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<AcessNote />}/>
                <Route path="/new-note" element={<NewNote />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <Navbar />
        </BrowserRouter>
    )
}