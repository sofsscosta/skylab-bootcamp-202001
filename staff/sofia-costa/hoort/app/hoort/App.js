import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StatusBar, Button, Image } from 'react-native';
//import styles from './styles/App';
import { InitScreen, Landing, Register, Header, Footer } from './components'

export default function App() {

    // const [state, setState] = useContext()

    const [view, setView] = useState('init')
    const [user, setUser] = useState('Anon')
    const [token, setToken] = useState()
    const [events, setEvents] = useState(undefined)
    const [event, setEvent] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [id, setId] = useState(undefined)

    function handleStart() {
        setView('start')
    }

    return (
        <>
            {view === 'init' && <InitScreen start={handleStart} />}
            {view === 'start' && < Header />}
            {/* <Landing /> */}
            <Register />
            <Footer />
        </>
    )
}