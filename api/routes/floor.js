const express = require('express');
const router = express.Router();

const {
    createFloor,
    getFloor
} = require('../controllers/floor')

router.route('/floorEntry')
    .post(createFloor)
    .get(getFloor)

module.exports = router