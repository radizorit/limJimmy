const Asset = require('../models/asset');

module.exports.deleteAsset = async (req, res) => {
    const id = req.params.id
    try {
        await Asset.findByIdAndRemove(id).exec();
    } catch (e) {
        console.log(e)
    }
}

module.exports.updateAsset = async (req, res) => {
    const newOwnerName = req.body.newOwnerName;
    const id = req.body.id;
    // console.log('Req', req)
    try {
        await Asset.findOneAndUpdate({ _id: id }, { username: newOwnerName })
    } catch (e) {
        console.log(e)
    }
}



module.exports.getAllAsset = async (req, res) => {
    Asset.find({})
        .then((data) => {
            // console.log('Data: ', data)
            res.json(data)
        })
        .catch((error) => {
            console.log('error:', error)
        })
}

module.exports.createAsset = async (req, res, next) => {
    let newAsset = new Asset({
        fullname: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        price: req.body.price,
        name: req.body.name,
        image: req.body.image,
        NFTCollection: req.body.NFTCollection,
        addressCrypto: req.body.addressCrypto
    })

    await newAsset.save()
    res.send(JSON)
    // console.log(req.body)
    // this._basicLogger.info(`Added ${name} into ${collectionID}`)
    // this._cloudLogger.info(`Added ${name} into ${collectionID}`)

}


