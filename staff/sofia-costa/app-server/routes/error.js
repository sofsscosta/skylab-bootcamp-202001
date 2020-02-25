// const { App, Home } = require('../components')

module.exports = (req, res) => {
    // const { session: { acceptCookies } } = req
    res.redirect(req.get('referer'))
}