const express = require("express")
const app = express();
const router = require("./router/contact-route")
app.use(express.json())

app.use("/api", router)


const PORT = 8080;
app.listen(PORT,(req,res)=>{
    console.log(`server is started ${PORT}`)
})