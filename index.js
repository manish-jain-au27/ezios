const express = require ("express");
const initdb = require ("./initdb");
const dotenv = require("dotenv");
const router = require("./router/user");
const cookieparser = require("cookie-parser");
const postrouter = require("./router/post");
const app = express ();
initdb();
require("dotenv").config();
app.use("/",router)
app.use(cookieparser);
app.use("/",postrouter);



app.listen(8000,()=>{
    console.log("Server is running on port 8000");
});