const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    content: String,
    type: String,
    windowId:Number
});

module.exports = mongoose.model('transactions', transactionSchema);
