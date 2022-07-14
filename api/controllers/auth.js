const User = require('../models/user');
const bcrypt = require('bcrypt')


module.exports.loginUser = async (req, res) => {
    try {
        let user = req.body
        let testingLogin = new User()
        let authenticationResult = await testingLogin.loginUser({
            login: user.login,
            password: user.password
        })
        if (authenticationResult) {
            // res.send()
            console.log('correct password send the response somewhere back')
            // res.redirect('/communications')
            res.send(req.body)
            //res.redirect to id
        } else {
            //res.redirect to homepage?
            console.log('wrong password')
        }

    } catch (e) {
        console.error(e, 'controllers unable to login')
    }
}