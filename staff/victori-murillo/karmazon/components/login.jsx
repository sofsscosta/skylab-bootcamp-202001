function Login(props) {
    const onSubmit = event => {
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value
        props.onSubmit(username, password)
    }

    const onToRegister = event =>  {
        event.preventDefault()
        props.onToRegister()
    }

    return <form className="login" onSubmit={onSubmit} >
        <h2>Sign-in</h2>
        <input type="text" name="username" placeholder="username" autoComplete="off" />
        <input type="password" name="password" placeholder="password" autoComplete="off" />
        <button>Login</button>
        {props.error && <p style={{color: "red"}}>{props.error}</p>}
        <a href="" onClick={onToRegister} >Register</a>
    </form>
}