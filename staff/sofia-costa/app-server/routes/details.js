const { App, Home, Details } = require('../components')
const { retrieveVehicle } = require('../logic')
const { logger } = require('../utils')


module.exports = (req, res) => {
    const { session: { acceptCookies, token }, params: { id } } = req
    try {
        if (token) {
            const { token } = req.session
            return retrieveVehicle(token, id)
            .then(result => {

                res.render('home', { result, acceptCookies })
            })
            .catch(error => {
                logger.warn(error)
                res.redirect(req.get('referer'))

            })
                
        }
        else {
            return retrieveVehicle(undefined, id)
            .then(result => {

                res.render('home', { result, acceptCookies })
            })
            .catch(error => {

                logger.warn(error)
                res.redirect(req.get('referer'))
            })
        }
    }
    catch ({ message }) {
        // const { session: { user: { name } } } = req
        logger.warn(message)
        res.render('home', { error: message, acceptCookies })

    }
}