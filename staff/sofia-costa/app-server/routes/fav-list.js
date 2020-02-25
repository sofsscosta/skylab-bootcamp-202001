const { App, Home } = require('../components')
const { retrieveFavs } = require('../logic')
const { logger } = require('../utils')

module.exports = (req, res) => {
    const { session: { acceptCookies, token }, params: { name } } = req

    try {
        retrieveFavs(token, (error, results) => {
            if (error) {
                logger.error(error)

                res.redirect('/error')           
            }
            else {
                res.send(App({ title: 'favourites', body: Home({ name, results }), acceptCookies }))
            }
        })
    } catch (error) {
        logger.error(error)

        res.redirect('/error')    
    }
}