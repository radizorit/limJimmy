const express = require('express');
const router = express.Router();

// const app = express();
// const cors = require('cors')
// app.use(cors())

const {
    createCollection
    , getAllCollection
    , changeCollection
    , deleteCollection
    , getOneCollection
} = require('../controllers/collection')

router.route('/signupCollection')
    .post(createCollection)
    .get(getAllCollection)
    .put(changeCollection)
    .delete(deleteCollection)


router.route('/signupCollection/:id')
    .get(getOneCollection)

module.exports = router