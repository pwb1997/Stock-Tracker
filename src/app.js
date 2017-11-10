const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sessions = {};

// middlewares to be implemented

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get("/signin", (req, res) => {
    req.render("signin");
});

app.post("/signin", (req, res) => {
    // to be implemented
    res.redirect("/home");
});

app.get("/signup", (req, res) => {
    req.render("signup");
});

app.post("/signup", (req, res) => {
    // to be implemented
    res.redirect("/signin");
});

app.get("/home", (req, res) => {
    req.render("home");
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
console.log(process.env.PORT || 3000);
app.listen(process.env.PORT || 3000);