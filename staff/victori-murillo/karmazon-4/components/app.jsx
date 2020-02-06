const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {
   
    state = { view: undefined, vehicles: undefined, vehicle: undefined, style: undefined, error: undefined, query: undefined }

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
        try {
            authenticateUser(username, password, (error, token) => {
                if (error) {
                    this.setState({ error: error.message + ' ' + IT })

                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
                } else {
                    retrieveUser(token, (error, user) => {
                        if (error)
                            return this.setState({ error: error.message + ' ' + IT })

                        sessionStorage.token = token

                        this.setState({ view: 'search', user })
                    })
                }
            })
        } catch (error) {
            this.setState({ error: error.message + ' ' + IT })

            setTimeout(() => this.setState({ error: undefined }), 3000)
        }
    }

    handleGoToRegister = () => this.setState({ view: 'register' })

    handleRegister = (name, surname, username, password) => {
        try {
            registerUser(name, surname, username, password, error => {
                if (error) {
                    this.setState({ error: error.message + ' ' + IT })

                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
                } else
                    this.setState({ view: 'login' })
            })
        } catch (error) {
            this.setState({ error: error.message + ' ' + IT })

            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleGoToLogin = () => this.setState({ view: 'login' })

    handleSearch = query => {
        try {
            searchVehicles(query, (error, vehicles) => {
                if (error)
                    this.setState({ error: error.message })

                const { protocol, host, pathname } = location

                const url = `${protocol}//${host}${pathname}?q=${query}`

                history.pushState({ path: url }, '', url)

                this.setState({ vehicles, vehicle: undefined, error: vehicles.length ? undefined : 'No results ' + IT })

                if (!vehicles.length)
                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
            })
        } catch (error) {
            this.setState({ error: error.message + ' ' + IT })

            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleDetail = id => {
        retrieveVehicle(id, vehicle =>
            retrieveStyle(vehicle.style, style =>
                this.setState({ vehicle, style, vehicles: undefined })
            )
        )
    }

    render() {
        const { props: { title }, state: { view, vehicles, vehicle, style, error, user, query }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleDetail } = this

        return <Fragment>
            <h1>{title}</h1>

            {user && <h2>{user.name}</h2>}

            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search title="Search" onSubmit={handleSearch} query={query} warning={error} />}

            {view === 'search' && vehicles && <Results results={vehicles} onItemClick={handleDetail} />}

            {view === 'search' && vehicle && <Detail vehicle={vehicle} style={style} />}
        </Fragment>
    }
}