const mongoose = require("mongoose");

async function initdb(){
    try {
        await mongoose.connect(process.env.mongoURL,{dbname : "UserData"});
        console.log("Connected to our DB");
    } catch (error) {
        console.log("Error in connecting",error);
    }
}

module.exports = initdb;