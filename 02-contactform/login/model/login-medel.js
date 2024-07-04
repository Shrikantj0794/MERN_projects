const mongoose = require("mongoose")

const loginschema = new mongoose.Schema({
    username: {type:String, require:true},
    password: {type:String, require:true}
})

const User = mongoose.model("User", loginschema);

module.exports = User;