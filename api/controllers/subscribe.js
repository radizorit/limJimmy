const Subscribe = require('../models/subscribe');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports.createSubscription = async (req, res) => {
    let subscriptionSchema = new Schema({
        id: String,
        name: String,
        login: String,
        phone: Number,
        email: String,
        password: String,
        signUpDate: String,
        referral: String
    })
    let subscriberModel = mongoose.model('Subscribe', subscriptionSchema)

    const subscription = req.body;
    console.log('subscription', subscription)
    // console.log('subscription req.body', subscription)
    // let postSubscribe = new Subscribe({ subscription });
    let postSubscribe = new subscriberModel({
        id: subscription.id,
        name: subscription.name,
        login: subscription.login,
        phone: subscription.phone,
        email: subscription.email,
        password: subscription.password,
        signUpDate: subscription.signUpDate,
        referral: subscription.referral
    });
    try {
        //need to fix this
        //find a way to use a mongodb address?
        await postSubscribe.save()
    } catch (e) {
        console.error('failed to save message', e)
    }
    try {
        res.send(JSON)
    } catch (e) {
        console.error('unable to send', e)
    }
}

module.exports.getAllSubscription = async (req, res) => {
    let data = await Subscribe.find({})
    res.json(data)
}