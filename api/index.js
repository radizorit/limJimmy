const dotenv = require('dotenv')
const express = require('express');
const app = express();
const cors = require('cors')

// require('dotenv').config()
dotenv.config()
// require('dotenv').config()
const mongoose = require('mongoose')

const CommunicationRoute = require('./routes/communications')

app.use(express.json());
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

app.get('/express_backend', (req, res) => {
  res.send({ express: 'UPDATED' });
});

app.get('/market', async (req, res) => {
  res.send('market')
})

app.use('/', CommunicationRoute)

app.listen(5000, () => {
  console.log('SERVER RUNS ON 5000')
})
