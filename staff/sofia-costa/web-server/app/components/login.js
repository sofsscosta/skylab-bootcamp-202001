function Login (props = {}) {

    const {error} = props
    
    return `<h1>LOGIN</h1>
<form action="/login" method="POST">
    <input type="text" placeholder="username" name="username">
    <input type="password" placeholder="password" name="password">
    <button type="submit">LOGIN</button>

    ${error ? `<p>${error}</p>` : ''}

    <a href="/register">Not registered? Register here!</a>
</form>`

}

module.exports = Login