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

async function calcStock(symbol, share, basis) {
  const stock = [{}, {}];
  const date = new Date();
  date.setDate(date.getDate() - 7);
  const d = date.toLocaleString("en-US", {
    timeZone: "America/New_York"
  });
  const currentQuote = await finance.quote(symbol);
  const preweekQuote = await retrvHist(symbol, d.slice(6, 10) + d.slice(0, 2) + d.slice(3, 5));
  stock[0].symbol = symbol;
  stock[0].share = share;
  stock[0].basis = basis;
  stock[0].current = currentQuote.price.regularMarketPrice;
  stock[0].previous = currentQuote.summaryDetail.previousClose;
  stock[0].preweek = preweekQuote;
  stock[0].value = stock[0].share * stock[0].current;
  stock[0].dchange = stock[0].current - stock[0].previous;
  stock[0].dchangep = stock[0].dchange / stock[0].previous * 100;
  stock[0].wchange = stock[0].current - stock[0].preweek;
  stock[0].wchangep = stock[0].wchange / stock[0].preweek;
  stock[0].tchange = stock[0].current - stock[0].basis;
  stock[0].tchangep = stock[0].tchange / stock[0].basis * 100;
  // format numbers
  stock[1].symbol = symbol;
  stock[1].share = share;
  stock[1].basis = round2(stock[0].basis);
  stock[1].current = round2(stock[0].current);
  stock[1].previous = round2(stock[0].previous);
  stock[1].preweek = round2(stock[0].preweek);
  stock[1].value = round2(stock[0].value);
  stock[1].dchange = round2(stock[0].dchange);
  stock[1].dchangep = round2(stock[0].dchangep) + "%";
  stock[1].wchange = round2(stock[0].wchange);
  stock[1].wchangep = round2(stock[0].wchangep) + "%";
  stock[1].tchange = round2(stock[0].tchange);
  stock[1].tchangep = round2(stock[0].tchangep) + "%";
  return new Promise((resolve) => {
    resolve(stock);
  });
}

async function calcPortfolio(portfolio) {
  const portfo = {};
  portfo.tag = portfolio.colorTag;
  portfo.name = portfolio.name;
  portfo.description = portfolio.description;
  portfo.value = 0;
  portfo.dchange = 0;
  portfo.wchange = 0;
  portfo.tchange = 0;
  portfo.previous = 0;
  portfo.preweek = 0;
  portfo.bvalue = 0;
  portfo.stocks = [];
  for (const s of portfolio.stocks) {
    const stock = await calcStock(s.symbol, s.share, s.costBasis);
    stock[1].slug = s.slug;
    portfo.stocks.push(stock[1]);
    portfo.value += stock[0].value;
    portfo.dchange += stock[0].current - stock[0].previous;
    portfo.pwvalue += stock[0].current - stock[0].preweek;
    portfo.previous += stock[0].previous;
    portfo.preweek += stock[0].preweek;
    portfo.bvalue += stock[0].basis;
    portfo.tchange += stock[0].tchange;
  }
  portfo.dchangep = round2(portfo.dchange / portfo.previous * 100) + "%";
  portfo.wchangep = round2(portfo.dchange / portfo.preweek * 100) + "%";
  portfo.tchangep = round2(portfo.tchange / portfo.bvalue * 100) + "%";
  portfo.value = round2(portfo.value);
  portfo.bvalue = round2(portfo.bvalue);
  portfo.dchange = round2(portfo.dchange);
  portfo.wchange = round2(portfo.wchange);
  portfo.tchange = round2(portfo.tchange);
  console.log(portfo);
  return new Promise((resolve) => {
    resolve(portfo);
  });
}

async function calcPortfolios(user, res) {
  const portfolios = [];
  for (const p of user.portfolios) {
    portfolios.push(await calcPortfolio(p));
  }
  res.send(portfolios);
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
      calcPortfolios(user, res);
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
    async function f() {
      const pfo = await calcPortfolio(portfolio);
      console.log(pfo);
      res.send(pfo);
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
