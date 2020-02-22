function Landing(props = {}) {

    const { SignCookies } = props

    return `<a href="/register">Go To Register</a> or <a href="/login">Go To Login</a>
    ${error ? `<p>${error.message}<p>` : ''}
    ${SignCookies ? SignCookies() : ''}`
    
}
module.exports = Landing

//${SignCookie}`
