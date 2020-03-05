import React from 'react'
import Feedback from './Feedback'

function Login({onSubmit, goToRegister, error}) {

    return <div>
        <h1>Login</h1>
        <form onSubmit={event => {
            event.preventDefault()
            onSubmit(event.target.email.value, event.target.password.value)
        }}>
            <input type="text" placeholder="email" name="email"/>
            <input type="password" placeholder="password" name="password"/>
            <button>Ok</button>
        </form>
        <span onClick={event => {
            event.preventDefault()
            goToRegister()
        }} >Register</span>
        {error && <Feedback error={error}/>}
    </div>
}

export default Login