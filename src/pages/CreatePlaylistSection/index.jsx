import classes from './styles.module.scss'
import imageHolder from '../../../public/image_holder.png'
import Header from "../../components/header/index.jsx";

const CreatePlaylistSection = () => {
    return (
        <>
            <Header/>
            <div className={classes.mainDiv}>
                <div className={classes.introHolder}>
                    <div className={classes.headerWrapper}>
                        <h1>Create the perfect playlist for any moment</h1>
                        <p>Connect with friends, share your music taste, and let AI help you discover the
                            perfect <br/> tracks for
                            any vibe</p>
                        <button>Get Started</button>
                    </div>
                    <div className={classes.cardsWrapper}>
                        <div className={classes.card}>
                            <h1>AI-Powered Playlists</h1>
                            <p>Describe your mood or activity and let our AI create the perfect playlist just for
                                you</p>
                        </div>
                        <div className={classes.card}>
                            <h1>Connect with Friends</h1>
                            <p>Share your music taste and discover new tracks through your social circle</p>
                        </div>
                        <div className={classes.card}>
                            <h1>Music Portfolio</h1>
                            <p>Create your unique music identity with favorite artists, genres, and moods</p>
                        </div>
                    </div>
                </div>
                <div className={classes.descHolder}>
                    <div className={classes.contentHolder}>
                        <h1>How it works</h1>
                        <div className={classes.infoHolder}>
                            <div className={classes.instructionWrapper}>
                                <div className={classes.circle}>1</div>
                                <div className={classes.textWrapper}>
                                    <h2>Connect your Spotify</h2>
                                    <p>Link your account to access millions of tracks and your existing playlists</p>
                                </div>
                            </div>
                            <div className={classes.instructionWrapper}>
                                <div className={classes.circle}>2</div>
                                <div className={classes.textWrapper}>
                                    <h2>Describe your vibe</h2>
                                    <p>Tell us about your mood, activity, or the atmosphere you want to create</p>
                                </div>
                            </div>
                            <div className={classes.instructionWrapper}>
                                <div className={classes.circle}>3</div>
                                <div className={classes.textWrapper}>
                                    <h2>Get your perfect playlist</h2>
                                    <p>Our AI will generate a custom playlist that matches your description
                                        perfectly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={imageHolder} alt="image holder"/>
                </div>
            </div>
        </>
    )
}

export default CreatePlaylistSection