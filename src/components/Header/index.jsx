import classes from './styles.module.scss'
import Logo from '../../assets/frame.png'

const Header = () => {
    return (
        <div className={classes.mainDiv}>
            <div className={classes.brandHolder}>
                <img src={Logo} alt={'MoodSync Logo'}/>
                <h1>MoodSync</h1>
            </div>
            <div className={classes.navbar}>
                <button className={classes.darkButton}>
                    <p>My Portfolio</p>
                </button>
                <button className={classes.darkButton}>
                    <p>Create Vibe</p>
                </button>
                <button className={classes.lightButton}>
                    <p>Sign In</p>
                </button>
            </div>
        </div>
    )
}

export default Header;