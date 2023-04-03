const express = require('express');
const register=require(__dirname+'/../controllers/register.js');
const signToken=require(__dirname+'/../controllers/signToken.js');

let router = express.Router();

router.post('/', register,signToken);

module.exports = router;