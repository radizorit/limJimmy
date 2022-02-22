const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AssetSchema = new Schema({
    fullname: String,
    username: String,
    email: String,
    price: Number,
    name: String,
    image: String,
    NFTCollection: { type: Schema.Types.ObjectId, ref: 'NFTCollection' },
    addressCrypto: String
})

module.exports = mongoose.model('Asset', AssetSchema)
//learn typescript and mongo
// const mongoose = require('mongoose')

// export default class Asset {
//     //variable / argument -- pass into function
//     constructor(mongoConn, basicLogger, cloudLogger) {
//         // _ = private things
//         this._mongoConn = mongoConn;
//         this._basicLogger = basicLogger
//         this._cloudLogger = cloudLogger
//         this.data = {
//             id: '', //implement using UUID (library)
//             collectionID: '',
//             name: '',
//             price: 0
//         }
//     }
// }

// const AssetSchema = new mongoose.Schema({
//     id: String,
//     fullName: String,
//     username: String,
//     email: String,
//     price: Number,
//     name: String,
//     image: {
//         url: String,
//         filename: String
//     },

// })

// module.exports = mongoose.model('Asset', AssetSchema)
// create(collectionID, name) {
//     const asset = new Asset();

//     this._basicLogger.info(`Added ${name} into ${collectionID}`)
//     // this._cloudLogger.info(`Added ${name} into ${collectionID}`)
//     this.data = {
//         id: Math.floor(Math.random() * 100000),
//         collectionID,
//         name,
//         price: Math.floor(Math.random() * 100000)
//     }
//     //To do save to db
// }

// load(id) {
//     //todoload: fromDb
//     //loading from DB
//     this.data = {
//         id,
//         collectionID: Math.floor(Math.random() * 100000),
//         name: Math.floor(Math.random() * 100000)
//     }
//     this._basicLogger.info('LOGGING RANDOMNAME into RANDOMCOLLECTION')
// }

// loadByCollectionID(collectionID) {
//     //see all the assets under the collection
// }