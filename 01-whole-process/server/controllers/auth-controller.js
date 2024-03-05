const register = (req,res)=>{
    res
    .status(200)
    .send("welcom to the register page")
};

const login = (req,res)=>{
    res
    .status(200)
    .send("welcom to login form using router");
}

module.exports = {register, login}