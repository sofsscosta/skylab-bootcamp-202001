const { App, Home } = require('../components')
const { retrieveFavs } = require('../logic')
const { logger } = require('../utils')

module.exports = (req, res) => {
    const { session: { acceptCookies, token }, params: { name } } = req

    try {
        return retrieveFavs(token)
        .then(results => {
            console.log(results)
            res.render('home', { name, results, acceptCookies })
        })
        .catch(error => {

            logger.error(error)
    
            res.redirect('/error')
        })
            
    } catch (error) {
        logger.error(error)

        res.redirect('/error')
    }
}