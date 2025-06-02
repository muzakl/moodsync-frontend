import {useEffect, useState} from "react";
import classes from '../modules/playlist-info.module.scss'
import playlistImg from "../assets/playlist-img.png";
const PlaylistInfo = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#111111';

        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);


    const [playlistName, setPlaylistName] = useState('Playlist Name')
    const [friendsName, setFriendsName] = useState('Friends Name')
    return (
<>
    <div className={classes['main-wrapper']}>

        <div className={classes['title']}>
            <b>{playlistName}</b>
            <p>30 Tracks of {playlistName} </p>
        </div>

        <div className={classes['playlist-info']}>
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
            <div className={classes['song-info']}>
<div className={classes['song-list']}>
    <div className={classes['list-name']}>
        <div className={classes['list-items']}>
            <p>#</p>
            <p>Title</p>
            <p>Artist</p>
            <p>Duration</p>
        </div>
    </div>
    <div className={classes['song-details-wrapper']}>
        <div className={classes['song-details']}>
            <p>1</p>
            <div className={classes['song']}>
                 <img src={playlistImg} alt='playlist'/>
                <div className={classes['song-text']}>
                    <h4>name</h4>
                    <p>artist</p>
                </div>
            </div>
            <p>artist</p>
            <p>2.32</p>
        </div>

    </div>

</div>
            </div>
    </div>

</>
    )
}

export default PlaylistInfo