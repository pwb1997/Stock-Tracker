const mongoose = require('mongoose');

const stockTracker = new mongoose.Schema({
    username: String,
    hash: String,
    portfolios: [{
        user: String,
        portfolioName: String,
        portfolioItems: [{
            name: String,
            quantity: Number,
            original: Number,
            current: Number
        }],
        createdAt: String,
    }],
});

mongoose.model('stockTracker', stockTracker);
mongoose.connect('mongodb://localhost/stockTracker');