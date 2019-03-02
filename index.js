const express = require("express");
const app = express();
const mongoose = require("mongoose");

const keys = require("./config/keys");

//set root, maybe find a fix for this
const path = require('path');
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


//now all references to this folder are not considred special routes, just pulls the file
//instead. Otherwise would have to write 4000 routes for each resource.
app.use(express.static('static'));


//import in routes
require('./routes/staticPageRoutes')(app);
require('./routes/authenticateRoutes')(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

