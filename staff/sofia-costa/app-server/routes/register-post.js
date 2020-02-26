const { App, Register } = require('../components')
const { logger } = require('../utils')
const { registerUser } = require('../logic')

module.exports = (req, res) => {
    const { body: { name, surname, username, password } } = req

    try {
        registerUser(name, surname, username, password)
        .then(() => {

            res.redirect('/login')

        })
        .catch(error => {
            
            const { message } = error
            const { session: { acceptCookies } } = req
            return res.render('register', {error: message, name, surname, username, acceptCookies })
        
        })       

    } catch ({ message }) {


        logger.warn(message)

        const { session: { acceptCookies } } = req

        res.render('register', {error: message, name, surname, username, acceptCookies })
    }
}