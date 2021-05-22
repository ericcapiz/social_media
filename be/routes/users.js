const router = require('express').Router();

router.get("/",(req,res) =>{
    res.send("user api");
})

module.exports = router;