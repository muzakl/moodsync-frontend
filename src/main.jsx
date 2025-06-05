import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import Playlist from "./pages/Playlist.jsx";
import Error from './pages/Error.jsx'
import PlaylistInfo from "./pages/playlist-info.jsx";
import CreatePlaylistSection from "./pages/CreatePlaylistSection/index.jsx";
import {Register} from "./pages/Register.jsx";
import {LogIn} from "./pages/LogIn.jsx";
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route index  path="/" element={<CreatePlaylistSection/>}/>
            <Route path="/playlist" element={<Playlist/>}/>
            <Route path="/playlist/:id" element={<PlaylistInfo />} />
            <Route path="/*" element={<Error/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<LogIn/>} />
        </Routes>
    </BrowserRouter>

)
