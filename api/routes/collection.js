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

router.route('/signupCollection/:id')
    .put(changeCollection)
    .delete(deleteCollection)
// .get(getOneCollection)

router.route('/signupCollection/:id')
    .get(getOneCollection)

router.route('/signupCollection')
    .post(createCollection)
    .get(getAllCollection)



module.exports = router