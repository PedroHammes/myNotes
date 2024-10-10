import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import OpenNote from "./pages/OpenNote"
import NewNote from "./pages/NewNote";
import Profile from "./pages/Profile";

export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<OpenNote />}/>
                <Route path="/new-note" element={<NewNote />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <Navbar />
        </BrowserRouter>
    )
}