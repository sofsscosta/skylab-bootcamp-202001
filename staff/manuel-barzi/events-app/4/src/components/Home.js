import React, { useState, useEffect, useContext } from 'react'
import CreateEvent from './CreateEvent'
import { retrieveUser, isLoggedIn, logout, publishEvent, retrieveLastEvents } from '../logic'
import { Context } from './ContextProvider'

export default function () {
    const [state, setState] = useContext(Context)
    const [name, setName] = useState()

    useEffect(() => {
        if (isLoggedIn())
            (async () => {
                try {
                    const { name } = await retrieveUser()

                    setName(name)
                } catch ({ message }) {
                    setState({ error: message, page: 'login' })
                }
            })()
        else setState({ page: 'login' })
    }, [])

    function handleLogout() {
        logout()

        setState({ page: 'login' })
    }

    function handleCreateEvent(title, description, date, location) {
        // TODO
    }

    return <>
        <h1>Hello, {name}!</h1>
        <button onClick={handleLogout}>Logout</button>
        <CreateEvent onSubmit={handleCreateEvent} />
    </>
}