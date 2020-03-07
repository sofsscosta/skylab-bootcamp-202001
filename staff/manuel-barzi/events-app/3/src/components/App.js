import React, { useEffect, useContext } from 'react'
import './App.sass'
import Page from './Page'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import { registerUser, authenticateUser, retrieveUser } from '../logic'
import { Context } from './ContextProvider'

function App() {
  const [state, setState] = useContext(Context)

  useEffect(() => {
    const { token } = sessionStorage

    token ? setState({ token, page: 'home' }) : setState({ page: 'login' })
  }, [])

  async function handleRegister(name, surname, email, password) {
    try {
      await registerUser(name, surname, email, password)

      setState({ page: 'login' })
    } catch ({ message }) {
      setState({ error: message })
    }
  }

  async function handleLogin(email, password) {
    try {
      const token = await authenticateUser(email, password)

      sessionStorage.token = token

      setState({ token, page: 'home' })
    } catch ({ message }) {
      setState({ ...state, error: message })
    }
  }

  function handleGoToLogin() {
    setState({ page: 'login' })
  }

  function handleGoToRegister() {
    setState({ page: 'register' })
  }

  const { page, error } = state

  return <div className="app">
    <Page name={page}>
      {page === 'register' && <Register onSubmit={handleRegister} error={error} onGoToLogin={handleGoToLogin} />}
      {page === 'login' && <Login onSubmit={handleLogin} error={error} onGoToRegister={handleGoToRegister} />}
      {page === 'home' && <Home />}
    </Page>
  </div>
}

export default App
