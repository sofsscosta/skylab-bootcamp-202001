function DeleteUser({onSubmit, onToLogin, error}) {

    return <form className="changeUsername" onSubmit = { event => {
        event.preventDefault()

            const password = event.target.password.value
            
            onSubmit(password)
    }}>
        <h2 className="form__title">Sign-in</h2>
        <input className="input" type="password" name="password" placeholder="password"/>
        <button className="button">Delete</button>

        { error && <Feedback level="error" message={error} />}

        <a className="link" href="" onClick = { event => {
            event.preventDefault()
            onToLogin()
        }}>Go back to login</a>
    </form> 
}