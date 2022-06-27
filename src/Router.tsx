import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Home } from "./pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evento" element={<Event/>}/>
            <Route path="/evento/aula" element={<Event/>}/>
            <Route path="/evento/aula/:slug" element={<Event/>}/>
        </Routes>
    );
}