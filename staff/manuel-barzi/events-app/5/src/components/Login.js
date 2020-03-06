import React, { useEffect } from 'react'
import './Login.sass'
import Feedback from './Feedback'

export default function ({ onSubmit, onGoToRegister, error, onMount }) {
    useEffect(() => {
        onMount()
    }, [])

    function handleSubmit(event) {
        event.preventDefault()

        const { target: {
            email: { value: email },
            password: { value: password }
        } } = event

        onSubmit(email, password)
    }

    function handleGoToRegister(event) {
        event.preventDefault()

        onGoToRegister()
    }

    return <>
        <form className="register" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <button>Login</button>
            {error && <Feedback message={error} level="warn" />}
            <p>Go to <a href="" onClick={handleGoToRegister}>register</a></p>
        </form>
    </>
}