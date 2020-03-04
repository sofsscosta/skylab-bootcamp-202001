import React, { useState, Fragment } from 'react'
import { Login, Register, Home, PublishEvent, RetrievePublished } from './'
import './App.sass'
import { authenticate, registerUser, retrieveUser, createEvent, retrievePublished } from '../logic'


function App() {

    const [view, setView] = useState('login')
    const [user, setUser] = useState()
    const [token, setToken] = useState()
    const [events, setEvents] = useState(undefined)

    //const [viewSection, setViewSection] = useState()

    async function handleLogin(email, password) {

        try {
            const auth = await authenticate(email, password)

            const token = await auth

            setToken(token)

            const user = await retrieveUser(token)

            const change = await setUser(user)

            setView('home')

            return change

            //     .then(_token => {
            //     setToken(_token)
            //     return retrieveUser(_token)
            // })
            //     .then(user => {
            //         setUser(user)
            //         setView('home')
            //     })
            //     .catch(error => console.log(error))

        } catch (error) {
            console.error(error)
        }
    }

    async function handleRegister(name, surname, email, password) {
        try {
            const register = await registerUser(name, surname, email, password)

            setView('login')

            return register
        }
        catch (error) {
            console.error(error)
        }
    }

    function handleGoToRegister() {
        setView('register')
    }

    function handleGoToLogin() {
        setView('login')
    }

    function handlePublishEvent() {
        setView('publish')
    }

    async function handleRetrievePublished() {

        setView('published')

        try {

            const _token = token

            const retrieve = await retrievePublished(_token)

            const events = await retrieve

            setEvents(events)

            return events
                // .then(events => {
                //     setEvents(events)
                // })
                // .catch(error => console.log('async error: ' + error))
        }
        catch (error) {
            console.log('sync error: ' + error)
        }
    }

    async function handleCreateEvent(_token, title, description, location, date) {
        try {
            _token = token

            const create = await createEvent(_token, title, description, location, date)

            return create
        }
        catch (error) {
            console.error(error)
        }
    }

    return (

        <Fragment>

            {view === 'login' && <Login onSubmit={handleLogin} goToRegister={handleGoToRegister} />}

            {view === 'register' && <Register onSubmit={handleRegister} goToLogin={handleGoToLogin} />}

            {view !== 'login' && view !== 'register' && <Home user={user} onToPublishEvent={handlePublishEvent} RetrievePublished={handleRetrievePublished} />}

            {view === 'publish' && <PublishEvent onSubmit={handleCreateEvent} />}

            {view === 'published' && <RetrievePublished events={events}/>}

        </Fragment>

    )

}

export default App