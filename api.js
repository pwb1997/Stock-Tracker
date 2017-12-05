const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const finance = require('yahoo-finance');
const User = mongoose.model('User');
const Portfolio = mongoose.model('Portfolio');
const Stock = mongoose.model('Stock');

function date() {
  return '[' + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ']';
}

// constructer, hof, and functions to retrieve data from API
function retrvHist(symbol, y, m, d) {
  const date = new Date(y, m - 1, d);
  const to = date.toISOString().slice(0, 10);
  date.setDate(date.getDate() - 3);
  const from = date.toISOString().slice(0, 10);
  return new Promise((resolve) => {
    finance.historical({
        symbol: symbol,
        from: from,
        to: to,
      },
      function (err, quotes) {
        if (quotes[0] === undefined || err) {
          resolve(null);
        }
        resolve(quotes[quotes.length - 1]);
      }
    );
  });
}

router.get('/del-portfolio/:pslugs', (req, res) => {
  console.log(req.params.pslugs);
  User.findOne({
    'uid': req.session.uid
  }, (err, user) => {
    if (err || user === null) {
      res.sendStatus(500);
    } else {
      for (const i in user.portfolios) {
        if (user.portfolios[i].name === req.params.pslugs) {
          user.portfolios.splice(i, 1);
        }
      }
      user.save((err) => {
        if (err) {
          res.sendStatus(500);
          return;
        }
        res.send('success');
      });
    }
  });
});

router.get('/portfolios', (req, res) => {
  if (req.session.uid === undefined || req.session.uname === undefined) {
    console.log(date(), 'Session error');
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
    console.log(date(), 'Session error');
    res.sendStatus(500);
    return;
  }
  User.findOne({
    'uid': req.session.uid
  }, (err, user) => {
    if (err || user === null) {
      console.log(date(), 'Session error');
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
      portfolio.save(((err) => {
        if (err) {
          console.log(date(), 'DB error');
          res.sendStatus(500);
        } else {
          user.portfolios.push(portfolio);
          user.save((err) => {
            mongoose.connection.collections['portfolios'].drop();
            if (err) {
              console.log(date(), 'DB error');
              res.sendStatus(500);
            } else {
              res.send();
            }
          });
        }
      }));
    }
  });
});

router.get('/portfolios/:pslugs', (req, res) => {
  console.log(req.params);
});

router.post('/:pslugs/add-stock', (req, res) => {
  if (req.session.uid === undefined || req.session.uname === undefined) {
    console.log(date(), 'Session error');
    res.sendStatus(500);
    return;
  }

  console.log(req.params);
  User.findOne({
    'uid': req.session.uid,
    'portfolios.name': req.params.pslugs,
  }, (err, user) => {
    let portfolio;
    for (const p of user.portfolios) {
      if (p.name === req.params.pslugs) {
        portfolio = p;
        break;
      }
    }
    const symbol = req.body.symbol.toUpperCase();
    const share = parseInt(0 + req.body.share);
    const basis = parseInt(0 + req.body['cost basis']);
    async function f() {
      const valid = await finance.quote(symbol);
      if (!valid) {
        res.sendStatus(402);
        return;
      }
      for (const s of portfolio.stocks) {
        if (s.symbol === symbol) {
          res.sendStatus(401);
          return;
        }
      }
      const stock = new Stock();
      stock.set({
        symbol: symbol,
        share: share,
        costBasis: basis,
      });
      stock.save((err) => {
        if (err) {
          res.sendStatus(500);
          return;
        }
        portfolio.stocks.push(stock);
        mongoose.connection.collections['stocks'].drop();
        portfolio.save((err) => {
          if (err) {
            res.sendStatus(500);
            return;
          }
          user.save((err) => {
            if (err) {
              res.sendStatus(500);
              return;
            }
            res.send();
          });
        });
      });
    }
    f();
  });

});

module.exports = router;
