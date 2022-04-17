const mongoose = require('mongoose')
const NFTCollection = require('../models/collection')

module.exports.createCollection = async (req, res) => {
    const newCollection = new NFTCollection({
        NFTCollection: req.body.NFTCollection,
        ownerName: req.body.ownerName,
        addressCrypto: req.body.addressCrypto,
        image: req.body.image,
        assets: req.body.assets
    });
    try {
        await newCollection.save()
        res.send(JSON)
    } catch (err) {
        console.log(err)
    }
    // this._basicLogger.info(`Added ${name} into ${collectionID}`)
    // this._cloudLogger.info(`Added ${name} into ${collectionID}`)    
}

module.exports.getAllCollection = async (req, res) => {
    try {
        NFTCollection.find({}, (err, result) => {
            if (err) {
                res.send(err)
            }
            res.status(200).json(result)
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports.changeCollection = async (req, res) => {
    const newOwnerName = req.body.newOwnerName;
    const id = req.body.id;

    try {
        await NFTCollection.findOneAndUpdate({ _id: id }, { ownerName: newOwnerName })
    } catch (e) {
        console.log(e)
    }
}

module.exports.deleteCollection = async (req, res) => {
    const id = req.params.id
    try {
        await NFTCollection.findByIdAndRemove(id).exec();
    } catch (e) {
        console.log(e)
    }
}

module.exports.getOneCollection = async (req, res) => {
    let result = {}
    try {
        let result = await NFTCollection.find({ _id: req.params.id })
        //docs say to use req.prams.id
        res.status(200).json(result)
    } catch (e) {
        console.log(e)
    }
}

