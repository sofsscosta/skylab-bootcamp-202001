function Register(props = {}) {
    const { error } = props

    return `<section>
    <h1>REGISTER</h1>
    <form action="/register" method="POST">
    <input type="text" placeholder="name" name="name">
    <input type="text" placeholder="surname" name="surname">
    <input type="text" placeholder="username" name="username">
    <input type="password" placeholder="password" name="password">
    <button type="submit">REGISTER</button>

    ${error ? `<p>${error}</p>` : ''}

    </form>
    <a href="/login">Already registered? Go to login!</a>
    <section>`
}

module.exports = Register
