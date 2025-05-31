import { createRoot } from 'react-dom/client'
import App from './Home.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Playlist from "./pages/Playlist.jsx";
import Error from './pages/Error.jsx'
import {LogIn} from "./pages/LogIn.jsx";
import {Register} from "./pages/Register.jsx";
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/playlist" element={<Playlist/>}/>
            <Route path="/*" element={<Error/>} />
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/register" element={<Register/>}/>

        </Routes>
    </BrowserRouter>

)
