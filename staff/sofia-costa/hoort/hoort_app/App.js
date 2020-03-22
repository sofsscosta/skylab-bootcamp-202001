import React, { useState, useEffect } from 'react'
import {
  InitScreen, Landing, Login, Register, Header, Footer, Menu,
  Search, Detail, Results, Lands, CreateLand, PlantLand, Modal,
  CreateLandModal
} from './components'

export default function App() {

  const [view, setView] = useState('init')
  const [menu, setMenu] = useState(false)
  const [veggie, setVeggie] = useState(undefined)
  const [veggies, setVeggies] = useState(undefined)
  const [resultsType, setResultsType] = useState()
  const [lands, setLands] = useState()
  const [land, setLand] = useState()
  const [landForModal, setLandForModal] = useState()
  const [modal, setModal] = useState(false)
  const [createLandModal, setCreateLandModal] = useState(false)
  const [modalType, setModalType] = useState()
  const [newLandProps, setNewLandProps] = useState()
  const [token, setToken] = useState()


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

  function handleGoToMyLands(userLands) {
    setView('myLands')
    setLands(userLands)
  }

  function handleGoToMyVeggies(userVeggies) {
    setView('userVeggies')
    setVeggies(userVeggies)
    setResultsType('myVeggies')
  }

  function handleGoToCalendar() {

  }

  function handleGoToEditProfile() {

  }

  function handleGoToSearch() {
    setView('search')
  }

  function handleGoToSuggestions(suggestedVeggies) {
    setView('userVeggies')
    setVeggies(suggestedVeggies)
    setResultsType('suggested')
  }

  function handleGoToTutorial() {

  }

  function handleGoToDetail(veggie) {
    setVeggie(veggie)
    setView('detail')
  }

  function handleGoToLandDetail() {

  }

  function handleGoToCreateLand(props) {
    if (props) {
      setNewLandProps(props)
      handleCreateLandModal()
      setView('createLand')
    }
    else setView('createLand')
  }

  function handleGoToPlantLand(land) {
    setLand(land)
    setView('plantLand')
  }

  function handleModal(veg, _land, type, token) {
    setVeggie(veg)
    setLandForModal(_land)
    setModalType(type)
    setToken(token)
    !modal ? setModal(true) : setModal(false)
  }

  function handleCreateLandModal() {
    !createLandModal ? setCreateLandModal(true) : setCreateLandModal(false)
  }

  return (
    <>
      {view === 'init' && <InitScreen start={handleStart} />}
      {view === 'createLand' && createLandModal && <CreateLandModal onBackgroundClick={handleCreateLandModal} goToCreateLand={handleGoToCreateLand} />}
      {view !== 'init' && view !== 'landing' && modal && <Modal onBackgroundClick={handleModal} veggie={veggie} type={modalType} land={landForModal} token={token} />}
      {menu && <Menu goToMyLands={handleGoToMyLands} goToMyVeggies={handleGoToMyVeggies} goToCalendar={handleGoToCalendar} goToEditProfile={handleGoToEditProfile} goToSearch={handleGoToSearch} goToSuggestions={handleGoToSuggestions} goToTutorial={handleGoToTutorial} menu={handleMenu} />}
      {view !== 'init' && < Header goToLanding={handleGoToLanding} menuClick={handleMenu} goToMyVeggies={handleGoToMyVeggies} />}
      {view === 'start' && <Landing goToRegister={handleGoToRegister} />}
      {view === 'register' && <Register goToLogin={handleGoToLogin} />}
      {view === 'login' && <Login goToRegister={handleGoToRegister} goToLanding={handleGoToLanding} />}
      {view === 'search' && <Search goToDetail={handleGoToDetail} />}
      {view === 'myLands' && <Lands goToLandDetail={handleGoToLandDetail} goToCreateLand={handleGoToCreateLand} lands={lands} />}
      {view === 'userVeggies' && <Results goToDetail={handleGoToDetail} results={veggies} resultsType={resultsType} />}
      {view === 'createLand' && <CreateLand goToPlantLand={handleGoToPlantLand} initModal={handleCreateLandModal} newLandProps={newLandProps} />}
      {view === 'plantLand' && <PlantLand land={land} onClickVeggie={handleModal} updatedLand={landForModal} />}
      {view === 'detail' && <Detail item={veggie} />}
      {view !== 'init' && <Footer view={view} />}
      {/* Footer => review for submitting data on createLand */}
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