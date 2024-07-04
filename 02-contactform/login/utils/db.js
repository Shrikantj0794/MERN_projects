const mongoose = require("mongoose")

const URI = "mongodb+srv://shrikantj2001:Shrikantj1729@cluster0.esagf1g.mongodb.net/loginform?retryWrites=true&w=majority&appName=Cluster0"

const connection = async (req,res)=>{
    try {
        await mongoose.connect(URI)
        console.log("connect to db")
    } catch (error) {
        console.log("NOT connect to db")
    }
}

module.exports = connection;
