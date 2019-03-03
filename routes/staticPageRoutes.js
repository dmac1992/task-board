module.exports = (app) => {

    app.get("/", (req, res) => {
        //if logged in serve react app
        //if not logged in static landing
        if(req.user) {
            if(process.env.NODE_ENV !== "production") {
                res.redirect(process.env.REACT_URI)
            }
            res.sendFile(process.env.REACT_URI);
        } else {
            res.sendFile(`${global.appRoot}/static/landing.html`); // Does  this need an app root, since it is executed in index file??
        }
    })

    app.get("/login", (req, res) => {
        if(req.user) {
            res.sendFile(`${global.appRoot}/client/public/index.html`);
        } else {
            res.sendFile(`${global.appRoot}/static/login.html`);
        }
       
    })

    app.get("/register", (req, res) => {
        if(req.user) {
            res.sendFile(`${global.appRoot}/client/public/index.html`);
        } else {
            res.sendFile(`${global.appRoot}/static/register.html`);
        }
        
    })

}