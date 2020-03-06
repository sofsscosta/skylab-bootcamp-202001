import React from 'react'
import './Login.sass'
import Feedback from './Feedback'

export default function ({ onSubmit, error }) {
    function handleSubmit(event) {
        event.preventDefault()

        const { target: {
            email: { value: email },
            password: { value: password }
        } } = event

        onSubmit(email, password)
    }

    return <>
        <form className="register" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <button>Login</button>
            {error && <Feedback message={error} level="warn" />}
        </form>
    </>
}