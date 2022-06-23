const dotenv = require('dotenv')
const express = require('express');
const app = express();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const cors = require('cors')

dotenv.config()
const mongoose = require('mongoose')

const https = require('https')
// const http = require('http')
const MessageRoute = require('./routes/message')
const SubscribeRoute = require('./routes/subscribe')

const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', MessageRoute)
app.use('/', SubscribeRoute)


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


app.all('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('This is a proper response');
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
})

app.listen(5000, () => {
  console.log('SERVER RUNS ON 5000')
})