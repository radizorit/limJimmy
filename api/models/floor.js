const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FloorSchema = new Schema({
    collectionName: String,
    dateOfFloor: String,
    floor: Number,
})

module.exports = mongoose.model('Floor', FloorSchema)