import classes from './styles.module.scss'
import logo from '../../assets/logo.svg'
import { useNavigate} from "react-router";


const Header = () => {
    const navigate = useNavigate();

    const portfolioClick = () => {
        navigate("/playlist")
    };
    const homePageClick = () => {
        navigate("/")
    };

    return (
        <div className={classes.headerDiv}>

            <div className={classes.brandHolder} onClick={homePageClick} >
                <img src={logo} alt={'MoodSync Logo'} />
                <h1>MoodSync</h1>
            </div>

            <div className={classes.buttonsHolder}>
                <button className={classes.darkButton} onClick={portfolioClick} >
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