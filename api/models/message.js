const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name: String,
    message: String,
    communication: String,
    timeStamp: Date,
    sid: String,
    status: Boolean
})

module.exports = mongoose.model('Message', MessageSchema)
