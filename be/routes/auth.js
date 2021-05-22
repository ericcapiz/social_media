const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//Register
router.post("/register",async (req,res) =>{
    

    try {
        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = await new User({
            username: req.body.username,
            email:req.body.email,
            password: hashedPassword,
        })

        //save user to db
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (error) {
        console.log("can not create user",error)
    }
})

//Login
router.post("/login", async (req,res) => {
    try {
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json("User Not Found");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Wrong Pasword");

        res.status(200).json(user)
    } catch (error) {
        console.log("login error", error)
    }
})

module.exports = router;