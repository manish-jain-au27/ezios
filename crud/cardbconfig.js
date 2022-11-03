const mongoose = require("mongoose");

async function initdbcar(){
    try {
        await mongoose.connect(process.env.mongoURL,{dbname : "cardb"});
        console.log("Connected to our CAR DB");
    } catch (error) {
        console.log("Error in connecting",error);
    }
}

module.exports = initdbcar;