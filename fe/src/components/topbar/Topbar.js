import { useContext } from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import {Search, Person, Chat, Notifications} from '@material-ui/icons';
import "./topbar.css"

const Topbar = () => {
    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_URL;

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:'none'}} >
                    <span className="logo">Social-Devs</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search....." className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="userImg" className="topbarImg" />
                </Link>
            </div>
        </div>
    )
}

export default Topbar
