require("dotenv").config();
const express = require("express")
const app = express();
const router = require("./router/contact-route")
const connectDB = require("./utils/db")

// must write this line for using json
app.use(express.json()) 


app.use("/api", router)

// whenever database connection is successfully then it server work or start
connectDB().then(()=>{
const PORT = 8080;
app.listen(PORT,(req,res)=>{
    console.log(`server is started ${PORT}`)
})
});