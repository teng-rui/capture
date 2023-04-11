const User = require(__dirname + '/../models/captureDB.js').User;
const Plog = require(__dirname + '/../models/captureDB.js').Plog;
const fs = require('fs');


// if user exists and user.plog exists, next() to process user's plogs

async function func(req, res, next) {

    let userID = req.myParam.userID;
    const user = await User.findOne({ _id: userID });

    if (user.plogs.length) {
        const plogs = await Plog.find({ _id: { $in: user.plogs } });
        if(plogs){
            req.myParam = plogs;
        next();
        }
        else{
            res.json({ message: "No Plog Available" });
        }
    }
    else {
        res.json({ message: "No Plog Available" });
    }
}

module.exports = func;

