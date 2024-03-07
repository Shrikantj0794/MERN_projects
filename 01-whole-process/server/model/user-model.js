const mongoose = require('mongoose')
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    username: {type:String, require:true},
    email: {type:String, require:true},
    phone: {type:Number, require:true},
    password: {type:String, require:true},
    isAdmin: {type:Boolean, default:false}
});


userSchema.pre("save", async function(next){
    const user = this;
    
    if (!user.isModified("password")) {
        next();
    }
    
    try {
        const saltRound = 10;
        const hash_Password = await bcrypt.hash(user.password,saltRound);
        user.password = hash_Password;
    } catch (error) {
        next(error);
    }
})

const User = new mongoose.model("User", userSchema)
module.exports = User