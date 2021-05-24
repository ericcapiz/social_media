import {MoreVert} from '@material-ui/icons';
import './post.css'

const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/9.jpeg" alt="" className="postProfileImg" />
                        <span className="postUsername">Claire</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Time to party!!!!</span>
                    <img src="assets/post/5.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/heart.png" alt="" />
                        <img className="likeIcon" src="assets/like.png" alt="" />
                        <span className="postLikeCounter">17 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
