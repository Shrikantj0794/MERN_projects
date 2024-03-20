const {schema, model} = require('mongoose');

const contactschema = new schema({
    username: {type:String, require:true},
    email: {type:String, require:true},
    message: {type:Number, require:true},
});

// create a model or collection

const Contact = new model("Contact", contactschema);

module.exports = Contact;