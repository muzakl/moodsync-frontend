import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Playlist from "./pages/Playlist.jsx";
import Error from './pages/Error.jsx'
import SignInedPage from "./pages/SignInedPage.jsx";
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/SignInedPage" element={<SignInedPage/>}/>
            <Route path="/playlist" element={<Playlist/>}/>
            <Route path="/*" element={<Error/>} />
        </Routes>
    </BrowserRouter>

)
