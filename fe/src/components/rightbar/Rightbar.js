import {Users} from '../../dummyData';
import Online from '../online/Online';
import './rightbar.css';

const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
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
            </div>
        </div>
    )
}

export default Rightbar