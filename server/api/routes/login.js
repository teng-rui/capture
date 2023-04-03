const express = require('express');
const login=require(__dirname+'/../controllers/login.js');
const User = require(__dirname + '/../models/captureDB.js').User;
const signToken=require(__dirname+'/../controllers/signToken.js');


let router = express.Router();

router.post('/', login,signToken);

module.exports = router;