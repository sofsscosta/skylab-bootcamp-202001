import React, { useState, useEffect, useContext } from 'react'
import { InitScreen, Landing, Login, Register, Header, Footer, Menu, Search, Detail } from './components'

export default function App() {

  const [view, setView] = useState('init')
  const [menu, setMenu] = useState(false)
  const [veggie, setVeggie] = useState(undefined)

  // useEffect(() => {

  //   let user = retrieveUser(token)
  //   return user ? setToken(user) : ''
  // })

  function handleStart() {
    setView('start')
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

  const handleMenu = () => {
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

  function handleGoToDetail(veggie) {
    setVeggie(veggie)
    console.log(veggie)
    setView('detail')
  }

  return (
    <>
      {view === 'init' && <InitScreen start={handleStart} />}
      {menu && <Menu goToMyLands={handleGoToMyLands} goToMyVeggies={handleGoToMyVeggies} goToCalendar={handleGoToCalendar} goToEditProfile={handleGoToEditProfile} goToSearch={handleGoToSearch} goToSuggestions={handleGoToSuggestions} goToTutorial={handleGoToTutorial} menu={handleMenu} />}
      {view !== 'init' && < Header goToLanding={handleGoToLanding} menuClick={handleMenu} />}
      {view === 'start' && <Landing goToRegister={handleGoToRegister} />}
      {view === 'register' && <Register goToLogin={handleGoToLogin} />}
      {view === 'login' && <Login goToRegister={handleGoToRegister} goToLanding={handleGoToLanding} />}
      {view === 'search' && <Search goToDetail={handleGoToDetail} />}
      {view === 'detail' && veggie && <Detail item={veggie} />}
      {view !== 'init' && <Footer />}
    </>
  )
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