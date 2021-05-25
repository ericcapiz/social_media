import {useState} from 'react';
import {MoreVert} from '@material-ui/icons';
import {Users} from '../../dummyData';
import './post.css';

const Post = ({post}) => {

    const [like, setLike] = useState(post.like);
    const [islike, setIsLike] = useState(false);

    const PF=process.env.REACT_APP_PUBLIC_URL;

    const userName = Users.filter((user) => user.id === post.userId)[0].username;
    const userImg = Users.filter((user) => user.id === post.userId)[0].profilePicture;

    const likeHandler = () => {
        setLike(islike ? like - 1 : like + 1)
        setIsLike(!islike)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={PF+userImg} alt="userImg" className="postProfileImg" />
                        <span className="postUsername">{userName}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF+post.photo} alt="postImg" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/heart.png" alt="like" onClick={likeHandler} />
                        <img className="likeIcon" src="assets/like.png" alt="like" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people like this post</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}
                            <span className="comment">
                                {post.comment > 1 ?
                                    'comments'
                                :(
                                    'comment'
                                )}
                            </span>
                         </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
