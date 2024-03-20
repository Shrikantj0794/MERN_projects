const errorMiddleware = (err,req,res,next) => {
    const status = err.status | 500;
    const message = err.message | "BACKEND ERROR";
    const extadetails = err.extadetails | "Error from backend";

    return res.status(status).json({message, extadetails})
}

module.exports = errorMiddleware