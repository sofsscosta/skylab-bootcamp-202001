import React, { useState, Fragment } from 'react'
import { Login, Register, Home, PublishEvent } from './'
import './App.sass'
import { authenticate, registerUser, retrieveUser, createEvent } from '../logic'


function App() {

    const [view, setView] = useState('login')
    const [user, setUser] = useState()
    const [token, setToken] = useState()

    function handleLogin(email, password) {
        try {
            return authenticate(email, password)
                .then(_token => {
                    setToken(_token)
                    return retrieveUser(_token)
                })
                .then(user => {
                    setUser(user)
                    setView('home')
                })
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

    function handleCreateEvent(_token, title, description, location, date) {
        try {
            _token = token
            createEvent(_token, title, description, location, date)
                .then(() => { })
                .catch(error => console.log(error))
        }
        catch (error) {
            console.log(error)
        }
    }

    return (

        <Fragment>

            {view === 'login' && <Login onSubmit={handleLogin} goToRegister={handleGoToRegister} />}

            {view === 'register' && <Register onSubmit={handleRegister} goToLogin={handleGoToLogin} />}

            {view === 'home' && <Home user={user} />}

            {view === 'home' && user && <PublishEvent onSubmit={handleCreateEvent} />}


        </Fragment>

    )

}

export default App