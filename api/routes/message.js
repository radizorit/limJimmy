const express = require('express');
const router = express.Router();

const {
    createMessage,
    getAllMessage,
} = require('../controllers/message')

router.route('/communications/message')
    .post(createMessage)

router.route('/communications/message')
    .get(getAllMessage)

module.exports = router
//need delete and put routes