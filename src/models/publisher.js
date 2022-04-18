const mongoose = require('mongoose');

const pusblish = new mongoose.Schema({
    name: String,
    headquaters: String
});

module.exports = mongoose.model('Publish', pusblish)