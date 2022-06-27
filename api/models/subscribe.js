const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SubscribeSchema = new Schema({
    login: String,
    name: String,
    phone: Number,
    email: String,
    password: String,
    referral: String,
    timeStamp: Date
})

module.exports = mongoose.model('Subscribe', SubscribeSchema)


//define the name of the schema
//what is going into the schema
//what are the use cases of post, get, delete, patch

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