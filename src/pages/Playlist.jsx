import classes from '../modules/Playlist.module.scss'
import playlistImg from '../assets/playlist-img.png'

const Playlist = () => {
    return (
        // <Header/>
        <div className={classes['playlist']}>
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
                            <h1>playlist name</h1>
                            <p>created with friendsName</p>
                            <div className={classes['buttons']}>
                                <button>Play</button>
                                <button>edit</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes['single-playlist']}>
                        <div className={classes['single-image']}>
                            <img src={playlistImg} alt='playlist'/>
                            <p>img</p>
                        </div>
                        <div className={classes['single-info']}>
                            <h1>playlist name</h1>
                            <p>created with friendsName</p>
                            <div className={classes['buttons']}>
                                <button>Play</button>
                                <button>edit</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes['single-playlist']}>

                        <div className={classes['single-image']}>
                            <img src={playlistImg} alt='playlist'/>
                            <p>img</p>
                        </div>
                        <div className={classes['single-info']}>
                            <h1>playlist name</h1>
                            <p>created with friendsName</p>
                            <div className={classes['buttons']}>
                                <button>Play</button>
                                <button>edit</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        // <Footer/>

    )
}

export default Playlist
