const express = require('express');
const router = express.Router();

const {
    createCommunication,
    getAllCommunication
} = require('../controllers/communications')

router.route('/communications')
    .post(createCommunication)

router.route('/communications')
    .get(getAllCommunication)

module.exports = router
//need delete and put routes