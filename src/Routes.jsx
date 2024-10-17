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
                <Route path="/myNotes" element={<Home />} />
                <Route path="/myNotes/:id" element={<AcessNote />}/>
                <Route path="/myNotes/new-note" element={<NewNote />} />
                <Route path="/myNotes/profile" element={<Profile />} />
            </Routes>
            <Navbar />
        </BrowserRouter>
    )
}