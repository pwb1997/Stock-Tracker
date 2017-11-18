const timestamp = require('mongoose-timestamp');
const slug = require('mongoose-slug');
const mongoose = require('mongoose');
const fs = require('fs');

// create schema
const Portfolio = new mongoose.Schema({
  name: String,
  quantity: Number,
  original: Number,
  current: Number
});

const PortfolioBook = new mongoose.Schema({
  uname: String,
  uid: Number,
  portfolios: [{
    user: String,
    portfolioName: String,
    portfolioItems: [Portfolio]
  }],
});

Portfolio.plugin(timestamp);
Portfolio.plugin(slug);

PortfolioBook.plugin(timestamp);
PortfolioBook.plugin(slug);


mongoose.model('Portfolio', Portfolio);
mongoose.model('PortfolioBook', PortfolioBook);

// connect to db
console.log("NODE_ENV is set to " + process.env.NODE_ENV);
let dbconf = 'mongodb://localhost/pb1713';
if (process.env.NODE_ENV === 'PRODUCTION') {
  console.log("[using remote database]");
  dbconf = JSON.parse(fs.readFileSync(__dirname + "/../config.json")).dbconf;
} else {
  console.log("[using local database]");
}
console.log("Connecting to " + dbconf);
mongoose.connect(dbconf);
