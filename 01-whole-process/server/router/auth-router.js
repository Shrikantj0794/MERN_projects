const express = require("express");
const router = express.Router();

// first way of root or path define
router.get("/register", (req,res)=>{
    res
    .status(200)
    .send("welcom to registration form using router");
});

// second way of (most prefer)
router.route("/login").get((req,res)=>{
    res
    .status(200)
    .send("welcom to the login page")
})

module.exports = router
