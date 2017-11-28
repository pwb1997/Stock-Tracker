const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/portfolios', (req, res) => {
  if (req.session.uid === undefined || req.session.uname === undefined) {
    res.sendStatus(500);
    return;
  }
  User.findOne({
    'uid': req.session.uid
  }, (err, user) => {
    if (err || user === null) {
      res.sendStatus(500);
    } else {
      const portfolios = [];
      for (const each of user.portfolios) {
        const portfolio = {};
        portfolio.name = each.name;
        portfolio.colorTag = each.colorTag;
        portfolios.push(portfolio);
      }
      res.send(portfolios);
    }
  });
});

router.post('/add-portfolio', (req, res) => {
  if (req.session.uid === undefined || req.session.uname === undefined) {
    res.sendStatus(500);
    return;
  }
  const portfolio = new Portfolio();
  portfolio.set({
    name: req.body.name,
    description: req.body.description,
    colorTag: req.body.color,
    stocks: [],
  });
  User.findOne({
    'uid': req.session.uid
  }, (err, user) => {
    if (err || user === null) {
      res.sendStatus(500);
    } else {
      user.portfolios.push(portfolio);
      user.save((err) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.send("new portfolio created");
          console.log(date(), "New Portfolio Created");
        }
      });
    }
  });
});

module.exports = router;
