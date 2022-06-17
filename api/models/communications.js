const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommunicationSchema = new Schema({
    name: String,
    message: String,
    communication: String,
    timeStamp: Date
})

module.exports = mongoose.model('Communication', CommunicationSchema)

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