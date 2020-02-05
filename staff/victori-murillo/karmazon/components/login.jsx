function Login({onSubmit, handleGoToRegister, error}) {
    const _onSubmit = event => {
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value
        onSubmit(username, password)
    }

    const onToRegister = event =>  {
        event.preventDefault()
        handleGoToRegister()
    }

    return <form className="login" onSubmit={_onSubmit} >
        <h2>Sign-in</h2>
        <input type="text" name="username" placeholder="username" autoComplete="off" />
        <input type="password" name="password" placeholder="password" autoComplete="off" />
        <button>Login</button>
        {error && <p style={{color: "red"}}>{error}</p>}
        <a href="" onClick={onToRegister} >Register</a>
    </form>
}