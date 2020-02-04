function Register ({ onSubmit, onToLogin, error }) {

    return <form className="register" onSubmit={event => {
        event.preventDefault()

        const name = event.target.name.value
        const surname = event.target.surname.value
        const username = event.target.username.value
        const password = event.target.password.value

        onSubmit(name, surname, username, password)
    }}>
            <h2>Sign-up</h2>

            {error && <Feedback level={'error'} message={error}/>}

            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="surname" placeholder="Surname" />
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button>REGISTER</button>
            <a href="" onClick={event => {
                event.preventDefault()

                onToLogin()
            }}>LOGIN</a>
    </form>

}

//     __locateFeedbackInContainer__(feedback) {
//         const input = event.target.container.querySelector('input')

//         event.target.container.insertBefore(feedback.container, input)
//     }
// }