const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


//Update User
router.put("/:id",async (req, res)=>{
    if(req.body.userId === req.params.id || req.user.isAdmin){
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
        return res.status(403).json("Can not update account")
    }
})

//Delete User

//Get User

//Follow User

//Unfollow User

module.exports = router;