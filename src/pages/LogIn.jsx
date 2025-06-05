
import classes from '../modules/LogIn.module.scss';
import line  from '../assets/line.svg'
import github from '../assets/github.svg'
import google from '../assets/google.svg'
import facebook from '../assets/facebook.svg'
import spotify from '../assets/spotify.svg'
import {useState} from "react";
import {loginUser} from "../../api/auth.js";
import Header from "../components/header/Header.jsx";
export const LogIn = () => {
    const [error, setError] = useState('');
    const [form, setForm] = useState({username: '', password: ''});
    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    const continueHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await loginUser(form);
            localStorage.setItem("token", res.data.token);
        } catch (err) {
            setError(err.response?.data?.error || "Login failed.");
        }
    };


    return (
        <>
            <Header></Header>
            <div className={classes["background"]}>
                <div className={classes["container"]}>
                    <div className={classes["main"]}>
                        <h1 className={classes["title"]}>Log In</h1>
                        {error && <p className={classes["error"]}>{error}</p>}
                        <div className={classes["form"]}>
                            <input type="text" placeholder="Username" className={classes["input"]} onChange={changeHandler}/>
                            <input type="password" placeholder="Password" className={classes["input"]}  onChange={changeHandler}/>
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