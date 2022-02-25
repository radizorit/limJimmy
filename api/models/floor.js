const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FloorSchema = new Schema({
    collectionName: String,
    dateOfFloor: Date,
    floor: Number,
    priceOfETH: Number,
    priceOfAssetDollars: Number
})

module.exports = mongoose.model('Floor', FloorSchema)