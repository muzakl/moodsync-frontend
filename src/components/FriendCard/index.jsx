import classes from './styles.module.scss'
import DemoPFP from '../../assets/demo-pfp.png'
import TrashBin from '../../assets/trash-bin.png'
import {useState} from "react";

const FriendCard = () => {
    const [friendList, setFriendList] = useState([
        {
            id: 1,
            profilePicture: DemoPFP,
            displayName: 'Alex Chen',
            username: 'alexchen',
            mutualFriends: 12
        },
        {
            id: 2,
            profilePicture: DemoPFP,
            displayName: 'Sarah Johnson',
            username: 'sarahj',
            mutualFriends: 8
        }
    ])

    return (
        friendList.map((friend) => (
            <div className={classes.card}>
                <div className={classes.detailHolder}>
                    <img src={friend.profilePicture} alt="User Profile Picture"/>
                    <div className={classes.textHolder}>
                        <h1>{friend.displayName}</h1>
                        <h2>@{friend.username}</h2>
                        <p>{friend.mutualFriends} mutual friends</p>
                    </div>
                </div>
                <img src={TrashBin} alt="Trash Bin"/>
            </div>
        ))
    )
}

export default FriendCard