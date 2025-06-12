import Header from "../../components/Header";
import classes from "./styles.module.scss";
import SearchIcon from "../../assets/search-icon.png";

const FriendsPage = () => {
  return (
    <>
      <Header />
      <div className={classes.mainDiv}>
        <div className={classes.textHolder}>
          <h1>Friends</h1>
          <p>Connect with your community</p>
        </div>
        <div className={classes.listHolder}>
          <div className={classes.inputWrapper}>
            <input type="text" placeholder="Search friends..." />
            <img src={SearchIcon} alt="Search Icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsPage;
