const userModel = require("../models/user");
const jwt =  require("jsonwebtoken");
const path=require('path');

const getsignup = ("/",(req,res)=>{// LAST
    let pat = path.join(__dirname, "../");
    res.sendFile(`${pat}public/index.html`);
});

signupUser = async(req,res)=>{
 const {username,email,password,phoneNumber} = req.body;
 try {
    const user = await userModel.create({username,email,password,phoneNumber});
    console.log(user);
    res.status(200).send({MSG : "User added"});
 } catch (error) {
    res.status(500).send({MSG : "Internal Error", error});
 }
}

loginUser= async(req,res)=>{
 const {email,password} = req.body;
 try {
    const user = await userModel.findOne({email,password});
    if(user){
        const userPayload = {email};
        const token = jwt.sign(userPayload,process.env.SECRET,{algorithm: 'HS384', expiresIn: '1d'});
        res.cookie("jwtToken",token,{maxAge : 90000})
        res.status(200).send({MSG : "Login Successfully"})
    }
    else{
        res.status(401).send({MSG : "Unauthorized User"});
    }
 } catch (error) {
    res.status(500).send({MSG : "Internal Error"});
 }
}

logoutUser= async(req,res)=>{
    res.cookie("jwtToken","",{maxAge: 3000});
    res.status(200).send({MSG : "Logged Out"});
}

module.exports = {
    signupUser,
    loginUser,
    logoutUser,
    getsignup
}