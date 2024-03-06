const register = (req,res)=>{
    try {
        console.log(req.body)

        res
        .status(200)
        .json(req.body)
        
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
        .json(req.body);
        
    } catch (error) {
        res
        .status(401)
        .json("internal server error");   
    }
}

module.exports = {register, login}