const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
    NFTCollection: String,
    ownerName: String,
    addressCrypto: String,
    image: String,
    assets: String
    // assets: [{ type: Schema.Types.ObjectId, ref: 'Asset' }]
})

module.exports = mongoose.model('NFTCollection', CollectionSchema)