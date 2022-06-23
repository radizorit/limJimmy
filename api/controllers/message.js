const Message = require('../models/message');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.TWILIO_FROM;
const client = require('twilio')(accountSid, authToken);

module.exports.changeMessageStatus = async (req, res) => {
    //the req will have a "query" field under "client"
    //then u will need to break it up and only include SID (need to check how many characters maybe? or where is the break up point)
    console.log('Req', req)
    //this is for sid
    // let sidMsg = req['client']['sid']

    //then using the put request you will send something to DB to change status to true, make sure we are updating only ONE field
    //mongodb find
    try {
        await Message.find({ sid: sidMsg }, { status: true })
    } catch (err) {
        console.error(err)
    }

}
module.exports.createMessage = async (req, res) => {
    let twilioStatus, newMessage

    //when received the post request from front end
    //use send twilio
    try {
        //if communication is email then --> send grid
        //else if it is phone then --->
        twilioStatus = await client.messages
            .create({
                body: req.body.message,
                from: from,
                //possibly have a function here if?
                //also how do we know the message sent?
                // to: '+1' + response.destination
                // statusCallBack: 'https://6d6d-47-41-207-79.ngrok.io',
                statusCallback: 'https://limjimmy.com/webhooks/twilio/sms',
                to: '+16267823475'
                //change "newMessage" sid from empty string to message.sid
            })
        try {
            newMessage = new Message({
                name: req.body.name,
                message: req.body.message,
                communication: req.body.communication,
                timeStamp: req.body.timeStamp,
                sid: twilioStatus['sid'],
                status: false
            })
        } catch (err) {
            console.log('I cant create this dam newMessage', err)
        }
        // .then(message => console.log(message))
        // console.log(twilioStatus)
        // const callLog = await client.messages.list({ limit: 20 })
        // console.log('Before filtering callLog', callLog)
        // console.log('After filtering callLog:', callLog.filter(call => call.sid === twilioStatus.sid))
        // console.log('Status:', callLog[0]['status'])

        // async function asynCall() {
        //     let msg = await client.messages.create(...)
        //     let msg = console.log(msg.sid)
        //     let messages = await client.messages.list({ limit: 20 })
        //     let result = messages.filter(m => msg.sid === m.sid)
        //     //assuming it is an empty, if it is an empty array, it will crash
        //     const twilioStatus = console.log(result[0]['status'])

        // // .then(msg => console.log(msg.sid))
        // //     .then(msg => client.messages.list({ limit: 1 })
        // //         .then(messages => messages[0].forEach(m => console.log(m)))
        // //         .then(messages => messages.filter(m => msg.sid === m.sid))
        // //         .then(result => console.log('check1', result[0].status))


        //save it, send it, and update intent (so when you review the records you can look at the what failed and send again)
        //if we send to twilio, their webhook will tell us if it delivered/fails and you update that accordingly
    } catch (err) {
        console.error('Failed to send to Twilio', err)
        return res.status(500).send('Failed to send using Twilio')
    }

    //api --> routes --> controllers --> communicate with different models/db as well as other external services (twilio for example)
    try {
        await newMessage.save()
    } catch (err) {
        console.error('Failed to save', err)
        return res.status(500).send('Failed to save')
    }
    res.send(JSON)
}

module.exports.getAllMessage = async (req, res) => {
    try {
        let data = await Message.find({})
        return res.json(data)
    } catch (err) {
        console.error('error', err)
    }
}