const passport = require("passport");

module.exports = (app) => {
    
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    //the difference in this authenticate call is that we have the code now in the url, passport will automatically grab code for usw
    //instead of redirecting user to the conscent screen. The passport middleware callback is fired before we even get to this routes 
    //actual callback
    app.get("/auth/google/callback",
        passport.authenticate('google'),
        function(req, res) {
            if(req.user) {
                res.redirect('/');
            } else {
                res.redirect('/login');
            }
        }
    )

    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

};