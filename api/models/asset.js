const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AssetSchema = new Schema({
    fullname: String,
    username: String,
    email: String,
    price: Number,
    name: String,
    image: String,
    NFTCollection: String,
    // NFTCollection: { type: Schema.Types.ObjectId, ref: 'NFTCollection' },
    addressCrypto: String
})

module.exports = mongoose.model('Asset', AssetSchema)
//learn typescript and mongo