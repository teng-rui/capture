const User = require(__dirname + '/../models/captureDB.js').User;
const bcrypt = require("bcrypt");

async function func(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.json({ message: "User already exists" });
    }
    else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        user.save()
            .then((saveDoc) => {
                req.myParam = saveDoc._id;
                next();
            })
            .catch(err => {
                res.json({ message: err.message })

            });
    }


}

module.exports = func;