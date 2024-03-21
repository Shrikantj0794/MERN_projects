const express = require("express")
const app = express();

// defain route
app.get("/",(req,res)=>{
    res.status(200).send("welcome to the second project")
});

// where server runs
const PORT = 5002
app.listen(PORT, ()=>{
    console.log("surver is runing")
})