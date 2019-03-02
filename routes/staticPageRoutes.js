module.exports = (app) => {

    app.get("/", (req, res) => {
        //if logged in serve react app
        //if not logged in static landing
        res.sendFile(`${global.appRoot}/static/landing.html`); // Does  this need an app root, since it is executed in index file??

    })

    app.get("/login", (req, res) => {
        res.sendFile(`${global.appRoot}/static/login.html`);
    })

    app.get("/register", (req, res) => {
        res.sendFile(`${global.appRoot}/static/register.html`);
    })

}