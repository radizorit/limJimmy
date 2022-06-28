module.exports = new class Message {
    constructor() {
        this.data = {
            id: String,
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
            id: _id,
            name: name,
            message: message,
            communication: communication,
            timeStamp: timeStamp,
            sid: sid,
            status: 'queue',
            author: author
        }
        return this.data
    }

    async updateMessageAfterSMS({ _id, name, message, timeStamp, communication, sid, status, author }) {
        //call the twilioSMS function
        //set the response (sid and delivered) to a variable
        //use sid to know what to update
        //update delivery status
        //update sid

        //update sid and delivery status? 
    }

    // async load({ }) {
    //return result
    // }


    //update sid and delivery status? 
    //create function

    //get function

    //delete function

    //put function

    //read function
    //sentTime function
    //delivered time function
    //etc. but probably not as important
}