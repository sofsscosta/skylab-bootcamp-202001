const Feedback = require('./feedback')

module.exports = function (props = {}) {
    const { error, username } = props

    return `<section class="login">
    <h1>Login</h1>
    <form action="/login" method="POST">
        <input type="text" name="username" placeholder="username" ${username? `value="${username}"`: ''}>
        <input type="password" name="password" placeholder="password">
        <button>Send</button>
        ${ error ? Feedback({ level: 'error', message: error }) : ''}
    </form>
    <a href="/register">Register</a>
</section>`
}