const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userSchema = new mongoose.Schema({
    username: {type:String, require:true},
    email: {type:String, require:true},
    phone: {type:Number, require:true},
    password: {type:String, require:true},
    isAdmin: {type:Boolean, default:false}
});

// hashing password
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
});

//compare password
userSchema.methods.comparepass = async function (password){
    return  await bcrypt.compare(password, this.password)
}
userSchema.methods.generateToken = async function (){
    try {
         return jwt.sign({
            userId: this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRECT_KEY,
        {
            expiresIn: "30d"
        }
        );
    } catch (error) {
        console.error(error);   
    }
}


const User = new mongoose.model("User", userSchema)
module.exports = User