import React, { useState, useEffect, useContext } from 'react'
import CreateEvent from './CreateEvent'
import { retrieveUser, isLoggedIn, logout, publishEvent, retrieveLastEvents } from '../logic'
import { Context } from './ContextProvider'
import { withRouter } from 'react-router-dom'

export default withRouter(function ({ history }) {
    const [, setState] = useContext(Context)
    const [name, setName] = useState()

    useEffect(() => {
        if (isLoggedIn())
            (async () => {
                try {
                    const { name } = await retrieveUser()

                    setName(name)
                    
                    setState({ page: 'home' })
                } catch ({ message }) {
                    setState({ error: message, page: 'login' })
                }
            })()
        else setState({ page: 'login' })
    }, [])

    function handleLogout() {
        logout()

        setState({ page: 'login' })

        history.push('/login')
    }

    function handleCreateEvent(title, description, date, location) {
        // TODO
    }

    return <>
        <h1>Hello, {name}!</h1>
        <button onClick={handleLogout}>Logout</button>
        <CreateEvent onSubmit={handleCreateEvent} />
    </>
})