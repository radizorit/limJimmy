const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.TWILIO_FROM;
const client = require('twilio')(accountSid, authToken);

export function sendTwilio(response) {
  client.messages
    .create({
      body: response.message,
      from: from,
      //possibly have a function here if?
      //also how do we know the message sent?
      // to: '+1' + response.destination
      to: '+16267823475'
    })
    .then(message => console.log(message.sid));
  //   console.log(response)
}
