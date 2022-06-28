const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    id: String,
    name: String,
    message: String,
    communication: String,
    timeStamp: Date,
    sid: String,
    status: String,
    author: String
})

module.exports = mongoose.model('Message', MessageSchema)