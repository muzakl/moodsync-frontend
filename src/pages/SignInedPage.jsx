import Header from "../components/header/index.jsx";
import classes from "../modules/SignInedPage.module.scss"

const SignInedPage = () => {
    const playlists = [
        { title: "Late Night Drive", creator: "Alex" },
        { title: "Summer Sunset", creator: "Sarah" },
    ];

    return (
        <>
            <Header/>
            <div className={classes["main-page-wrapper"]}>
                <div className={classes["main-txt-wrapper"]}>
                    <h1>Your Personal Music Universe</h1>
                    <p>Connect with friends, share your music taste, and let
                        AI help you discover the perfect tracks for any vibe</p>
                </div>
                <div className={classes["activity-center"]}>
                    <div className={classes["recent-playlists"]}>
                        <h3>Recent Playlists</h3>
                        {playlists.map((playlist, index) => (
                            <div key={index} className={classes["playlist-item"]}>
                                <div className={classes["thumbnail"]}></div>
                                <div className={classes["playlist-txt"]}>
                                    <div className={classes["playlist-title"]}>
                                        {playlist.title}
                                    </div>
                                    <div className={classes["playlist-creator"]}>
                                        Created by {playlist.creator}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={classes["friends-activity-wrapper"]}>
                        <h3>Friends Activity</h3>
                        <div className={classes["friends-activity"]}>
                            <img src="" alt="pfp"/>
                            <div className={classes["activity-text"]}>
                                <h4>Sarah created a new playlist</h4>
                                <p>2 hours ago</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes["build-with-ai"]}>
                        <h3>Build with AI</h3>
                        <p>Let AI help you create the perfect playlist for any moment</p>
                        <button className={classes["new-playlist-btn"]}>Create New Playlists</button>
                    </div>
                </div>
                <div className={classes["playlist-btn-wrapper"]}>
                    <button className={classes["playlist-btn"]}>My Playlists</button>
                </div>
            </div>
        </>
    )
}

export default SignInedPage