const express  = require("express");
const router = express.Router();


router.get("/api/list",(req,res) =>{
    res.send([
        {
            name:'a',
            age: 1
        },
        {
            name:'b',
            age: 1
        },
    ])
})

module.exports = router;