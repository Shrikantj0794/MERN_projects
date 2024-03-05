// require express from express
const express = require("express")

// create server using express
const app = express();
app.get("/", (req,res)=>{
    res.status(200),send("welcome");
});

// seeing our website on which brawser and port for local host,
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("server is runing");
});