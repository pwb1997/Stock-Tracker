require('./db');
const mongoose = require('mongoose');
const PortfolioBook = mongoose.model('PortfolioBook');
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const app = express();
const GoogleAuth = require('google-auth-library');
const auth = new GoogleAuth;
const gapiId = '593544571220-g6tdi03f807ajije2241ekc1a303sokl.apps.googleusercontent.com';
const client = new auth.OAuth2(gapiId, '', '');
const PORT = process.env.PORT || 4200;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionOptions = {
  secret: 'secret for signing session id',
  saveUninitialized: false,
  resave: false,
};

app.use(session(sessionOptions));
app.use(favicon(__dirname + '/dist/favicon.ico'));
app.use(express.static(__dirname + '/dist'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: false
}));

function date() {
  return '[' + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ']';
}

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.post('/signin', (req, res) => {
  client.verifyIdToken(
    req.body.idtoken,
    gapiId,
    function (e, login) {
      if (!e) {
        const payload = login.getPayload();
        const userid = payload['sub'];
        const username = payload['name'];
        req.session.uname = username;
        req.session.uid = userid;
        console.log(date(), username, 'logged in');
        res.send(null);
      }
    });
});

app.post('/signout', (req, res) => {
  if (req.body.logout === 'true') {
    console.log(date(), req.session.uname, 'logged out');
    req.session.uid = undefined;
    req.session.uname = undefined;
    res.send(null);
  }
});

console.log(date(), 'server started at port', PORT);
app.listen(4200);
