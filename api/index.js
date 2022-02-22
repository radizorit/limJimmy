//entry point for api, used to start API
const dotenv = require("dotenv");
const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const Asset = require('./models/asset')
const NFTCollection = require('./models/collection');

dotenv.config()

app.use(express.json()); //parsing the json (need to do this with anything that involves the body or else it wont work)
app.use(cors())

//jlimanalysis@gmail.com
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('DB Connection Succesful'))
  .catch((err) => {
    console.error(err);
  });

app.listen(5000, () => {
  console.log('SERVER RUNS ON 5000')
})

app.get('/express_backend', (req, res) => {
  res.send({ express: 'UPDATED' });
});

app.get('/signup', cors(), async (req, res) => {
  Asset.find({})
    .then((data) => {
      console.log('Data: ', data)
      res.json(data)
    })
    .catch((error) => {
      console.log('error:', error)
    })
})

app.post('/signup', cors(), async (req, res) => {

  let newAsset = new Asset({
    fullname: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    price: req.body.price,
    name: req.body.name,
    image: req.body.image,
    NFTCollection: req.body.NFTCollection,
    addressCrypto: req.body.addressCrypto
  })

  await newAsset.save()
  res.send(JSON)
  // console.log(req.body)
  // this._basicLogger.info(`Added ${name} into ${collectionID}`)
  // this._cloudLogger.info(`Added ${name} into ${collectionID}`)

})

app.get('/signupCollection', cors(), async (req, res) => {
  Collection.find({})
    .then((data) => {
      console.log('Data: ', data)
      res.json(data)
    })
    .catch((error) => {
      console.log('error:', error)
    })
})

// app.post('/signupCollection', cors(), async (req, res) => {
app.post('/NFTCollection/:id/asset', async (req, res) => {
  const { id } = req.params;
  const NFTCollection = await NFTCollection.findById(id);
  const { fullname, username, email } = req.body;
  const asset = new Asset({ fullname, username, email });
  NFTCollection.assets.push(asset);
  asset.NFTCollection = asset;
  res.send(asset)
  // console.log(req.body)
  // let newCollection = new Collection({
  //   NFTCollection: req.body.NFTCollection,
  //   ownerName: req.body.ownerName,
  //   addressCrypto: req.body.addressCrypto,
  //   image: req.body.image,
  //   assets: req.body.assets
  // })

  // const newCollection = new NFTCollection(req.body);
  // await newCollection.save()
  // res.send(JSON)
  // this._basicLogger.info(`Added ${name} into ${collectionID}`)
  // this._cloudLogger.info(`Added ${name} into ${collectionID}`)

})
/*

// Updating One
router.patch('/:id', getSubscriber, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name
  }
  if (req.body.subscribedToChannel != null) {
    res.subscriber.subscribedToChannel = req.body.subscribedToChannel
  }
  try {
    const updatedSubscriber = await res.subscriber.save()
    res.json(updatedSubscriber)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getSubscriber, async (req, res) => {
  try {
    await res.subscriber.remove()
    res.json({ message: 'Deleted Subscriber' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

*/
app.get('/', async (req, res) => {
  res.send('home')
})


app.get('/market', async (req, res) => {
  res.send('market')
})
