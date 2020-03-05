import React, { useState } from 'react'
import './App.sass'
import Page from './Page'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import { registerUser, authenticateUser, retrieveUser } from '../logic'

function App() {
  const [page, setPage] = useState('login')
  const [error, setError] = useState()
  const [name, setName] = useState()

  async function handleRegister(name, surname, email, password) {
    try {
      await registerUser(name, surname, email, password)

      setPage('login')
    } catch ({ message }) {
      setError(message)
    }
  }

  async function handleLogin(email, password) {
    try {
      const token = await authenticateUser(email, password)

      const { name } = await retrieveUser(token)

      setName(name)
      setPage('home')
    // } catch ({ message }) {
    //   setError(message)
    // }
    } catch(error) {
      debugger
    }
  }

  return <div className="app">
    <Page name={page}>
      {page === 'register' && <Register onSubmit={handleRegister} error={error} />}
      {page === 'login' && <Login onSubmit={handleLogin} error={error} />}
      {page === 'home' && <Home name={name} />}
    </Page>
  </div>
}

export default App
