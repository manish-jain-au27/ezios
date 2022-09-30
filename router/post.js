const express = require('express');
const postmodel = require("../controller/post");
const postrouter = express.Router();
const {
    writepost,
    updatepost,
    deletepost

}= require("../controller/post");

postrouter.post("writepost",writepost);
postrouter.post("updatepost",updatepost);
postrouter.post("deletepost",deletepost);

module.exports = postrouter;
