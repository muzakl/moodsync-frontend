import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import classes from '../modules/playlist-info.module.scss';
import playlistImg from "../assets/playlist-img.png";
import PlaylistCard from "../components/Playlist-Card.jsx";
import { mockSongs } from "../api-holder/spotify-music.jsx";
import Header from "../components/header/Header.jsx";

const PlaylistInfo = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const [playlist, setPlaylist] = useState(() => {
        const stored = localStorage.getItem('playlists');
        if (stored && state?.id != null) {
            const found = JSON.parse(stored).find(p => p.id === state.id);
            return found || state;
        }
        return state || {
            id: 0,
            name: 'Default Playlist',
            friend: 'Friend',
            image: playlistImg,
        };
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = '#111111';
        return () => {
            document.body.style.backgroundColor = '#111111';
        };
    }, []);

    const songs = mockSongs(playlist.image);

    const handleStartEdit = () => {
        setIsEditing(true);
    };

    const handleDoneEdit = (id, newName) => {
        const updated = { ...playlist, name: newName };
        setPlaylist(updated);
        setIsEditing(false);

        const stored = localStorage.getItem('playlists');
        if (stored) {
            const parsed = JSON.parse(stored);
            const updatedAll = parsed.map(p => p.id === id ? updated : p);
            localStorage.setItem('playlists', JSON.stringify(updatedAll));
        }
    };

    return (
        <>

        <Header/>
        <div className={classes['main-wrapper']}>
            <div className={classes['title']}>
                <b>{playlist.name}</b>
                <p>{songs.length} Tracks of {playlist.name}</p>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>

            <div className={classes['playlist-info']}>
                <PlaylistCard
                    playlist={playlist}
                    isEditing={isEditing}
                    onClick={() => {}}
                    onStartEdit={handleStartEdit}
                    onDoneEdit={handleDoneEdit}
                />
            </div>

            <div className={classes['song-info']}>
                <div className={classes['song-list']}>
                    <div className={classes['list-items']}>
                        <p>#</p>
                        <p>Title</p>
                        <p>Artist</p>
                        <p>Duration</p>
                    </div>
                    {songs.map((song, index) => (
                        <div key={index} className={classes['song-row']}>
                            <p>{index + 1}</p>
                            <div className={classes['song-title']}>
                                <img src={song.img} alt="track cover" />
                                <div>
                                    <h4>{song.name}</h4>
                                    <p>{song.artist}</p>
                                </div>
                            </div>
                            <p>{song.artist}</p>
                            <p>{song.duration}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default PlaylistInfo;
