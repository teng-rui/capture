const { User } = require("../models/captureDB");
const jwt = require("jsonwebtoken");

const Plog = require(__dirname + '/../models/captureDB.js').Plog;

async function uploadPlog(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        const decoded = jwt.verify(token, process.env.SECRET);
        const userID = decoded.userID;

        const plog = new Plog({
            title: req.body.title,
            description: req.body.description,
           
            picture: req.files.map((value) => value.path)
        });
        await plog.save();
        await User.findByIdAndUpdate(userID, { $push: { plogs: plog._id } });
        req.myParam = { message: 'successfully posted', plogID: plog._id, userID: userID };
    }
    else{
        req.myParam = { message: 'please signin first'};
    }
    next();

}

module.exports = uploadPlog;