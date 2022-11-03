const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        maxlength : 10
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true,
        maxlength : 10
    },
    role : {
        type : String,
        default : "user"
    }
});

const userModel = mongoose.model("UserList",userSchema);

module.exports = userModel;