const express = require('express');
const getSearchPlogs=require(__dirname+'/../controllers/getSearchPlogs.js');
const resPlogs=require(__dirname+'/../controllers/resPlogs.js');
// const User = require(__dirname + '/../models/captureDB.js').User;
// const signToken=require(__dirname+'/../controllers/signToken.js');


let router = express.Router();

router.get('/:id', getSearchPlogs,resPlogs);

module.exports = router;