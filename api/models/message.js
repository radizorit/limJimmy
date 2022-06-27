const mongoose = require('mongoose')
const Schema = mongoose.Schema;

class Message {
    constructor() {
        this.data = {
            _id: null,
            message: null,
            communication: null,
            timeStamp: null,
            sid: null,
            status: null,
            author: null
        }
    }
    //create function

    //get function

    //delete function

    //put function

    //read function
    //sentTime function
    //delivered time function
    //etc. but probably not as important
}

//create schema
const schema = new Schema();
//loading schema
schema.loadClass(Message)



// const MessageSchema = new Schema({
//     name: String,
//     message: String,
//     communication: String,
//     timeStamp: Date,
//     sid: String,
//     status: String,
//     author: {
//         type: Schema.Types.ObjectId,
//         ref: 'Subscribe'
//     }
// })

// module.exports = mongoose.model('Message', MessageSchema)
