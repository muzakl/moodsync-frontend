import classes from '../modules/Register.module.scss';
import line from "../assets/line.svg";
import spotify from "../assets/spotify.svg";
import {useState} from "react";
import { registerUser } from "../../api/auth";
import Header from "../components/Header.jsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {Footer} from "../components/Footer.jsx";

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [step, setStep] = useState(0);
    const [userId, setUserId] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const continueHandler = async (data) => {
        try {
            const res = await registerUser(data);
            setUserId(res.data.userId);
            setStep(2);
        } catch (err) {
            setError(err.response.data.error || "Registration failed");
        }
    };
    const handleSpotifyLink = () => {
        const redirectUri = encodeURIComponent("http://localhost:5000/spotify/callback");
        const clientId = "<YOUR_SPOTIFY_CLIENT_ID>";
        const scope = encodeURIComponent("user-read-private user-read-email");
        const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${userId}`;
        window.location.href = authUrl;
    };

    return (
        <>
            <Header></Header>
            {step === 0 ? (
                <div className={classes["background"]}>
                    <div className={classes["container"]}>
                        <div className={classes["main"]}>
                            <div className={classes["stepper"]}>
                                <h1>1</h1>
                                <h1>2</h1>
                                <h1>3</h1>
                            </div>
                            <h1 className={classes["title"]}>Create your account</h1>
                            {error && <p className={classes["error"]}>{error}</p>}
                            <div className={classes["form"]}>
                                <input type="text" placeholder="Username" className={classes["input"]} {...register("username", { required: true })}/>
                                <input type="password" placeholder="Password" className={classes["input"]}{...register("password", { required: true, minLength: 6 })}/>
                                <button type="submit" className={classes["continue-btn"]} onClick={continueHandler}>Continue</button>
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
            ) : step === 1 ? (
                <div className={classes["background"]}>
                    <div className={classes["container"]}>
                        <div className={classes["main"]}>
                            <div className={classes["stepper"]}>
                                <h1>1</h1>
                                <h1>2</h1>
                                <h1>3</h1>
                            </div>
                            <h1 className={classes["title"]}>Link your Spotify account</h1>
                            <div className={classes["form"]}>
                                <input type="text" placeholder="Username" className={classes["input"]}/>
                                <input type="text" placeholder="Password" className={classes["input"]}/>
                                <button type="submit" className={classes["continue-btn"]} onClick={handleSpotifyLink}>Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : step ===2 && (
                <div className={classes["background"]}>
                    <div className={classes["container"]}>
                        <div className={classes["main"]}>
                            <div className={classes["stepper"]}>
                                <h1>1</h1>
                                <h1>2</h1>
                                <h1>3</h1>
                            </div>
                            <h1 className={classes["title"]}>Successfully registered</h1>
                            <div className={classes["form"]}>
                                <button type="submit" className={classes["continue-btn"]}>Back to home</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
            <Footer></Footer>
        </>
    )
}