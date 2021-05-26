import {useState, useEffect, useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';

const Feed = ({username}) => {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext)

    useEffect(() =>{
        const fetchPosts = async () =>{
            const res = username
            ? await axios.get("/posts/profile/" + username)
            :await axios.get("/posts/timeline/" + user._id);
            setPosts(res.data);
        };
        fetchPosts();

    },[username, user._id])
    
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Feed
