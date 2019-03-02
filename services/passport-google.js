const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");


const keys = require("../config/keys");

//mongoose will automatically look for plural lowercase form?
const User = mongoose.model('users'); // access to users table;

//hey passport use this strat

//Needs client id and secretd
passport.use(new GoogleStrategy({
        clientID: keys.googleOauthClient,
        clientSecret: keys.googleOauthSecret,
        callbackURL: '/auth/google/callback'
    },  async (accessToken, refreshToken, profile, done) => {
        
        
        const existingUser = await User.findOne({ google_id: profile.id });
        
        //save to db if doesnt exist
        
    }


));

