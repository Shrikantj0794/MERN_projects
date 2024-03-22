const mongoose = require("mongoose")
const URI = process.env.MONGODB_URI;


const connectDB = async()=>{
    try {
        await mongoose.connect(URI)
        console.log("connection succussfully")
    } catch (error) {
        console.error("Database not connect")
        process.exit(0);
    }
}

module.exports = connectDB;