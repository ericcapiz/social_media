import './online.css';

const Online = ({user}) => {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={user.profilePicture} alt="userImg" className="rightbarProfileImg" />
                <span className="rightbarOnline" />
            </div>
            <span className="rightbarUsername">{user.username}</span>
    </li>
    )
}

export default Online
