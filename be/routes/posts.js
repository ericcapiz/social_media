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

//Delete Post

//Like Post

//Get Post

//Get timeline Posts

module.exports = router;