import React, { useState, useEffect } from 'react'
import {
  InitScreen, Landing, Login, Register, Header, Footer, Menu,
  Search, Detail, Results, Lands, CreateLand, PlantLand, Modal,
  CreateLandModal, Land, Calendar, EditProfile, CalendarModal,
  PlantNowModal
} from './components'
import { isLoggedIn } from './logic'

export default function App() {

  const [error, setError] = useState()
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
  const [calendarModal, setCalendarModal] = useState(false)
  const [plantNowModal, setPlantNowModal] = useState(false)
  const [calendarModalInfo, setCalendarModalInfo] = useState()
  const [modalType, setModalType] = useState()
  const [newLandProps, setNewLandProps] = useState()
  const [coordinates, setCoordinates] = useState()
  const [token, setToken] = useState()

  useEffect(() => {
    (async () => {
      try {
        let _token = await isLoggedIn()
        if (_token !== null) return setToken(_token)
      } catch (error) {
        return setError(error.message)
      }
    })()
  }, [])


  function handleStart() {
    setMenu(false)
    setView('start')
  }

  function handleGoToRegister() {
    setMenu(false)
    setView('register')
  }

  function handleGoToLogin() {
    setMenu(false)
    setView('login')
  }

  function handleGoToLanding() {
    setMenu(false)
    setView('start')
  }

  const handleMenu = () => {
    !menu ? setMenu(true) : setMenu(false)
  }

  function handleGoToMyLands(userLands, token, _error) {
    menu ? setMenu(false) : ''
    setError(undefined)

    _error && setError(_error)
    setToken(token)
    setLands(userLands)
    setView('myLands')
  }

  function handleGoToMyVeggies(userVeggies, _error) {
    setMenu(false)
    setError(undefined)

    _error && setError(_error)
    setView('userVeggies')
    setVeggies(userVeggies)
    setResultsType('myVeggies')
  }

  function handleGoToCalendar(_token) {
    setMenu(false)
    setError(undefined)
    setCalendarModal(false)
    setToken(_token)
    setView('calendar')
  }

  function handleGoToCalendarModal(name, month, lands) {
    setCalendarModalInfo({ lands, name, month })
    !calendarModal ? setCalendarModal(true) : setCalendarModal(false)
  }

  function handleGoToEditProfile() {
    setMenu(false)
    setView('editProfile')
  }

  function handleGoToSearch() {
    setMenu(false)
    setView('search')
  }

  function handleGoToSuggestions(suggestedVeggies, _error) {
    setMenu(false)
    setError(undefined)
    _error && setError(_error)
    setView('userVeggies')
    setVeggies(suggestedVeggies)
    setResultsType('suggested')
  }

  function handleGoToTutorial() {

  }

  function handleGoToDetail(veggie) {
    setMenu(false)
    setError(undefined)
    setVeggie(veggie)
    setView('detail')
  }

  function handleGoToCreateLand(props) {
    setCreateLandModal(false)
    setMenu(false)
    setError(undefined)
    if (props) {
      setNewLandProps(props)
      handleCreateLandModal()
      setView('createLand')
    }
    else {
      setView('createLand')
    }
  }

  function handleGoToPlantLand(land) {
    setMenu(false)
    setError(undefined)
    setPlantNowModal(false)
    setLand(land)
    setView('plantLand')
  }

  function handleGoToPlantNowModal(_land) {
    setLandForModal(_land)
    !plantNowModal ? setPlantNowModal(true) : setPlantNowModal(false)
  }

  function handleModal(veg, _land, type, _coordinates, token) {
    setMenu(false)
    setError(undefined)
    setVeggie(veg)
    setLandForModal(_land)
    setModalType(type)
    setCoordinates(_coordinates)
    setToken(token)
    !modal ? setModal(true) : setModal(false)
  }

  function handleCreateLandModal(_error) {
    _error && setError(_error)
    !createLandModal ? setCreateLandModal(true) : setCreateLandModal(false)
  }

  function handleGoToRetrievedLand(land, token) {
    setMenu(false)
    setError(undefined)
    setToken(token)
    setLand(land)
    setView('land')
  }

  return (
    <>
      {view === 'init' && <InitScreen start={handleStart} />}
      {view === 'createLand' && createLandModal && <CreateLandModal onBackgroundClick={handleGoToMyLands} goToCreateLand={handleGoToCreateLand} />}
      {view === 'calendar' && calendarModal && <CalendarModal modalInfo={calendarModalInfo} token={token} onBackgroundClick={handleGoToCalendarModal} goToLandDetails={handleGoToRetrievedLand} />}
      {view === 'plantLand' && plantNowModal && <PlantNowModal onBackgroundClick={handleGoToPlantLand} land={landForModal} />}
      {view !== 'init' && view !== 'landing' && modal && <Modal onBackgroundClick={handleModal} veggie={veggie} type={modalType} land={landForModal} token={token} unitPressed={coordinates} />}
      {menu && <Menu goToMyLands={handleGoToMyLands} goToMyVeggies={handleGoToMyVeggies} goToCalendar={handleGoToCalendar} goToEditProfile={handleGoToEditProfile} goToSearch={handleGoToSearch} goToSuggestions={handleGoToSuggestions} goToTutorial={handleGoToTutorial} goToLanding={handleGoToLanding} menu={handleMenu} token={token} />}
      {view !== 'init' && < Header goToLanding={handleGoToLanding} menuClick={handleMenu} goToMyVeggies={handleGoToMyVeggies} />}
      {view === 'start' && <Landing goToRegister={handleGoToRegister} token={token} goToMyLands={handleGoToMyLands} />}
      {view === 'register' && <Register goToLogin={handleGoToLogin} />}
      {view === 'login' && <Login goToRegister={handleGoToRegister} goToLanding={handleGoToLanding} />}
      {view === 'editProfile' && <EditProfile token={token} />}
      {view === 'search' && <Search goToDetail={handleGoToDetail} />}
      {view === 'myLands' && <Lands goToLandDetail={handleGoToRetrievedLand} goToCreateLand={handleGoToCreateLand} lands={lands} token={token} _error={error} />}
      {view === 'userVeggies' && <Results goToDetail={handleGoToDetail} results={veggies} resultsType={resultsType} _error={error} />}
      {view === 'createLand' && <CreateLand goToPlantLand={handleGoToPlantLand} initModal={handleCreateLandModal} newLandProps={newLandProps} _error={error} />}
      {view === 'plantLand' && <PlantLand land={land} onClickVeggie={handleModal} updatedLand={landForModal} submit={handleGoToRetrievedLand} goToPlantNow={handleGoToPlantNowModal} />}
      {view === 'land' && <Land landFromMyLands={land} landFromPlantLand={landForModal} token={token} submit={handleGoToMyLands} goToPlantLand={handleGoToPlantLand} />}
      {view === 'calendar' && <Calendar goToCalendarModal={handleGoToCalendarModal} token={token} />}
      {view === 'detail' && <Detail item={veggie} goToLandDetail={handleGoToRetrievedLand} />}
      {view !== 'init' && <Footer view={view} />}
    </>
  )
}