import React, { useState, useEffect, useContext } from 'react'
//import { View, Text, StatusBar, Image } from 'react-native';
import { InitScreen, Landing, Login, Register, Header, Footer } from './components'
import { registerUser } from './logic'

export default function App() {

  const [view, setView] = useState('init')

  function handleStart() {
    setView('start')
  }

  async function handleLogin(name, username, email, password) {
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

  async function handleRegister(name, username, email, password) {
    try {
      await registerUser(name, username, email, password)
      console.log('yeah baby')
      handleGoToLogin()
    }
    catch (error) {
      console.log('error message here')
      const { message } = error

      console.log(message)
    }
  }

  function handleGoToRegister() {
    setView('register')
  }

  function handleGoToLogin() {
    setView('login')
  }

  function handleGoToLanding() {
    setView('start')
  }

  return (
    <>
      {view === 'init' && <InitScreen start={handleStart} />}
      {view !== 'init' && < Header goToLanding={handleGoToLanding} />}
      {view === 'start' && <Landing goToRegister={handleOnToRegister} />}
      {view === 'register' && <Register register={handleRegister} goToLogin={handleGoToLogin} />}
      {view === 'login' && <Login login={handleLogin} goToRegister={handleGoToRegister} />}
      {view !== 'init' && <Footer />}
    </>
  )
}