const Message = require('../models/message');
const editMessage = require('./message')
module.exports.updateTwilioSms = async (req, res) => {
    if (req.body['MessageStatus'] === 'delivered') {
        try {
            deliveredMessage = await Message.findOneAndUpdate({ 'sid': req.body['SmsSid'] }, { $set: { 'status': 'delivered' } })
        } catch (e) {
            console.error('ONE failed to update db')
        }
    }
    editMessage
}