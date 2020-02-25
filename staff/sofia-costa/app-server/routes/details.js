const { App, Home, Details } = require('../components')
const { retrieveVehicle } = require('../logic')
const { logger } = require('../utils')


module.exports = (req, res) => {
    const { session: { acceptCookies, token }, params: { id } } = req
    try {
        if (token) {
            const { token } = req.session
            retrieveVehicle(token, id, (error, result) => {
                if (error) {
                    logger.warn(error)
                    res.redirect(req.get('referer'))
                }
                if (result)
                    res.send(App({ title: `${result.name}`, body: Details({ result }), acceptCookies }))
            })
        }
        else {
            retrieveVehicle(undefined, id, (error, result) => {
                if (error) {
                    logger.warn(error)
                    res.redirect(req.get('referer'))
                }
                if (result)
                    res.send(App({ title: `${result.name}`, body: Details({ result }), acceptCookies }))
            })
        }
    }
    catch ({ message }) {
        const { session: { user: { name } } } = req
        logger.warn(message)
        res.send(App({ title: 'Home', body: Home({ name, error: message }), acceptCookies }))

    }
}