const express = require("express")
const app = express();
const router = require("./router/auth-router")

// use router in server.js
app.use("/api", router);

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("server is runing");
});

// maintain clean and less code 