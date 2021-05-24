import {Users} from '../../dummyData';
import Online from '../online/Online';
import './rightbar.css';

const Rightbar = ({profile}) => {

    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="gift" className="birthdayImg" />
                    <span className="birthdayText"><b>Mia</b> and <b>2 other friends</b> have a birthday coming up!</span>
                </div>
                <img src="/assets/ad.png" alt="ad" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends:</h4>
                <ul className="rightbarFriendList">
                   {Users.map((user) => (
                       <Online user={user} key={user.id} />
                   ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarInfoTitle">My Info:</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoVValue">Chicago</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoVValue">LA</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoVValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarInfoTitle">My Friends:</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Cindy Hawks</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Anthony Bennett</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mia Thomas</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Lisa Marie</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Kim Holden</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <ProfileRightbar />
            </div>
        </div>
    )
}

export default Rightbar