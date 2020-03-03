import React from 'react'

function Register({goToLogin, onSubmit}) {
    
    return <form className="register" onSubmit={event => {
        event.preventDefault()

        const name = event.target.name.value
        const surname = event.target.surname.value
        const email = event.target.email.value
        const password = event.target.password.value

        onSubmit(name, surname, email, password)
    }}>
        <h1>Register</h1>
        
        {/* { error && <Feedback level="error" message={error} />} */}

        <input type="text" name="name" placeholder="name" />
        <input type="text" name="surname" placeholder="surname" />
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>Register</button>
        <span onClick={event => {
            event.preventDefault()

            goToLogin()
        }}>Login</span>
    </form>

}

export default Register