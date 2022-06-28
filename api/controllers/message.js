const Message = require('../models/message');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const sendTwilio = require('../modules/twilio')

module.exports.createMessage = async (req, res) => {
    //set up schema
    let twilioMsg
    let messageSchema = new Schema({
        id: String,
        name: String,
        message: String,
        communication: String,
        timeStamp: Date,
        sid: String,
        status: String,
        author: String
    })
    let messageModel = mongoose.model('Message', messageSchema)

    let message = req.body
    try {
        twilioMsg = await sendTwilio(message)
    } catch (e) {
        console.log('problems sending twilio in controller', e)
    }

    //create message
    let postMessage = new messageModel({
        id: message.id,
        name: message.name,
        message: message.message,
        communication: message.communication,
        timeStamp: message.timeStamp,
        sid: twilioMsg['sid'],
        status: message.status,
        author: message.author
    });
    //save
    try {
        await postMessage.save()
    } catch (e) {
        console.error('failed to save message', e)
    }
    //send
    try {
        res.send(JSON)
    } catch (e) {
        console.error('unable to send', e)
    }
}

module.exports.editMessage = async (req, res) => {
    try {
        console.log('editted')
        // let data = await Message.find(sid)
        // return res.json(data)
    } catch (e) {
        console.error('error', e)
    }
}

module.exports.getAllMessage = async (req, res) => {
    try {
        let data = await Message.find({})
        return res.json(data)
    } catch (e) {
        console.error('error', e)
    }
}



/*
to upload to git
//edit code here in window editor
//update to github
//ec2 download from github
//upload you gotta be in the correct directory in terminal
    //limjimmy (locally and ec2)
        
        HOW TO ADD VERY IMPORTANT    
            //git add .
            //git commit -m "whatever message in quotes"
            //git push -u origin dev
        EC2 PULL
        //git checkout . what this do?
            //git pull
            

*/