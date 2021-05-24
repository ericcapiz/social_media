import './closeFriends.css'

const closeFriends = ({user}) => {
    return (
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="userImg" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default closeFriends
