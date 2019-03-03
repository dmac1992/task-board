const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

//mongoose will automatically look for plural lowercase form?
const User = mongoose.model('users'); // access to users table;


passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});


//Needs client id and secretd
passport.use(new GoogleStrategy({
        clientID: keys.googleOauthClient,
        clientSecret: keys.googleOauthSecret,
        callbackURL: '/auth/google/callback'
    },  async (accessToken, refreshToken, profile, done) => {
        
        try {
            const existingUser = await User.findOne({ google_id: profile.id });
            //if not already registered
            if (existingUser === null) {
                
                const newUser = await new User({
                    google_id: profile.id,
                    email: profile.emails[0].value,
                    password: null,
                    user_name: profile.displayName
                })
                .save()

                done(null, newUser);
            } else {
                console.log("already have a user:");
                done(null, existingUser);
            }
            //if already registered
            
        } catch(error) {
            //redirect
            console.log(error);
            done();
        }
        
        
        
    }


));

