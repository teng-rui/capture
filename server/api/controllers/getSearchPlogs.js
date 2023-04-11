const User = require(__dirname + '/../models/captureDB.js').User;
const Plog = require(__dirname + '/../models/captureDB.js').Plog;
const fs = require('fs');


async function func(req, res, next) {
    let searchText = req.params.id;
    try {
        const plogs = await Plog.find({ $text: { $search: searchText } });
        if (plogs.length) {
            req.myParam = plogs;
            next();
        }
        else {
            res.json({ message: "Nothing Found" });
        }
    } catch (err) {
        console.error(err);
        res.json({ message: 'An error occurred while searching' });
    }





}

module.exports = func;