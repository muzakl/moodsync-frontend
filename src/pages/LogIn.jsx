
import classes from '../modules/LogIn.module.scss';
import line  from '../assets/line.svg'
import github from '../assets/github.svg'
import google from '../assets/google.svg'
import facebook from '../assets/facebook.svg'
import spotify from '../assets/spotify.svg'
export const LogIn = () => {
    return (
        <>
            <div className={classes["background"]}>
                <div className={classes["container"]}>
                    <div className={classes["main"]}>
                        <h1 className={classes["title"]}>Log In</h1>
                        <div className={classes["form"]}>
                            <input type="text" placeholder="Username" className={classes["input"]}/>
                            <input type="password" placeholder="Password" className={classes["input"]}/>
                            <button type="submit" className={classes["continue-btn"]}>Continue</button>
                        </div>
                    </div>
                    <div className={classes["extra"]}>
                        <div className={classes["extra-text"]}>
                            <img src={line} alt="line" className={classes["line"]}/>
                            <p className={classes["text"]}>or</p>
                            <img src={line} alt="line" className={classes["line"]}/>
                        </div>
                        <div className={classes["socials"]}>
                            <div className={classes["socials-items"]}>
                                <div className={classes["socials-item"]}>
                                    <img src={github} alt="line" className={classes["socials-img"]}/>
                                </div>
                                <div className={classes["socials-item"]}>
                                    <img src={google} alt="line" className={classes["socials-img"]}/>
                                </div>
                                <div className={classes["socials-item"]}>
                                    <img src={facebook} alt="line" className={classes["socials-img"]}/>
                                </div>
                            </div>
                            <div>
                                <button className={classes["continue-spt"]}><img src={spotify} alt={"spotify"}/>Continue
                                    with Spotify
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>

    );

}