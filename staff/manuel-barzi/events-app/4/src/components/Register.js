import React from 'react'
import './Register.sass'
import Feedback from './Feedback'

export default function ({ onSubmit, onGoToLogin, error }) {
    function handleSubmit(event) {
        event.preventDefault()

        const { target: {
            name: { value: name },
            surname: { value: surname },
            email: { value: email },
            password: { value: password }
        } } = event

        onSubmit(name, surname, email, password)
    }

    function handleGoToLogin(event) {
        event.preventDefault()

        onGoToLogin()
    }

    return <div className="register">
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" />
            <input type="text" name="surname" placeholder="surname" />
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <button>Register</button>
        </form>
        {error && <Feedback message={error} level="warn" />}
        <p>Go to <a href="" onClick={handleGoToLogin}>login</a></p>
    </div>
}