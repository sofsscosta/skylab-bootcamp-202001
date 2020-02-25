const { Login, App } = require('../components')

module.exports = (req, res) => {
    const { session: { username } } = req

    if (username) return res.redirect(`/`)

    const { session: { acceptCookies } } = req

    // res.send(App({ title: 'Login', body: Login(), acceptCookies }))
    res.render('login', {acceptCookies})
}