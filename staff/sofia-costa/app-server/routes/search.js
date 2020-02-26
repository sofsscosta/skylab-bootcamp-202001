const { App, Home } = require('../components')
const { searchVehicles } = require('../logic')
const { logger } = require('../utils')

module.exports = (req, res) => {
    const { session: { acceptCookies, token }, query: { query } } = req
    req.session.query = query

    try {
        if (token) {
            const { name, username } = req.session.user
            return searchVehicles(token, query)
            .then(results => {

                res.render('home', { name, username, query, results, acceptCookies })
            })
            .catch(error => {

                logger.error(error)

                res.redirect('/error')
            })
        }

        else {
            return searchVehicles(undefined, query)
            .then(results => {

                res.render('home', { query, results, acceptCookies })
            })
            .catch(error => {
                logger.error(error)

                res.redirect('/error')
            }) 
        }
    } catch (error) {
        logger.error(error)

        res.redirect('/error')
    }

}