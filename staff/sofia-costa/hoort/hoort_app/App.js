import React, { useState, useEffect, useContext } from 'react'
//import { View, Text, StatusBar, Image } from 'react-native'
import { InitScreen, Landing, Login, Register, Header, Footer, Menu } from './components'
import { AsyncStorage } from 'react-native'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

export default function App() {

  const [view, setView] = useState('init')

  function handleStart() {
    setView('start')
  }

  // async function handleToken(fun, token) {
  //   let token

  //   try {
  //     token ? token = await AsyncStorage[fun](token) : await AsyncStorage[fun]()
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  //   if (token !== undefined) return token
  // }

  async function saveToken(token) {
    try {
      await AsyncStorage.setItem('token', token)
      setToken(token)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function deleteToken() {
    try {
      await AsyncStorage.removeItem('token')
    } catch (error) {
      console.log(error.message)
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

  function handleMenu() {
    setView('menu')
  }

  function handleGoToMyLands() {

  }

  function handleGoToMyVeggies() {

  }

  function handleGoToCalendar() {

  }

  function handleGoToEditProfile() {

  }

  function handleGoToSearch() {

  }

  function handleGoToSuggestions() {

  }

  function handleGoToTutorial() {

  }

  return (
    <>
      {view === 'init' && <InitScreen start={handleStart} />}
      {view !== 'init' && < Header goToLanding={handleGoToLanding} menuClick={handleMenu} />}
      {view === 'start' && <Landing goToRegister={handleGoToRegister} />}
      {view === 'menu' && <Menu goToMyLands={handleGoToMyLands} goToMyVeggies={handleGoToMyVeggies} goToCalendar={handleGoToCalendar} goToEditProfile={handleGoToEditProfile} goToSearch={handleGoToSearch} goToSuggestions={handleGoToSuggestions} goToTutorial={handleGoToTutorial} />}
      {view === 'register' && <Register goToLogin={handleGoToLogin} />}
      {view === 'login' && <Login goToRegister={handleGoToRegister} goToLanding={handleGoToLanding} />}
      {view !== 'init' && <Footer />}
    </>
  )
}