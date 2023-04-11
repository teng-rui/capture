const User = require(__dirname + '/../models/captureDB.js').User;
const bcrypt = require("bcrypt");

// check if user exsits and compare bcrypt password with database,
// if comparison returns true, response token,
// otherwise response error message.

async function func(req, res,next) {
  let username = req.body.username;
  let password = req.body.password;

  const user = await User.findOne({ username });
  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      req.myParam = user._id;
      next();
    }
    else {
      res.json({ message: "Incorrect username or password" });
    }
  }
  else {
    res.json({ message: "Incorrect username or password" });
  }
}

module.exports = func;