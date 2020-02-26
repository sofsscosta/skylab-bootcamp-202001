const { App, Home } = require('../components')
const { logger } = require('../utils')

module.exports = (req, res) => {
    const { session: { token, acceptCookies } } = req

    try {
        if (token) {
            retrieveUser(token)
            .then(user => {
                req.session.user = user
                const { session: { user: { name, username } } } = props
                res.render('home', { name, username, acceptCookies })
            })
            .catch(error => {
                
                logger.error(error)
    
                return res.redirect('/error')
            })
                
        } else {
            res.render('home', { acceptCookies })
        }
    } catch (error) {
        logger.error(error)

        res.redirect('/error')
    }
}