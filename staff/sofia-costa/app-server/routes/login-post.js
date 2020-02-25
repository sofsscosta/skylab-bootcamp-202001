const { Login, App, Home } = require('../components')
const { authenticateUser, retrieveUser } = require('../logic')
const { logger } = require('../utils')

module.exports = (req, res) => {
    const { body: { username, password }, session } = req

    try {
        authenticateUser(username, password, (error, token) => {
            if (error) {
                logger.warn(error)
                const { message } = error
                const { session: { acceptCookies } } = req

                return res.send(App({ title: 'Login', body: Login({ error: message }), acceptCookies }))
            }

            retrieveUser(token, (error, user) => {
                if (error) {
                    logger.warn(error)
                    const { message } = error
                    const { session: { acceptCookies } } = req

                    return res.send(App({ title: 'Login', body: Login({ error: message }), acceptCookies }))
                }

                req.session.token = token

                const { username, name } = user

                req.session.user = user

                const { session: { acceptCookies } } = req

                res.send(App({ title: 'Home', body: Home({ name, username }), acceptCookies }))
            })
        })
    } catch ({ message }) {
        logger.warn(message)
        const { session: { acceptCookies } } = req

        res.send(App({ title: 'Login', body: Login({ error: message }), acceptCookies }))
    }
}