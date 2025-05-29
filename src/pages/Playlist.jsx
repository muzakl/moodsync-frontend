import classes from '../modules/Playlist.module.scss'
import playlistImg from '../assets/playlist-img.png'
import {useEffect, useState} from "react";
// import Header from "../components/Header.jsx";
// import {Footer} from "../components/Footer.jsx";
const Playlist = () => {

    useEffect(() => {
        document.body.style.backgroundColor = '#111111';

        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);

    const [playlistName, setPlaylistName] = useState('Playlist Name')
    const [friendsName, setFriendsName] = useState('Friends Name')


    return (
        // <Header/>
        <>
            <div className={classes['main-wrapper']}>
                <div className={classes['title']}>
                    <b>Your Playlists</b>
                    <p>Your personal collection of curated music</p>
                </div>
                <div className={classes['main-content']}>
                    <div className={classes['single-playlist']}>

                        <div className={classes['single-image']}>
                            <img src={playlistImg} alt='playlist'/>
                            <p>img</p>
                        </div>
                        <div className={classes['single-info']}>
                            <h1>{playlistName}</h1>
                            <p>created with {friendsName}</p>
                            <div className={classes['buttons']}>
                                <button>Play</button>
                                <button>Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes['single-playlist']}>
                        <div className={classes['single-image']}>
                            <img src={playlistImg} alt='playlist'/>
                            <p>img</p>
                        </div>
                        <div className={classes['single-info']}>
                            <h1>{playlistName}</h1>
                            <p>created with {friendsName}</p>
                            <div className={classes['buttons']}>
                                <button>Play</button>
                                <button>Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes['single-playlist']}>

                        <div className={classes['single-image']}>
                            <img src={playlistImg} alt='playlist'/>
                            <p>img</p>
                        </div>
                        <div className={classes['single-info']}>
                            <h1>{playlistName}</h1>
                            <p>created with {friendsName}</p>
                            <div className={classes['buttons']}>
                                <button>Play</button>
                                <button>Edit</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
        // <Footer/>

    )
}

export default Playlist
