const timestamp = require('mongoose-timestamp');
const slug = require('mongoose-slug');
const mongoose = require('mongoose');

const Portfolio = new mongoose.Schema({
    name: String,
    quantity: Number,
    original: Number,
    current: Number
});

const PortfolioBook = new mongoose.Schema({
    username: String,
    hash: String,
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
mongoose.connect('mongodb://pb1713:P5wwNth4@class-mongodb.cims.nyu.edu/pb1713');