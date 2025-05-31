import classes from './styles.module.scss'
import logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <div className={classes.headerDiv}>
            <div className={classes.brandHolder}>
                <img src={logo} alt={'MoodSync Logo'}/>
                <h1>MoodSync</h1>
            </div>
            <div className={classes.buttonsHolder}>
                <button className={classes.darkButton}>
                    My Portfolio
                </button>
                <button className={classes.darkButton}>
                    Create Playlist
                </button>
                <button className={classes.lightButton}>
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default Header