import React, { useState, useEffect, Fragment } from 'react'
import { Login, Register } from './'
import './App.sass'
import { authenticate, registerUser } from '../logic'


function App() {

    const [view, setView] = useState('login')

    function handleLogin(email, password) {
        try {
            return authenticate(email, password)
                .then(() => setView('home'))
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    }

    function handleRegister(name, surname, email, password) {
        try {
            return registerUser(name, surname, email, password)
                .then(() => setView('login'))
                .catch(error => console.log(error))
        }
        catch (error) {
            console.log(error)
        }
    }

    function handleGoToRegister() {
        setView('register')
    }

    function handleGoToLogin() {
        setView('login')
    }

    return (

        <Fragment>

            {view === 'login' && <Login onSubmit={handleLogin} goToRegister={handleGoToRegister} />}

            {view === 'register' && <Register onSubmit={handleRegister} goToLogin={handleGoToLogin} />}

        </Fragment>

    )

}

export default App