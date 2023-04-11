const User = require(__dirname + '/../models/captureDB.js').User;
const Plog = require(__dirname + '/../models/captureDB.js').Plog;
const fs = require('fs');


//return random 16 plogs

async function func(req, res, next) {

    const plogs = await Plog.find().limit(16);
    if (plogs) {
        req.myParam = plogs;
        next();
    }
    else {
        res.json({ message: "No Plog Available" });
    }
}

module.exports = func;