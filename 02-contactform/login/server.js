const express = require("express")
const app = express();
const loginroute = require("./router/login-route")
const connectDB = require("./utils/db")

app.use(express.json()); 

app.use("/api",loginroute)


connectDB().then(()=>{
const port = 8090;
app.listen(port,()=>{
    console.log("server is running")
})
})