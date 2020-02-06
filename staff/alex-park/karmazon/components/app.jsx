const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {

    state = { view: undefined, vehicles: undefined, vehicle: undefined, error: undefined, nameOfUser: undefined, query: undefined, token: undefined }

    componentWillMount() {
        const { token } = sessionStorage

        if (token)
            retrieveUser(token, (error, user) => {
                if (error)
                    return this.setState({ error: error.message + ' ' + IT })

                if (location.search) {
                    const query = location.search.split('=')[1]

                    searchVehicles(query, (error, vehicles) => {
                        if (error)
                            this.setState({ error: error.message + ' ' + IT })

                        this.setState({ view: 'search', user, query, vehicles, error: vehicles.length ? undefined : 'No results ' + IT })

                        if (!vehicles.length)
                            setTimeout(() => {
                                this.setState({ error: undefined })
                            }, 3000)
                    })
                } else
                    this.setState({ view: 'search', user })
            })
        else this.setState({ view: 'login' })
    }

    handleLogin = (username, password) => {
        authenticateUser(username, password, (error, token) => {
            if (error) {
                this.setState({ error: error.message + " " + IT })
                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000)
            } else {
                retrieveUser(token, (error, send) => {
                    if (error) {
                        this.setState({ error: error.message + " " + IT })
                        setTimeout(() => {
                            this.setState({ error: undefined })
                        }, 3000)
                    } else {
                        this.setState({ nameOfUser: `¡Hola ${send.name} ${send.surname}, bienvenid@ de nuevo!` })
                    }
                })

                sessionStorage.token = token
                this.setState({ view: 'search' })
            }
        })
    }

    handleGoToRegister = () => this.setState({ view: 'register' })

    handleRegister = (name, surname, username, password) => {
        try {
            registerUser(name, surname, username, password, error => {
                if (error) {
                    this.setState({ error: error.message + " " + IT })

                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)

                } else {
                    this.setState({ view: 'login' })
                }
            })

        } catch (error) {
            this.setState({ error: error.message + " " + IT })

            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleGoToLogin = () => this.setState({ view: 'login' })

    handleSearch = query => {
        searchVehicles(query, (error, vehicles) => {
            if (this.vehicle) {
                this.setState({ vehicle: undefined })
            }

            const { protocol, host, pathname } = location
            const url = `${protocol}//${host}${pathname}?q=${query}`

            // const url = `${location.href}?q=${query}`

            history.pushState({ path: url }, '', url)

            this.setState({ query: { query } })
            this.setState({ vehicles, vehicle: undefined, error: vehicles.length ? undefined : 'No results ' + IT })


            if (!vehicles.length)
                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000)
        })
    }

    handleDetail = id => {
        retrieveVehicle(id, (error, vehicle) => {
            if (error) {
                this.setState({ error: error.message })
            } else {
                this.setState({ vehicle })

            }
        })
    }

    handleBackToResults = () => this.setState({ vehicle: undefined })

    render() {

        const { props: { title }, state: { view, vehicles, vehicle, error, nameOfUser, token }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleDetail, handleBackToResults } = this
        return <Fragment>
            <h1>{title}</h1>

            {!token && view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search title="Search" onSubmit={handleSearch} error={error} nameOfUser={nameOfUser} />}

            {view === 'search' && vehicles && !vehicle && <Results results={vehicles} onItemClick={handleDetail} />}

            {view === 'search' && vehicle && <Details detailInfo={vehicle} onBack={handleBackToResults} />}

        </Fragment>
    }
}