const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Portfolio = mongoose.model('Portfolio');

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
  User.findOne({
    'uid': req.session.uid
  }, (err, user) => {
    if (err || user === null) {
      res.sendStatus(500);
    } else {
      for (const each of user.portfolios) {
        if (each.name === req.body.name) {
          res.sendStatus(400);
          return;
        }
      }
      const portfolio = new Portfolio();
      portfolio.set({
        name: req.body.name,
        description: req.body.description,
        colorTag: req.body.color,
        stocks: [],
      });
      user.portfolios.push(portfolio);
      user.save((err) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.send();
        }
      });
    }
  });
});

module.exports = router;
