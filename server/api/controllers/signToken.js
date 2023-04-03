require("dotenv").config();
const jwt = require("jsonwebtoken");

function func(req,res){
    const token = jwt.sign({userID:req.myParam},process.env.SECRET);
    res.json({message:'tokenSigned',token:token});

}
module.exports=func;
