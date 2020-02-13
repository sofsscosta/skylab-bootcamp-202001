function Login ({ onSubmit, onToRegister, error }) {

    return <form className="login" onSubmit={event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        onSubmit(username, password)
    }}>
        <h2>SIGN-IN</h2>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />

        {error && <Feedback level='error' message={error}/>}
        
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