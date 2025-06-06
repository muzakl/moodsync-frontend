import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';
import PlaylistCard from '../components/Playlist-Card.jsx';
import classes from '../modules/Playlist.module.scss';
import {defaultPlaylists} from "../api-holder/spotify-music.jsx";
import HeaderSign from "../components/Header-signIn.jsx";


const Playlist = () => {
    const navigate = useNavigate();
    const [playlists, setPlaylists] = useState([]);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        document.body.style.backgroundColor = '#111111';
        const saved = localStorage.getItem('playlists');
        if (saved) {
            setPlaylists(JSON.parse(saved));
        } else {
            const initialData = defaultPlaylists;

            setPlaylists(initialData);
            localStorage.setItem('playlists', JSON.stringify(initialData));
        }
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);

    const handlePlaylistClick = (playlist) => {
        navigate(`/playlist/${playlist.id}`, {state: playlist});
    };

    const handleStartEdit = (id) => setEditingId(id);

    const handleDoneEdit = (id, newName) => {
        const updated = playlists.map(p => p.id === id ? {...p, name: newName} : p);
        setPlaylists(updated);
        localStorage.setItem('playlists', JSON.stringify(updated));
        setEditingId(null);
    };

    return (<>
        <HeaderSign/>
        <div className={classes['main-wrapper']}>
            <div className={classes['title']}>
                <b>Your Playlists</b>
                <p>Your personal collection of curated music</p>
            </div>

            <div className={classes['main-content']}>
                {playlists.map(playlist => (
                    <PlaylistCard
                        key={playlist.id}
                        playlist={playlist}
                        isEditing={editingId === playlist.id}
                        onClick={handlePlaylistClick}
                        onStartEdit={handleStartEdit}
                        onDoneEdit={handleDoneEdit}
                    />
                ))}
            </div>
        </div>
        </>
    );
};

export default Playlist;

