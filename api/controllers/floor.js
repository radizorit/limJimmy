const Floor = require('../models/floor');

module.exports.createFloor = async (req, res) => {
    const newFloor = new Floor({
        collectionName: req.body.collectionName,
        dateOfFloor: req.body.dateOfFloor,
        floor: req.body.floor
    });
    try {
        await newFloor.save()
        res.send(JSON)
    } catch (err) {
        console.log(err)
    }
}

module.exports.getFloor = async (req, res) => {
    Floor.find({})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.log('error:', error)
        })
}
