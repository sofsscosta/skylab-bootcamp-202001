const mongoose = require('mongoose')
const { itemState } = require('../schemas')

module.exports = mongoose.model('ItemState', itemState)