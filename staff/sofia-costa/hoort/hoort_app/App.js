import React, { useState, useEffect, useContext } from 'react'
//import { View, Text, StatusBar, Image } from 'react-native'
import { InitScreen, Landing, Login, Register, Header, Footer, Menu, Search } from './components'
import { AsyncStorage } from 'react-native'
import { retrieveUser } from './logic'
// import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

export default function App() {

  const [view, setView] = useState('init')
  const [menu, setMenu] = useState(false)
  //const [token, setToken] = useState(false)

  // useEffect(() => {

  //   let user = retrieveUser(token)
  //   return user ? setToken(user) : ''
  // })

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
    !menu ? setMenu(true) : setMenu(false)
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
    setView('search')
  }

  function handleGoToSuggestions() {

  }

  function handleGoToTutorial() {

  }

  return (
    <>
      {view === 'init' && <InitScreen start={handleStart} />}
      {menu && <Menu goToMyLands={handleGoToMyLands} goToMyVeggies={handleGoToMyVeggies} goToCalendar={handleGoToCalendar} goToEditProfile={handleGoToEditProfile} goToSearch={handleGoToSearch} goToSuggestions={handleGoToSuggestions} goToTutorial={handleGoToTutorial} menu={handleMenu} />}
      {view !== 'init' && < Header goToLanding={handleGoToLanding} menuClick={handleMenu} />}
      {view === 'start' && <Landing goToRegister={handleGoToRegister} />}
      {view === 'register' && <Register goToLogin={handleGoToLogin} />}
      {view === 'login' && <Login goToRegister={handleGoToRegister} goToLanding={handleGoToLanding} />}
      {view === 'search' && <Search />}
      {view !== 'init' && <Footer />}
    </>
  )
}