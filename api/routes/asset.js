const express = require('express');
const router = express.Router();

// const app = express();
// const cors = require('cors')
// app.use(cors())

const {
    deleteAsset,
    updateAsset,
    getAllAsset,
    createAsset
} = require('../controllers/asset')

router.route('/signup')
    .post(createAsset)
    .get(getAllAsset)


router.route('/signup/update')
    .put(updateAsset)

router.route('signup/delete/:id')
    .delete(deleteAsset)


module.exports = router