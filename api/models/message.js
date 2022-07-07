const { get } = require('../adapters/mongoConnection')
module.exports = class Message {
    constructor() {
        this.data = {
            _id: String,
            name: String,
            message: String,
            communication: String,
            timeStamp: Date,
            sid: String,
            status: String,
            author: String
            // author: {
            //     type: Schema.Types.ObjectId,
            //     ref: 'Subscribe'
            // }
        }
    }

    async createMessage({ _id, name, message, timeStamp, communication, sid, author }) {
        this.data = {
            _id: _id,
            name: name,
            message: message,
            communication: communication,
            timeStamp: timeStamp,
            sid: sid,
            status: 'queue',
            author: author
        }

        let client = await get();
        let db = client.db('communications').collection('messages');
        // let collection = db.collection('messages')
        db.insertOne(this.data)

        return this.data
    }

    async getAllMessages() {
        console.log('model is hit')
        // let client = await get();
        // let db = client.db('communications').collection('messages');
        // //connection might be wrong
        // //look here
        // //need to send res.json on controllers side
        // return await db.find({})
    }

    // // async load({ }) {
    // //return result
    // // }


    // //update sid and delivery status? 
    // //create function

    // //get function

    // //delete function

    // //put function

    // //read function
    // //sentTime function
    // //delivered time function
    // //etc. but probably not as important
}