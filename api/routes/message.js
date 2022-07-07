const express = require('express');
const router = express.Router();

const {
    createMessage,
    getAllMessages,
} = require('../controllers/message')

router.route('/api/1/communications/message/create')
    .post(createMessage)

router.route('/api/1/communications/message/get')
    .get(getAllMessages)

module.exports = router
//need delete and put routes