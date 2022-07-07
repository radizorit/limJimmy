const Subscribe = require('../models/subscribe');

module.exports.createSubscription = async (req, res) => {
    const subscription = req.body;
    let postSubscribe
    //helper function for schema validtion

    try {
        postSubscribe = new Subscribe()
        await postSubscribe.createSubscription({
            id: subscription.id,
            name: subscription.name,
            login: subscription.login,
            phone: subscription.phone,
            email: subscription.email,
            password: subscription.password,
            signUpDate: subscription.signUpDate,
            referral: subscription.referral
        })
    } catch (e) {
        console.error('error for creating message', e)
    }

    // try {
    //     //need to fix this
    //     //find a way to use a mongodb address?
    //     await postSubscribe.save()
    // } catch (e) {
    //     console.error('failed to save message', e)
    // }
    // try {
    //     res.send(JSON)
    // } catch (e) {
    //     console.error('unable to send', e)
    // }
}

module.exports.getAllSubscription = async (req, res) => {
    let data = await Subscribe.find({})
    res.json(data)
}