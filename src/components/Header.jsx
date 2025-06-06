import React, {useState} from 'react';
import classes from '../modules/Header.module.scss'
import logo from '../assets/logo.svg'
import {useNavigate} from "react-router";

export const HeaderSign = () => {
    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
    const navigate = useNavigate();

    const portfolioClick = () => {
        navigate("/playlist")
    };
    const homePageClick = () => {
        navigate("/")
    };

    const toggleBurgerMenu = () => {
        setIsOpenBurgerMenu(!isOpenBurgerMenu);
    };

    return (
        <>
            {!isOpenBurgerMenu ? <header className={classes['headerDiv']}>
                    <div className={classes['brandHolder']} onClick={homePageClick}>
                        <img src={logo} alt={'MoodSync Logo'}/>
                        <h1>MoodSync</h1>
                    </div>

                <nav className={classes['buttonsHolder']}>
                    <button className={classes['darkButton']} onClick={portfolioClick}>
                        My Portfolio
                    </button>
                    <button className={classes['darkButton']}>
                        Create Playlist
                    </button>
                    <button className={classes['lightButton']}>
                        Sign In
                    </button>
                </nav>

                <div onClick={toggleBurgerMenu} className={classes['burger-menu-icon']}>
                    <div className={classes.line}></div>
                    <div className={classes.line}></div>
                    <div className={classes.line}></div>
                </div>
            </header> :
                <header className={classes['header-wrapper-mobile']}>

                    <div className={classes['brandHolder']} onClick={homePageClick}>
                        <img src={logo} alt={'MoodSync Logo'}/>
                        <h1>MoodSync</h1>
                    </div>

                    <nav className={classes['buttonsHolder']}>

                        <button className={classes['darkButton']} onClick={portfolioClick}>
                            My Portfolio
                        </button>

                        <button className={classes['darkButton']}>
                            Create Playlist
                        </button>

                        <button className={classes['lightButton']}>
                            Sign In
                        </button>


                    </nav>
                    <div onClick={toggleBurgerMenu} className={classes['close-icon']}>
                        <div className={classes['line-1']}></div>
                        <div className={classes['line-2']}></div>
                    </div>
                </header>}
        </>
    );
};

export default HeaderSign;

