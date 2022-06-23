const express = require('express');
const router = express.Router();

const {
    createSubscription,
    getAllSubscription
} = require('../controllers/subscribe')

router.route('/communications/subscribe')
    .post(createSubscription)

router.route('/communications/subscribe')
    .get(getAllSubscription)

module.exports = router
//need delete and put routes