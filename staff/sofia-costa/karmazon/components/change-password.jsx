function ChangePassword({onSubmit, onToLogin, error}) {
   
    return <form className="changeUsername" onSubmit = { event => {
        event.preventDefault()

            const oldPassword = event.target.oldPassword.value
            const password = event.target.password.value
            
            onSubmit(oldPassword, password)
    }}>
        <h2 className="form__title">Sign-in</h2>
        <input className="input" type="password" name="oldPassword" placeholder="Old Password"/>
        <input className="input" type="password" name="password" placeholder="New Password"/>
        <button className="button">Change</button>

        { error && <Feedback level="error" message={error} />}

        <a className="link" href="" onClick = { event => {
            event.preventDefault()
            onToLogin()
        }}>Go back to login</a>
    </form> 
}