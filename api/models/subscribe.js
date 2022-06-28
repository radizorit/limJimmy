module.exports = class Subscribe {
    constructor() {
        this.data = {
            _id: String,
            name: String,
            login: String,
            phone: Number,
            email: String,
            password: String,
            signUpDate: String,
            referral: String,
        }
    }

    async createSubscription({ _id, name, login, phone, email, password,
        signUpDate, referral }) {
        //why are we doing this?
        //possible data manipulation most likely done here?
        this.data = {
            // ...this.data,
            // signUpDate: Date.now()
            id: _id,
            name: name,
            login: login,
            phone: phone,
            email: email,
            password: password,
            signUpDate: signUpDate,
            referral: referral
        }
        return this.data
    }
}
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