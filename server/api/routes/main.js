const express = require('express');
const getPlogs=require(__dirname+'/../controllers/getPlogs.js');
const resPlogs=require(__dirname+'/../controllers/resPlogs.js');
// const User = require(__dirname + '/../models/captureDB.js').User;
// const signToken=require(__dirname+'/../controllers/signToken.js');


let router = express.Router();

router.get('/', getPlogs,resPlogs);

module.exports = router;