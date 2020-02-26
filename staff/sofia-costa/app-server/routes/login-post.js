const { Login, App, Home } = require('../components')
const { authenticateUser, retrieveUser } = require('../logic')
const { logger } = require('../utils')

module.exports = (req, res) => {
    const { body: { username, password }, session } = req

    try {
        authenticateUser(username, password)
            .then(token => {
                session.token = token
                return retrieveUser(token)
            })
            .then(user => {
                const { username, name } = user

                req.session.user = user

                // const { session: { acceptCookies } } = req

                res.render('home', { name, username/*, acceptCookies*/ })
            })
            .catch(error => {
                logger.warn(error)
                const { message } = error
                const { session: { acceptCookies } } = req

                return res.render('login', { error: message, username, acceptCookies })
            })

        const { session: { token } } = req

    } catch ({ message }) {
        logger.error(message)
        const { session: { acceptCookies } } = req

        res.render('login', { error: message, username, acceptCookies })
    }
}