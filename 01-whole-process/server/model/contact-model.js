const mongoose = require('mongoose')

// create schema 
const contactschema = new mongoose.Schema({
    username: {type:String, require:true},
    email: {type:String, require:true},
    message: {type:String, require:true}
});

// create a model or collection
const Contact = new mongoose.model("Contact", contactschema)

module.exports = Contact