import React from 'react'
import Feedback from './Feedback'

function Register({goToLogin, onSubmit, error}) {
    
    return <form className="register" onSubmit={event => {
        event.preventDefault()

        const name = event.target.name.value
        const surname = event.target.surname.value
        const email = event.target.email.value
        const password = event.target.password.value

        onSubmit(name, surname, email, password)
    }}>
        <h1>Register</h1>

        <input type="text" name="name" placeholder="name" />
        <input type="text" name="surname" placeholder="surname" />
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>Register</button>
        <span onClick={event => {
            event.preventDefault()

            goToLogin()
        }}>Login</span>

        {error && <Feedback error={error}/>}
    </form>

}

export default Register