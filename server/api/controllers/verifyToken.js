require("dotenv").config();
const jwt = require("jsonwebtoken");

function func(req, res, next) {
    const token = req.headers.authorization;
    console.log(token);
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.myParam={message:'Valid token',userID:decoded.userID};
    } catch (error) {
        req.myParam={message:"Invalid token"};
    }
    next();

}
module.exports = func;