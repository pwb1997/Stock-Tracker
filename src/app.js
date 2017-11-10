const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sessions = {};

// middlewares
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
    extended: false
}));

// use alphavantage api to update stock data, API key: SWXLO3YDPZQR9BB6
function updateData(req, res, next) {
    // (still learning how to use the api, will fill it up during the weekend)
    // for each p of portfolios
    //      for each s of stocks
    //          update current stock price using alphavantage api
    //          calculate the return or loss
    //      calculate the total return or loss of the porfolio
    next();
}
app.use(updateData);

// route handler

// test add porfolio and delete porfolio
// login not implemented yet
app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/signin", (req, res) => {
    res.render("signin");
});

app.post("/signin", (req, res) => {
    // to be implemented
    res.redirect("/home");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", (req, res) => {
    // to be implemented
    res.redirect("/signin");
});

app.get("/:portfolioId", (req, res) => {
    //to be implemented
});

app.get("/:portfolioId/:stockId", (req, res) => {
    // to be implemented
});

app.get("/add-portfolio", (req, res) => {
    req.render("addPortfolio");
});

app.post("/add-portfolio", (req, res) => {
    // to be implemented
    req.redirect("/home");
});

app.get("/:portfolioId/add-stock", (req, res) => {
    req.render("addStock");
});

app.post("/:portfolioId/add-stock", (req, res) => {
    // to be implemented
    req.redirect("/:portfolioId");
});

// to be implemented
console.log("Listening PORT: " + (process.env.PORT || 3000));
app.listen(process.env.PORT || 3000);