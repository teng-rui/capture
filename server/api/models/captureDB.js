require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
const dbURL = process.env.DATABASE;
mongoose.connect(dbURL, { useNewUrlParser: true });

const plogSchema = new mongoose.Schema({
    title: String,
    description: String,
    picture: [{
        type: String
    }]
});
plogSchema.index({ title: 'text', description: 'text' });
const Plog = mongoose.model('Plog', plogSchema);

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    plogs: [{
        type: mongoose.ObjectId,
        ref: 'Plog'
    }]
});
const User = mongoose.model("User", userSchema);

module.exports = { Plog: Plog, User: User };
