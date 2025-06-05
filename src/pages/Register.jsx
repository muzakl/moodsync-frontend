import classes from '../modules/Register.module.scss';
import line from "../assets/line.svg";
import spotify from "../assets/spotify.svg";
import {useState} from "react";
import { registerUser } from "../../api/auth";
import Header from "../components/header/Header.jsx";

export const Register = () => {
    const [step,setStep] = useState(0);
    // const [form, setForm] = useState({username: '', password: '',confirmPassword: '', });
    const [form, setForm] = useState({username: '', password: '' });
    const [error, setError] = useState('');
    const continueHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await registerUser(form);
            localStorage.setItem("token", res.data.token);
            console.log(res)
        } catch (err) {
            setError(err.response?.data?.error || "Registration failed.");
        }
        if (step === 0 && form.username && form.password && form.confirmPassword) {
            setStep(step + 1);
        }
    };
    const handleChange = (e) => {
        if (e.target.name === 'confirmPassword' && e.target.value !== form.password) {
            setError("Passwords do not match");
            return;
        }else if (e.target.name === 'confirmPassword') {
            setForm({...form, password: e.target.value,username: form.username});

        }
        setForm({...form, [e.target.name]: e.target.value});
        console.log(e.target.name, e.target.value);
        console.log(form)

    }

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
                                <input type="text" placeholder="Username" className={classes["input"]} onChange={handleChange}/>
                                <input type="password" placeholder="Password" className={classes["input"]} onChange={handleChange}/>
                                <input type="password" placeholder="Confirm password" className={classes["input"]} onChange={handleChange}/>
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
                                <button type="submit" className={classes["continue-btn"]} onClick={continueHandler}>Continue</button>
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
        </>
    )
}