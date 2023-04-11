const User = require(__dirname + '/../models/captureDB.js').User;
const Plog = require(__dirname + '/../models/captureDB.js').Plog;
const fs = require('fs');

//response array of object that contains plog information,
//including _id, title, description, and first picture in thr form of base64-encoded string
async function func(req, res, next) {

    let responseList=[];

    for (plog of req.myParam) {

        
        let picRef = plog.picture[0];
        const image = fs.readFileSync(picRef);
        const imageData = Buffer.from(image).toString('base64');
        
        const data = { // create an object containing other data to send along with the image
            plogID: plog._id,
            title: plog.title,
            description: plog.description,
            imageData: imageData.toString('base64') // convert the image data to a Base64-encoded string
        };

        responseList.push(data);
      }

    res.json(responseList);
    res.end();

}

module.exports = func;