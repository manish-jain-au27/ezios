//Verification of tokens
const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next)=>{
    const token = req.cookie.jwtToken
    if(token){
        try {
            const userdata = jwt.verify(token,process.env.SECRET)
            next();
        } catch (error) {
            res.status(401).send({MSG : "Invalid User"});
        }
    }
    else{
        res.status(401).send({MSG : "Invalid User"});
    }
}

module.exports = authMiddleware;