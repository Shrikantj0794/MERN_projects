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

const login = async (req,res)=>{
    try {
        const {email, password}= req.body;

        const loginuserExist = await User.findOne({email});

            if (!loginuserExist) {
                return res.status(404).json({msg: "Invalid Credentials"})
            }
        // Bcrypt the password and compare it
        const user = await loginuserExist.comparepass(password);
            
            if (user) {
                   return res.status(200)
                    .json({msg: "Login Successfully" , 
                    token: await loginuserExist.generateToken(),
                    userId: loginuserExist._id.toString(),
                })
            }else{
                res.status(400)
                    .json({msg: "Invalid Password or Email"})
            }

        }catch (error) {
            console.error(error);
        }
}

module.exports = {register, login}