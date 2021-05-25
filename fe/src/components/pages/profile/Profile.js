import Topbar from "../../topbar/Topbar";
import Sidebar from '../../sidebar/Sidebar';
import Feed from "../../feed/Feed";
import Rightbar from "../../rightbar/Rightbar";
import './profile.css';

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="/assets/post/3.jpeg" alt="postImg" className="profileCoverImg" />
                            <img src="/assets/person/me.jpg" alt="postImg" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName" >Breezy</h4>
                            <span className="profileInfoDesc" >MERN STACK PRO!!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username="breezy"/>
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
