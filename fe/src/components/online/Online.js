import './online.css';

const Online = ({user}) => {
    const PF=process.env.REACT_APP_PUBLIC_URL;
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={PF+user.profilePicture} alt="userImg" className="rightbarProfileImg" />
                <span className="rightbarOnline" />
            </div>
            <span className="rightbarUsername">{user.username}</span>
    </li>
    )
}

export default Online
