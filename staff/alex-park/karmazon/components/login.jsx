function Login ({ onSubmit, onToRegister }) {

    return <form className="login" onSubmit={event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        onSubmit(username, password)
    }}>
        <h2>SIGN-IN</h2>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button>LOGIN</button>
        <a href="" onClick={event => {
            event.preventDefault()

            onToRegister()
        }}>REGISTER</a>
    </form>
}



    // __locateFeedbackInContainer__(feedback) {
    //     const button = event.target.container.querySelector('button')
    //     event.target.container.insertBefore(feedback.container, button)
    // }