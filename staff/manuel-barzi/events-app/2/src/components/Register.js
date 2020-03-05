import React from 'react'
import './Register.sass'
import Feedback from './Feedback'

export default function ({ onSubmit, error }) {
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

    return <>
        <form className="register" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" />
            <input type="text" name="surname" placeholder="surname" />
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <button>Register</button>
        </form>
        {error && <Feedback message={error} level="warn" />}
    </>
}