const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require('cookie-session');
const path = require('path');
const passport = require('passport');
require("dotenv").config();

if(process.env.NODE_ENV !== "production") {
    require('dotenv').load()
}

const keys = require("./config/keys");

//set root, maybe find a fix for this
global.appRoot = path.resolve(__dirname);

//mongoose models
require("./models/User");

//passport services
require("./services/passport-google");

//connect to database
mongoose.connect(keys.mongoURI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', function() {
    console.log("database successfully connected");
})

//cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));
//initi passport
app.use(passport.initialize());
app.use(passport.session());


//now all references to this folder are not considred special routes, just pulls the file
//instead. Otherwise would have to write 4000 routes for each resource.
app.use(express.static('static'));


//import in routes
require('./routes/staticPageRoutes')(app);
require('./routes/authenticateRoutes')(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

