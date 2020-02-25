const { App, Home } = require('../components')
const { searchVehicles } = require('../logic')
const { logger } = require('../utils')

module.exports = (req, res) => {
    const { session: { acceptCookies, token }, query: { query } } = req
    req.session.query = query

    try {
        if (token) {
            const { name, username } = req.session.user
            searchVehicles(token, query, (error, results) => {
                if (error) {
                    logger.error(error)

                    res.redirect('/error')
                }
                else {
                    res.send(App({ title: 'Home', body: Home({ name, username, query, results }), acceptCookies }))
                }
            })
        }

        else {
            searchVehicles(undefined, query, (error, results) => {
                if (error) {
                    logger.error(error)

                    res.redirect('/error')
                }
                else {
                    res.send(App({ title: 'Home', body: Home({ query, results }), acceptCookies }))
                }
            })
        }
    } catch (error) {
        logger.error(error)

        res.redirect('/error')
    }

}