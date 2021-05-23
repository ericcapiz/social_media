const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { rawListeners } = require('../models/User');


//Update User
router.put("/:id",async (req, res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                return res.status(500).json(error);
            }
        }
        try {
            //finds the user to update and then updates the info
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            })
            res.status(200).json("Account Updated!")
        } catch (error) {
            return res.status(500).json(error);
        }
    }else{
        return res.status(403).json("Can't update account")
    }
})


//Delete User
router.delete("/:id",async (req, res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try {
            //finds the user to update and then updates the info
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account Deleted!")
        } catch (error) {
            return res.status(500).json(error);
        }
    }else{
        return res.status(403).json("Can't delete account")
    }
})



//Get User
router.get("/:id", async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const {password, updatedAt, ...other} = user._doc
        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error)
    }
})



//Follow User
router.put("/:id/follow", async (req,res)=>{
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}})
                await currentUser.updateOne({$push:{following:req.params.id}});
                res.status(200).json("Following user")
            }else{
                res.status(403).json("You already follow this users")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("Can not follow yourself")
    }
})
//Unfollow User

module.exports = router;