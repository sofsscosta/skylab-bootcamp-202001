function Landing() {

    return `<a href="/register">Go To Register</a> or <a href="/login">Go To Login</a>
    ${error ? `<p>${error.message}<p>` : ''}`
}

module.exports = Landing
