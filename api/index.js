//entry point for api, used to start API
const dotenv = require("dotenv");
const express = require('express');
const app = express();
const cors = require('cors')

const mongoose = require('mongoose');

const NFTCollectionRoute = require('./routes/collection')
const AssetRoute = require('./routes/asset')
const FloorRoute = require('./routes/floor')

dotenv.config()

app.use(express.json()); //parsing the json (need to do this with anything that involves the body or else it wont work)
app.use(cors())

app.use('/', FloorRoute)
app.use('/', NFTCollectionRoute)
app.use('/', AssetRoute)


//jlimanalysis@gmail.com 
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('DB Connection Succesful'))
  .catch((err) => {
    console.error(err);
  });

app.get('/express_backend', (req, res) => {
  res.send({ express: 'UPDATED' });
});

app.get('/market', async (req, res) => {
  res.send('market')
})

app.listen(5000, () => {
  console.log('SERVER RUNS ON 5000')
})
