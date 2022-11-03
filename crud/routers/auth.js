const express =  require("express");
const router = express.Router();
const {signupUser,loginUser,logoutUser, getsignup} = require("../controllers/auth");



router.get("/",getsignup);//LAST

router.post("/signup",signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);


module.exports = router;