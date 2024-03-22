const Contact = require("../model/contact-model")


const contact = async (req,res)=>{
    try {
        const data = req.body;
        console.log(req.body);
        await Contact.create(data)
        res.status(200).send("message send successfully");
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = contact;