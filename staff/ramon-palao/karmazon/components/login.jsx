function Login({ onSubmit, onToRegister, error}) {
    return <form className="login" onSubmit={event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        onSubmit(username, password)
    }}>
        <h2 className="login__title">Sign-in</h2>
        <input type="text" name="username" placeholder="username"/>
        <input type="password" name="password" placeholder="password"/>
        <button>Login</button>
        <a href="" onClick={event => {
            event.preventDefault()

            onToRegister()
        }}>Register</a>

        {error && <Feedback level="error" message={error}/>}
    </form>
}

//     __locateFeedbackInContainer__ (feedback) {
//         const button = this.container.querySelector('button')

//         this.container.insertBefore(feedback.container, button)
// }