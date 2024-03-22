const contact = (req,res)=>{
    try {
        const data = req.body;
        console.log(req.body)
        res.status(200).json({message: req.body})
    } catch (error) {
        res.status(400).send("error");
    }
}

module.exports = contact;