import {useState, useEffect} from 'react';
import axios from 'axios';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        const fetchPosts = async () =>{
            const res = await axios.get("posts/timeline/60a99d774d874d59a8fb15d2");
            setPosts(res.data);
        };
        fetchPosts();

    },[])
    
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Feed
