const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        maxlength : 10
    },
    company : {
        type : String,
        required : true
    },
    number : {
        type : Number
    }
});

const car = mongoose.model("car",carSchema);

module.exports = car;