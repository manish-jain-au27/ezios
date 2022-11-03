const express =  require("express");
const initdbcar = require("./cardbconfig");
const initdb = require("./dbconfig");
const router = require("./routers/auth");
const carRouter = require("./routers/car");
const cookieparser = require("cookie-parser");
const app = express();
require("dotenv").config();

initdbcar();
initdb();
app.use(express.json());//to acccpet json type data from client
app.use(express.urlencoded({extended : true}));// to accept formData from client
app.use(cookieparser());
app.use(express.static("public"));


app.use("/",router);
app.use("/",carRouter);

app.listen(8000,()=>{
    console.log("Server Started at 8000");
});