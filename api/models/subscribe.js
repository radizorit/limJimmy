const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SubscribeSchema = new Schema({
    name: String,
    phone: Number,
    email: String,
    password: String,
    referral: String,
    timeStamp: Date
})

module.exports = mongoose.model('Subscribe', SubscribeSchema)

//add save function
//define model
//

//2 models: notification and users

//notification model:
    //add array of user id for receipients
    //name
    //time sent
    //status
    //