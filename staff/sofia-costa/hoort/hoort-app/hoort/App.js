import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StatusBar, Image } from 'react-native';
//import styles from './styles/App';
import { InitScreen, Landing, Register, Header, Footer } from './components'
import { registerUser } from './logic'

export default function App() {

    const [view, setView] = useState('init')

    function handleStart() {
        setView('start')
    }

    function handleGoToLogin() {
        setView('login')
    }

    async function handleRegister(name, username, email, password) {
        try {
            await registerUser(name, username, email, password)
            console.log('yeah baby')
        }
        catch (error) {
            console.log('error message here')
            const { message } = error

            console.log(message)
        }
    }

    return (
        <>
            {view === 'init' && <InitScreen start={handleStart} />}
            {view === 'start' && < Header />}
            {/* {view === 'start' && <Landing />} */}
            {view === 'start' && <Register register={handleRegister} goToLogin={handleGoToLogin} />}
            {view === 'start' && <Footer />}
        </>
    )
}