const passport = require("passport");

module.exports = (app) => {
    
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    //just simply for redirecting???
    app.get("/auth/google/callback",
        passport.authenticate('google', { failureRedirect: "/login"}),
        function(req, res) {
            res.redirect("/login");
        }
    )

};