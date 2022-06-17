const Communication = require('../models/communications');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.TWILIO_FROM;
const client = require('twilio')(accountSid, authToken);

import sendTwilio from '../modules/send_sms'
module.exports.createCommunication = async (req, res) => {
    let newCommunication = new Communication({
        name: req.body.name,
        message: req.body.message,
        communication: req.body.communication,
        timeStamp: req.body.timeStamp
    })
    //api --> routes --> controllers --> communicate with different models/db as well as other external services (twilio for example)
    try {
        await newCommunication.save()
        sendTwilio(newCommunication)
        //when received the post request from front end
        //use send twilio
        // try {
        //     client.messages
        //         .create({
        //             body: newCommunication.message,
        //             from: from,
        //             //possibly have a function here if?
        //             //also how do we know the message sent?
        //             // to: '+1' + response.destination
        //             to: '+16267823475'
        //         })
        //         .then(message => console.log(message.sid));
        //     //   console.log(response)
        // } catch (e) {
        //     console.log(e)
        // };
        //save it, send it, and update intent (so when you review the records you can look at the what failed and send again)
        //if we send to twilio, their webhook will tell us if it delivered/fails and you update that accordingly
        res.send(JSON)
    } catch (err) {
        console.log('controllers error', err)
    }

}

module.exports.getAllCommunication = async (req, res) => {
    Communication.find({})
        .then((data) => {
            // console.log('Data: ', data)
            res.json(data)
        })
        .catch((error) => {
            console.log('error:', error)
        })
}




//command line program to API
    //CLI program
    //API --> another client to make HTTP calls
    //client folder will make http request to backend
        //client is like a webpage that interfaces with server
