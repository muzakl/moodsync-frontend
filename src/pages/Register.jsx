import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {registerUser} from "../../api/auth";
import classes from "../modules/Register.module.scss";
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import liner from "../assets/liner.svg";
import line from "../assets/line.svg";
import google from "../assets/google.svg";
import spotify from "../assets/spotify.svg"
import { useLocation } from 'react-router-dom';

const useQuery = () => new URLSearchParams(useLocation().search);

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [userId, setUserId] = useState(null);
    const [error, setError] = useState('');
    const [stage, setStage] = useState('register');
    const query = useQuery();

    const continueHandler = async (data) => {
        try {
            const res = await registerUser(data);
            setUserId(res.userId);
            setStage('spotify');
        } catch (err) {
            console.error("Registration error:", err);
            setError(err?.response?.data?.error || "Registration failed.");
        }
    };

    const handleSpotifyLink = () => {
        if (!userId) {
            setError("User ID missing – can't link Spotify.");
            return;
        }

        const redirectUri = encodeURIComponent("http://127.0.0.1:5000/api/auth/spotify/callback");
        const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
        const scope = encodeURIComponent("user-read-private user-read-email");

        const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${userId}`;
        window.location.href = authUrl;
    };

    const handleGoogleSignup = () => {
        window.location.href = "http://localhost:5000/api/auth/google";
    };

    useEffect(() => {
        const queryUserId = query.get('userId');
        if (queryUserId) {
            setUserId(queryUserId);
            setStage('spotify');
        }
    }, []);

    useEffect(() => {
        console.log("Stage changed:", stage);
        console.log("User ID:", userId);
    }, [stage, userId]);

    return (
        <>
            <Header />
            {stage === 'spotify' ? (
                <div className={classes["background"]}>
                    <div className={classes["container"]}>
                        <div className={classes["main"]}>
                            <div className={classes["stepper"]}>
                                <h1>1</h1>
                                <img src={liner} alt="line" />
                                <h1>2</h1>
                            </div>
                            <h1 className={classes["title"]}>Link your Spotify account</h1>
                            <div className={classes["form"]}>
                                <button type="button" className={classes["continue-btn"]} onClick={handleSpotifyLink}>
                                    <img src={spotify} alt="spotify" /> Link Spotify Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={classes["background"]}>
                    <div className={classes["container"]}>
                        <div className={classes["main"]}>
                            <div className={classes["stepper"]}>
                                <h1>1</h1>
                                <img src={liner} alt="line" />
                                <h1>2</h1>
                            </div>
                            <h1 className={classes["title"]}>Create your account</h1>
                            {error && <h1 className={classes["error"]}>{error}</h1>}
                            <form className={classes["form"]} onSubmit={handleSubmit(continueHandler)}>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className={classes["input"]}
                                    {...register("username", { required: true })}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className={classes["input"]}
                                    {...register("password", { required: true, minLength: 6 })}
                                />
                                <button type="submit" className={classes["continue-btn"]}>Continue</button>
                            </form>
                        </div>
                        <div className={classes["extra"]}>
                            <div className={classes["extra-text"]}>
                                <img src={line} alt="line" className={classes["line"]} />
                                <p className={classes["text"]}>or</p>
                                <img src={line} alt="line" className={classes["line"]} />
                            </div>
                            <div className={classes["socials"]}>
                                <button onClick={handleGoogleSignup} className={classes["continue-spt"]}>
                                    <img src={google} alt="google" />
                                    Continue with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};