const User = require("../model/user-model")
const bcrypt = require("bcrypt")
//--------------------
// Registration Logic
//--------------------

//--------------------
// user Registration Logic
//--------------------

// 1.Get registration data.
// 2.Check Email existence
// 3.Hash Password
// 4.Create User
// 5.Save to DB
// 6.Respond

const register = async (req,res)=>{
    try {
        const {username, email, phone, password}= req.body

        // 2.Check Email existence
        const userExist = await User.findOne({email:email})
        if (userExist) {
            return res.status(401).json({message: "User already exist"})
        }
        

        const userCreate = await User.create({username, email, phone, password})
        
        res.status(200)
        .json({msg:userCreate, 
                token: await userCreate.generateToken(),
                userId: userCreate._id.toString(),
                })
        

    } catch (error) {
        res
        .status(401)
        .json("internal server error")
    }
};

const login = (req,res)=>{
    try {
        console.log(req.body)
        res
        .status(200)
        .json({message: req.body});
        
    } catch (error) {
        res
        .status(401)
        .json("internal server error");   
    }
}

module.exports = {register, login}