function Register (props) {
    const {error} = props

    return `<h1>REGISTER</h1>
<form action="/register" method="POST">
    <input type="text" placeholder="name" name="name">
    <input type="text" placeholder="surname" name="surname">
    <input type="text" placeholder="username" name="username">
    <input type="password" placeholder="password" name="password">
    <button type="submit">REGISTER</button>

    ${error ? `<p>${error.message}</p>` : ''}

    <a href="/login.html">Already registered? Go to login!</a>
</form>`
}

module.exports = Register
