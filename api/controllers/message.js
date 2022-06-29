const Message = require('../models/message');
const sendTwilio = require('../modules/twilio')
const { messageSchema } = require('../helpers/validationSchema')

module.exports.createMessage = async (req, res) => {
    let message = req.body, twilioMsg
    const { error } = messageSchema.validate(req.body);

    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new Error(msg, 400)
    }

    try {
        twilioMsg = await sendTwilio(message)
    } catch (e) {
        console.log('problems with the sending twilio in controller', e)
    }
    //Message should be a ADAPTER connection
    let postMessage = new Message({
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
    //set up schema in constructor
    //you will be needing to identify and add model to constructor
    //create message will then send the data 
}

// module.exports.editMessage = async (req, res) => {

// }

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