const Message = require('../models/message');

module.exports.handleTwilioSms = async (req, res) => {
    if (req.body['MessageStatus'] === 'delivered') {
        try {
            await Message.findOneAndUpdate({ 'sid': req.body['SmsSid'] }, { $set: { 'status': 'delivered' } })
            res.status(204).send()
        } catch (e) {
            console.error('failed to update db', e)
        }
    }
}