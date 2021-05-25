import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {format} from 'timeago.js';
import {MoreVert} from '@material-ui/icons';
import './post.css';

const Post = ({post}) => {

    const [like, setLike] = useState(post.likes.length);
    const [islike, setIsLike] = useState(false);
    const [user, setUser] = useState({})

    const PF=process.env.REACT_APP_PUBLIC_URL;

    useEffect(() =>{
        const fetchUser = async () =>{
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        };
        fetchUser();

    },[post.userId])


    const likeHandler = () => {
        setLike(islike ? like - 1 : like + 1)
        setIsLike(!islike)
    }

    

    let totalLikes = like === 0 ? ('Be the first to like!') : like === 1 ? ('1 person likes this post!') : (`${like} people like this comment`);
    
    // would need to use when ability to make comments
    // let totalComments = post.comment === 0 ? ('Lets hear what you have to say!') : post.comment === 1 ? (post.comment) : (`1 ${post.comment}`);


    return (
        <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <Link to={`/profile/${user.username}`}>
                <img
                  className="postProfileImg"
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                />
              </Link>
              <span className="postUsername">{user.username}</span>
              <span className="postDate">{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImg" src={PF + post.img} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                className="likeIcon"
                src={`${PF}like.png`}
                onClick={likeHandler}
                alt=""
              />
              <img
                className="likeIcon"
                src={`${PF}heart.png`}
                onClick={likeHandler}
                alt=""
              />
              <span className="postLikeCounter">{totalLikes}</span>
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
