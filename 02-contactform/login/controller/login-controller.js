const User = require("../model/login-medel")


const loginController = async (req,res)=>{
    try {
        const data = req.body;
        console.log(data)
        await User.create(data)
        res.status(200).json({message: "login successfully"})
    } catch (error) {
        res.status(400).json({message: "login is not successfully"})   
    }
}

module.exports = loginController;