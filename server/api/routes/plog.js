

const express = require('express');
const uploadPlog=require(__dirname+'/../controllers/uploadPlog.js');
const uploadImage=require(__dirname+'/../controllers/uploadImage.js');

let router = express.Router();

router.post('/', uploadImage.any('picFiles'),uploadPlog,function(req,res){
    res.json(req.myParam);
});
module.exports = router;