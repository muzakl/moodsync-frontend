import {Link, useNavigate} from "react-router";
import classes from "../modules/Footer.module.scss"
import logo from "../assets/logo.svg";
import React from "react";


export const Footer = () => {

    const navigate = useNavigate();

    const homePageClick = () => {
        navigate("/")
    };

    return (
        <footer className={classes['footer-wrapper']}>

            <div className={classes['footer-container']}>
                <div className={classes['footer-column']}>

                    <div className={classes['footer-title']} onClick={homePageClick}>
                            <img src={logo} alt={'MoodSync Logo'}/>
                            <h1>MoodSync</h1>
                        </div>

                    <p className={classes['footer-description']}>
                        Express yourself and share it with your friends.
                    </p>
                </div>

                <div className={`${classes['footer-column']} ${classes['middle-column']}`}>
                    <h3 className={classes['footer-heading']}>Services</h3>
                    <ul className={classes['footer-links']}>
                        <li><Link to="/">Sign Up</Link></li>
                        <li><Link to="/">Create Playlist</Link></li>
                        <li><Link to="/">My Profile</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};