function Register (props) {

    const onSubmit = event => {
        event.preventDefault()

        let name = event.target.name.value
        let surname = event.target.surname.value
        let username = event.target.username.value
        let password = event.target.password.value

        props.onSubmit({name, surname, username, password})
    }

    return <form className="register" onSubmit={onSubmit} >
        <h2>Sign-up</h2>
        <input type="text" name="name" placeholder="name" autoComplete="true" />
        <input type="text" name="surname" placeholder="surname" autoComplete="true" />
        <input type="text" name="username" placeholder="username" autoComplete="true" />
        <input type="password" name="password" placeholder="password" autoComplete="true" />
        <button>Register</button>
        <a href="" onClick={(event)=> {
            event.preventDefault()
            props.onToLogin()}} >Login</a>
    </form>

    /*
    
    __locateFeedbackInContainer__(feedback) {
        var input = this.container.querySelector('input')
        this.container.insertBefore(feedback.container, input)
    }
    */
}
