const express = require('express');
const verifyToken=require(__dirname+'/../controllers/verifyToken.js');
const User = require(__dirname + '/../models/captureDB.js').User;


let router = express.Router();

router.get('/', verifyToken,function(req,res){
    res.json(req.myParam);
});

module.exports = router;