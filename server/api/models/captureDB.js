const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

mongoose.set('strictQuery', false);
const dbURL = "mongodb+srv://ruiteng:TENG707298rui@cluster0.lpat5su.mongodb.net/captureDB";
mongoose.connect(dbURL, { useNewUrlParser: true });

const plogSchema = new mongoose.Schema({
    title: String,
    description:String,
    picture:[{ 
        type: String
     }]
});
const Plog = mongoose.model('Plog', plogSchema);

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password:  { type: String, required: true},
    plogs: [{
        type: mongoose.ObjectId,
        ref: 'Plog'
    }]
});
// userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);

module.exports={Plog:Plog,User:User};