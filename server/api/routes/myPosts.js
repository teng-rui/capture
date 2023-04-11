const express = require('express');
const getMyPlogs=require(__dirname+'/../controllers/getMyPlogs.js');
const resPlogs=require(__dirname+'/../controllers/resPlogs.js');
const verifyToken=require(__dirname+'/../controllers/verifyToken.js');
// const User = require(__dirname + '/../models/captureDB.js').User;
// const signToken=require(__dirname+'/../controllers/signToken.js');


let router = express.Router();

router.get('/', verifyToken, getMyPlogs,resPlogs);

module.exports = router;

