const { App, Home } = require('../components')
const { logger } = require('../utils')

module.exports = (req, res) => {
    const { session: { token, acceptCookies } } = req

    try {
        if (token) {
            const { session: { user: { name, username } } } = props
            retrieveUser(token, (error, user) => {
                if (error) {
                    logger.error(error)

                    return res.redirect('/error')
                }

                res.send(App({ title: 'My App', body: Home({ name, username }), acceptCookies }))
            })
        } else {

            res.send(App({ title: 'My App', body: Home(), acceptCookies }))
        }
    } catch (error) {
        logger.error(error)

        res.redirect('/error')
    }
}