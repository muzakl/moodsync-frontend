import classes from '../modules/Register.module.scss';
import line from "../assets/line.svg";
import github from "../assets/github.svg";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import spotify from "../assets/spotify.svg";

export const Register = () => {
    return (
        <>
            <div className={classes["background"]}>
                <div className={classes["container"]}>
                    <div className={classes["main"]}>
                        <div className={classes["stepper"]}>
                            <h1>1</h1>
                            <h1>2</h1>
                            <h1>3</h1>
                        </div>
                        <h1 className={classes["title"]}>Create your account</h1>
                        <div className={classes["form"]}>
                            <input type="text" placeholder="Fullname" className={classes["input"]}/>
                            <input type="text" placeholder="Username" className={classes["input"]}/>
                            <input type="password" placeholder="Password" className={classes["input"]}/>
                            <input type="password" placeholder="Confirm password" className={classes["input"]}/>
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
    )
}