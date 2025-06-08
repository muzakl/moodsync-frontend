import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth.js";
import Header from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import classes from "../modules/LogIn.module.scss";
import line from "../assets/line.svg";
import spotify from "../assets/spotify.svg";
import google from "../assets/google.svg";
import github from "../assets/github.svg";
import facebook from "../assets/facebook.svg";
export const LogIn = () => {
    const [error, setError] = useState('');
    const [form, setForm] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const continueHandler = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting login with:", form);
            const res = await loginUser(form);
            const token = res?.token;
            console.log("Token received:", token);

            if (!token) {
                throw new Error("No token received");
            }

            localStorage.setItem("token", token);
            console.log("Token saved. Navigating now...");
            navigate("/playlist");
        } catch (err) {
            console.error("Login failed:", err);
            setError(err.error || "Login failed");
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:5000/api/auth/google";
    };


    const handleSpotifyLogin = () => {
        window.location.href = "http://localhost:5000/api/auth/spotify/login";
    };

    return (
        <>
            <Header />
            <div className={classes["background"]}>
                <div className={classes["container"]}>
                    <div className={classes["main"]}>
                        <h1 className={classes["title"]}>Log In</h1>
                        {error && <p className={classes["error"]}>{error}</p>}
                        <form className={classes["form"]} onSubmit={continueHandler}>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                className={classes["input"]}
                                onChange={changeHandler}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className={classes["input"]}
                                onChange={changeHandler}
                                required
                            />
                            <button type="submit" className={classes["continue-btn"]}>
                                Continue
                            </button>
                        </form>
                    </div>

                    <div className={classes["extra"]}>
                        <div className={classes["extra-text"]}>
                            <img src={line} alt="line" className={classes["line"]} />
                            <p className={classes["text"]}>or</p>
                            <img src={line} alt="line" className={classes["line"]} />
                        </div>

                        <div className={classes["socials"]}>
                            <div className={classes["socials-items"]}>
                                <div className={classes["socials-item"]}>
                                    <img src={github} alt="GitHub" className={classes["socials-img"]} />
                                </div>
                                <div className={classes["socials-item"]} onClick={handleGoogleLogin}>
                                    <img src={google} alt="Google" className={classes["socials-img"]} />
                                </div>
                                <div className={classes["socials-item"]}>
                                    <img src={facebook} alt="Facebook" className={classes["socials-img"]} />
                                </div>
                            </div>
                            <div>
                                <button onClick={handleSpotifyLogin} className={classes["continue-spt"]}>
                                    <img src={spotify} alt="Spotify" />
                                    Continue with Spotify
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};