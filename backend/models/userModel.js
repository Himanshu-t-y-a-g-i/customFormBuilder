const mongoose = require("mongoose");

const schema = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    username: String,
    password: String
})

const userModel = mongoose.model("userdetail", schema);

module.exports = { userModel };