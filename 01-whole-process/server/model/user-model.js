const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type:String, require:true},
    email: {type:String, require:true},
    phone: {type:Number, require:true},
    password: {type:boolean, require:true}
});

const user = new mongoose.model("User", userSchema)

module.exports = user