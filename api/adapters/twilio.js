const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.TWILIO_FROM;
const client = require('twilio')(accountSid, authToken);

module.exports = async function sendTwilio(input) {
  try {
    twilioStatus = await client.messages
      .create({
        body: input.message,
        from: from,
        statusCallback: 'https://bd10-47-41-207-79.ngrok.io/webhooks/twilio/sms',
        to: '+16267823475'
        //change "newMessage" sid from empty string to message.sid
      })
    return twilioStatus
  } catch (e) {
    console.error('twilio message did not send (module)', e)
  }
}