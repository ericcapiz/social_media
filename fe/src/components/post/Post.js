import {useState, useEffect} from 'react';
import axios from 'axios';
import {MoreVert} from '@material-ui/icons';
import './post.css';

const Post = ({post}) => {

    const [like, setLike] = useState(post.likes.length);
    const [islike, setIsLike] = useState(false);
    const [user, setUser] = useState({})

    const PF=process.env.REACT_APP_PUBLIC_URL;

    useEffect(() =>{
        const fetchUser = async () =>{
            const res = await axios.get(`users/${post.userId}`);
            setUser(res.data);
        };
        fetchUser();

    },[])


    const likeHandler = () => {
        setLike(islike ? like - 1 : like + 1)
        setIsLike(!islike)
    }

    

    let totalLikes = like === 0 ? ('Be the first to like!') : like === 1 ? ('1 person likes this post!') : (`${like} people like this comment`);
    let totalComments = post.comment === 0 ? ('Be the first to comment!') : post.comment === 1 ? (`1 ${post.comment}`) : ('Show some love');


    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture || PF+"person/noAvatar.png"} alt="userImg" className="postProfileImg" />
                        <span className="postUsername">{user.userName}</span>
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
                        <span className="postLikeCounter">{totalLikes}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}
                            <span className="comment">
                                {post.comment >= 1 ?
                                    'comments'
                                :(
                                    'Be the first to comment!'
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
