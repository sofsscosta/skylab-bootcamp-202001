function Login ({onSubmit, onToRegister, error}) {

    return <form className="login" onSubmit = { event => {
        event.preventDefault()

            const username = event.target.username.value
            const password = event.target.password.value

            onSubmit(username, password)
    }}>
        <h2 className="form__title">Sign-in</h2>
        <input className="input" type="text" name="username" placeholder="username" required/>
        <input className="input" type="password" name="password" placeholder="password" required/>
        <button className="button">Login</button>

        { error && <Feedback level="error" message={error} />}

        <a className="link" href="" onClick = { event => {
            event.preventDefault()
            onToRegister()
        }}>Click here to register</a>
    </form>
}