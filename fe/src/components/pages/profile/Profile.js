import {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import Topbar from "../../topbar/Topbar";
import Sidebar from '../../sidebar/Sidebar';
import Feed from "../../feed/Feed";
import Rightbar from "../../rightbar/Rightbar";
import './profile.css';

const Profile = () => {

    const PF=process.env.REACT_APP_PUBLIC_URL;

    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
        const res = await axios.get(`/users?username=${username}`);
        setUser(res.data);
        };
        fetchUser();
    }, [username]);
    

    return (
        <>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src={
                    user.coverPicture
                      ? PF + user.coverPicture
                      : PF + "person/noCover.png"
                  }
                  alt="cover"
                />
                <img
                  className="profileUserImg"
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt="profile"
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed username={username} />
              <Rightbar user={user} />
            </div>
          </div>
        </div>
      </>
    )
}

export default Profile
