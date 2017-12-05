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
function retrvHist(symbol, date) {
  return new Promise((resolve) => {
    finance.historical({
        symbol: symbol,
        from: date,
        to: date,
      },
      function (err, quotes) {
        if (quotes[0] === undefined || err) {
          resolve(null);
        }
        resolve(quotes[0].close);
      }
    );
  });
}

function round2(num) {
  return parseFloat(Math.round(num * 100) / 100).toFixed(2);
}

async function calcStock(symbol, share, basis, i) {
  const stock = {};
  const date = new Date();
  date.setDate(date.getDate() - 7);
  const d = date.toLocaleString("en-US", {
    timeZone: "America/New_York"
  });
  const currentQuote = await finance.quote(symbol);
  const preweekQuote = await retrvHist(symbol, d.slice(6, 10) + d.slice(0, 2) + d.slice(3, 5));
  stock.symbol = symbol;
  stock.share = share;
  stock.basis = basis;
  stock.current = currentQuote.price.regularMarketPrice;
  stock.previous = currentQuote.summaryDetail.previousClose;
  stock.preweek = preweekQuote;
  stock.value = stock.share * stock.current;
  stock.dchange = stock.current - stock.previous;
  stock.dchangep = stock.dchange / stock.previous * 100;
  stock.wchange = stock.current - stock.preweek;
  stock.wchangep = stock.wchange / stock.preweek;
  stock.tchange = stock.current - stock.basis;
  stock.tchangep = stock.tchange / stock.basis * 100;
  // format numbers
  if (i === 1) {
    stock.basis = round2(stock.basis);
    stock.current = round2(stock.current);
    stock.previous = round2(stock.previous);
    stock.preweek = round2(stock.preweek);
    stock.value = round2(stock.value);
    stock.dchange = round2(stock.dchange);
    stock.dchangep = round2(stock.dchangep) + "%";
    stock.wchange = round2(stock.wchange);
    stock.wchangep = round2(stock.wchangep) + "%";
    stock.tchange = round2(stock.tchange);
    stock.tchangep = round2(stock.tchangep) + "%";
  }
  console.log(stock);
  return new Promise((resolve) => {
    resolve(stock);
  });
}

// routes
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
      return;
    }
    let portfolio;
    for (const p of user.portfolios) {
      if (p.name === req.params.pslugs) {
        portfolio = p;
        break;
      }
    }
    const stocks = [];
    async function f() {
      for (const s of portfolio.stocks) {
        const stock = await calcStock(s.symbol, s.share, s.costBasis, 1);
        console.log(stock);
        stocks.push(stock);
      }
      res.send(stocks);
    }
    f();
  });
});

router.post('/:pslugs/add-stock', (req, res) => {
  if (req.session.uid === undefined || req.session.uname === undefined) {
    console.log(date(), 'Session error');
    res.sendStatus(500);
    return;
  }
  User.findOne({
    'uid': req.session.uid,
    'portfolios.name': req.params.pslugs,
  }, (err, user) => {
    if (err || user === null) {
      res.sendStatus(500);
      return;
    }
    let portfolio;
    for (const p of user.portfolios) {
      if (p.name === req.params.pslugs) {
        portfolio = p;
        break;
      }
    }
    const symbol = req.body.symbol.toUpperCase();
    const share = parseInt(0 + req.body.share);
    const basis = parseFloat(parseFloat(0 + req.body['cost basis']).toFixed(2));
    async function f() {
      const valid = await finance.quote(symbol);
      if (!valid) {
        res.sendStatus(400);
        return;
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
