function ChangeUsername ({onSubmit, onToLogin, error}) {

    return <form className="changeUsername" onSubmit = { event => {
        event.preventDefault()

            const newUsername = event.target.username.value
            onSubmit(newUsername)
    }}>
        <h2 className="form__title">Sign-in</h2>
        <input className="input" type="text" name="username" placeholder="New Username"/>
        <button className="button">Change</button>

        { error && <Feedback level="error" message={error} />}

        <a className="link" href="" onClick = { event => {
            event.preventDefault()
            onToLogin()
        }}>Go back to login</a>
    </form> 
}