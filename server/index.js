//jshint esversion:6
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//any request start with /uploads is public
app.use('/uploads', express.static("uploads"));
//to seccessfully response to cross-origin request
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    if ('OPTIONS' == req.method) {
         res.send(200);
     } else {
         next();
     }
    });


// app.use('/',require(__dirname+'/api/routes/main.js'));
app.use('/register',require(__dirname+'/api/routes/register.js'));
app.use('/login',require(__dirname+'/api/routes/login.js'));
app.use('/isAuthenticated',require(__dirname+'/api/routes/verifyToken.js'));
app.use('/plog',require(__dirname+'/api/routes/plog.js'));
// app.use('/plog/:id',require(__dirname+'/api/routes/post.js'));

app.listen(4000, function () {
    console.log("server started");
});




// async function getUserPost(username) {
//     const user = await User.findOne({ username: username });
//     if (user.postss.length) {
//         const posts = await Post.find({ _id: { $in: user.posts } });
//         return posts;
//     }
//     else {
//         return undefined;
//     }
// }

// async function getPost() {
//     // return random posts;
//     return 0;
// }

// app.route('/plan')
//     .get(async function (req, res) {
//         if (req.isAuthenticated()) {
//             const plans = await getPlan(req.session.passport.user);
//             let [dayShort, dayDisplay] = date.getToday();
//             if (plans) {
//                 res.render("todolist.ejs", { items: plans, dayDisplay: dayDisplay });
//             }
//             else {
//                 res.render("todolist.ejs", { items: [{ content: 'Create your first plan.', id: 0 }], dayDisplay: dayDisplay });
//             }

//         }
//         else {
//             res.render('home.ejs');
//         }
//     })
//     .post(async function (req, res) {
//         if (req.isAuthenticated()) {
//         let content = req.body.newItem;
//         let username = req.session.passport.user;

//         const plan = new Plan({
//             content: content,
//         });
//         plan.save().then(
//             User.findOneAndUpdate({ username: username }, { $push: { plans: plan._id } }, function (err) {
//                 if (!err) {
//                     res.redirect('/plan');
//                 }
//             }));
//         }
//         else
//         {
//             res.render('home.ejs');
//         }

//     });
