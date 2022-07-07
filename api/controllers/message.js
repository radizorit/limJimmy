const Message = require('../models/message');
const sendTwilio = require('../adapters/twilio')
const { messageSchema } = require('../helpers/validationSchema');
const { get } = require('../adapters/mongoConnection')

//need to do delete and put
module.exports.createMessage = async (req, res) => {
    let message = req.body, twilioMsg, postMessage
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
    try {
        postMessage = new Message()
        await postMessage.createMessage({
            id: message._id,
            name: message.name,
            message: message.message,
            communication: message.communication,
            timeStamp: message.timeStamp,
            sid: twilioMsg['sid'],
            status: message.status,
            author: message.author
        })
    } catch (e) {
        console.error('error for creating message', e)
    }
}

module.exports.getAllMessages = async (req, res) => {
    try {
        // let message = new Message()
        // message.getAllMessages();
        let client = await get();
        // console.log('client',client)
        client
            .db('communications')
            .collection('messages')
            .find({})
            // .limit(5)
            .toArray(function (err, docs) {
                if (err) {
                    console.error(err)
                } else {
                    // console.log('docs',docs)
                    res.json(docs)
                }
            })
    } catch (e) {
        console.error('controllers error', e)
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