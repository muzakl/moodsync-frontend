import classes from './styles.module.scss'
import Header from "../../components/Header.jsx";
import SearchIcon from "../../assets/search-icon.png"
import FriendIcon from "../../assets/friend-icon.png"
import FriendCard from "../../components/FriendCard/index.jsx";

const FriendsPage = () => {
    return (
        <>
            <Header />
            <div className={classes.mainDiv}>
                <div className={classes.textHolder}>
                    <h1>Friends</h1>
                    <p>Connect with your community</p>
                </div>
                <div className={classes.bigContainer}>
                    <div className={classes.firstWrapper}>
                        <div className={classes.inputWrapper}>
                            <input id={"FriendSearch"} placeholder={"Search Friends..."} />
                            <img src={SearchIcon} alt="Search Icon" />
                        </div>
                        <div className={classes.buttonWrapper}>
                            <img src={FriendIcon} alt="Friend Icon" />
                            <button>Add Friend</button>
                        </div>
                    </div>
                    <div className={classes.secondWrapper}>
                        <div className={classes.headerWrapper}>
                            <h1>Your Friends</h1>
                            <p>6 friends</p>
                        </div>
                        <div className={classes.friendsWrapper}>
                            <FriendCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FriendsPage