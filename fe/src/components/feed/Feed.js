import {useState, useEffect} from 'react';
import axios from 'axios';
// import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        const fetchPosts = async () =>{
            const res = await axios.get('60ad5651e7da504378b02ccd');
            console.log(res)
        };
        fetchPosts();

    },[])
    
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {/* {Posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))} */}
            </div>
        </div>
    )
}

export default Feed
