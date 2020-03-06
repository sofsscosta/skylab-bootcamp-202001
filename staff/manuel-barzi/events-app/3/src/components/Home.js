import React, { useState, useEffect, useContext } from 'react'
import CreateEvent from './CreateEvent'
import { retrieveUser, retrieveLastEvents } from '../logic'
import { Context } from './ContextProvider'

export default function () {
    const [state, setState] = useContext(Context)
    const [name, setName] = useState()

    useEffect(() => {
        const { token } = state

        if (token)
            (async () => {
                try {
                    const { name } = await retrieveUser(token)

                    setName(name)
                } catch ({ message }) {
                    setState({ error: message, page: 'login' })
                }
            })()
        else setState({ page: 'login' })
    }, [])

    function handleLogout() {
        sessionStorage.clear()
        
        setState({ page: 'login' })
    }

    return <>
        <h1>Hello, {name}!</h1>
        <button onClick={handleLogout}>Logout</button>
        <CreateEvent />
    </>
}