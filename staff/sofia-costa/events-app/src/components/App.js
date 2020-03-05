import React, { useState, Fragment } from 'react'
import { Login, Register, Home, PublishEvent, RetrievePublished, RetrieveLast } from './'
import './App.sass'
import { authenticate, registerUser, retrieveUser, createEvent, retrievePublished, retrieveLastEvents, subscribeEvent } from '../logic'

function App() {

    const [view, setView] = useState('login')
    const [user, setUser] = useState('Anon')
    const [token, setToken] = useState()
    const [events, setEvents] = useState(undefined)
    const [error, setError] = useState(undefined)


    //const [viewSection, setViewSection] = useState()

    async function handleLogin(email, password) {

        try {
            const auth = await authenticate(email, password)

            const token = await auth

            setToken(token)

            const user = await retrieveUser(token)

            const change = await setUser(user)

            if (!user.error)
                setView('home')

            return change

        } catch (error) {
            setError(error.message)
            setTimeout(()=> setError(undefined), 3000)
        }
    }

    async function handleRegister(name, surname, email, password) {
        try {
            const register = await registerUser(name, surname, email, password)

            setView('login')

            return register
        }
        catch (error) {
            setError(error.message)
            setTimeout(()=> setError(undefined), 3000)
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
            setError(error.message)
            setTimeout(()=> setError(undefined), 3000)
        }
    }

    async function handleCreateEvent(_token, title, description, location, date) {
        try {
            _token = token

            const create = await createEvent(_token, title, description, location, date)

            return create
        }
        catch (error) {
            setError(error.message)
            setTimeout(()=> setError(undefined), 3000)
        }
    }

    async function handleRetrieveLast() {

        setView('last')

        try {
            const last = await retrieveLastEvents()

            const events = await last

            if (events)
                setEvents(events)

            return events
        }
        catch (error) {
            setError(error.message)
            setTimeout(()=> setError(undefined), 3000)
        }
    }

    async function handleSubscribe(_token, eventId) {

        try {
            _token = token
            const subs = await subscribeEvent(_token, eventId)
            const subbed = await subs
            return subbed
        }
        catch(error) {
            console.log('failed!')
            setError(error.message)
            setTimeout(()=> setError(undefined), 3000)
        }

    }

    return (

        <Fragment>

            {view === 'login' && <Login onSubmit={handleLogin} goToRegister={handleGoToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} goToLogin={handleGoToLogin} error={error} />}

            {view !== 'login' && view !== 'register' && <Home user={user} onToPublishEvent={handlePublishEvent}
                RetrievePublished={handleRetrievePublished} RetrieveLast={handleRetrieveLast} />}

            {view === 'publish' && <PublishEvent onSubmit={handleCreateEvent} error={error} />}

            {view === 'published' && <RetrievePublished events={events} subscribe={handleSubscribe} error={error} />}

            {view === 'last' && <RetrieveLast events={events} subscribe={handleSubscribe} error={error} />}

        </Fragment>

    )

}

export default App