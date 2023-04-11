const User = require(__dirname + '/../models/captureDB.js').User;
const Plog = require(__dirname + '/../models/captureDB.js').Plog;
const fs = require('fs');


async function func(req, res, next) {

    let plogID = req.params.id;
    Plog.findOne({ _id: plogID.slice(1) })
    .then(function(plog){
        if (plog) {

            let pics = [];
            for (let picRef of plog.picture) {
                const image = fs.readFileSync(picRef);
                const imageData = Buffer.from(image).toString('base64');
                pics.push(imageData.toString('base64'));
            }
    
    
            const data = { // create an object containing other data to send along with the image
                title: plog.title,
                description: plog.description,
                pics: pics// convert the image data to a Base64-encoded string
            };
            req.myParam = data;
            next();
        }
        else {
            res.json({ message: "No Plog Available" });
        }
    })
    .catch(function(err){
        res.json({ message: err.message });
    })

    
}

module.exports = func;

