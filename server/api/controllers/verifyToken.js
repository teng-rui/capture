require("dotenv").config();
const jwt = require("jsonwebtoken");

//check the token req.headers.authorization
//next() with decoded userID or response 'invalid token' message

function func(req, res, next) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.myParam={message:'Valid token',userID:decoded.userID};
    } catch (error) {
        req.myParam={message:"Invalid token"};
    }
    next();

}
module.exports = func;