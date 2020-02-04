function Login({ onSubmit, onToRegister}) {

    return <form className="login" onSubmit={event => {

        const username = event.target.username.value
        const password = event.target.password.value

        onSubmit(username, password)

    }}>
        <h2>Sign-in</h2>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password"/>
        <button>Login</button>
        <a href="" onClick={event => {
            event.preventDefault()

            onToRegister()
        }}>Register</a>
    </form>
}