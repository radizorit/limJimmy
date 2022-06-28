const Message = require('../models/message');
const editMessage = require('./message')
module.exports.updateTwilioSms = async (req, res) => {
    if (req.body['MessageStatus'] === 'delivered') {
        try {
            // await Message.findOneAndUpdate({ 'sid': req.body['SmsSid'] }, { $set: { 'status': 'delivered' } })
            deliveredMessage = await Message.find({})
            // res.status(204).send()
            // editMessage()
            console.log(deliveredMessage)
            console.log('updating')

        } catch (e) {
            console.error('ONE failed to update db')
        }
    }
    editMessage
}