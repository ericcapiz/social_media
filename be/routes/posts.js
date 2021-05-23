const router = require("express").Router();
const Post = require("../models/Posts");


//Create Post
router.post("/", async (req,res)=>{
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error);
    }
})


//Update Post
router.put("/:id", async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("post has been updated")
        }else{
            res.status(403).json("Can't update other users posts")
        }   
    } catch (error) {
        res.status(500).json(error)
    }
})
//Delete Post

//Like Post

//Get Post

//Get timeline Posts

module.exports = router;