const mongoose = require('mongoose');

const windowSchema = new mongoose.Schema({
    content: String,
    windowId:Number
});

module.exports = mongoose.model('windows', windowSchema);
