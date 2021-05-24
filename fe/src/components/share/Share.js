import {PermMedia, Room, Person, EmojiEmotions} from '@material-ui/icons';
import './share.css'

const Share = () => {
    return (
        <div className="share" >
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/me.jpg" alt="userImg" className="shareProfileImg" />
                    <input placeholder="What's on your mind?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className='shareOptionText'>Upload Media</span>
                        </div>
                        <div className="shareOption">
                            <Person htmlColor="blue" className="shareIcon" />
                            <span className='shareOptionText'>Tag Friend</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className='shareOptionText'>Feeling</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
