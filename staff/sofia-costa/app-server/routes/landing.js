const { App, Landing, Home } = require('../components')
const { retrieveUser } = require('../logic')
const { logger } = require('../utils')

module.exports = ({ session: { acceptCookies, token } }, res) => {
    try {
        if (token) {
            retrieveUser(token, (error, user) => {
                if (error) {
                    logger.error(error)

                    return res.redirect('/error')
                }
                res.render('home', { name, username, acceptCookies })
                // res.send(App({ title: 'My App', body: Home({ name, username }), acceptCookies }))
            })
        } else {
            res.render('home', { acceptCookies })
            // res.send(App({ title: 'My App', body: Home(), acceptCookies }))
        }
    } catch (error) {
        logger.error(error)

        res.redirect('/error')
    }
}