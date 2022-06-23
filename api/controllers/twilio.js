
module.exports.handleTwilioSms = async (req, res) => {
    try {
        console.log(req.body)
        res.status(204).send()
        // let data = await Message.find({})
        // return res.json(data)
    } catch (err) {
        console.error('error', err)
    }
}