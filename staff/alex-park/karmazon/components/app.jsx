const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {
    state = {
        view: undefined, vehicles: undefined, vehicle: undefined, style: undefined,
        error: undefined, query: undefined, warning: undefined, token: undefined,
        nameOfUser: undefined, listOfFavs: undefined
    }

    componentWillMount() {
        const { token } = sessionStorage
        if (token)
            retrieveUser(token, (error, user) => {
                if (error)
                    return this.setState({ error: error.message + ' ' + IT })
                this.setState({ nameOfUser: `¡Hola ${user.name}, bienvenid@ de nuevo!` })
                if (location.search) {
                    const query = location.search.split('=')[1]
                    searchVehicles(token, query, (error, vehicles) => {
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
                        sessionStorage.nameOfUser = `¡Hola ${user.name}, bienvenid@ de nuevo!`
                        this.setState({ view: 'search', user, nameOfUser: `¡Hola ${user.name}, bienvenid@ de nuevo!` })
                    })
                }
            })
        } catch (error) {
            this.setState({ error: error.message + ' ' + IT })
            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
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

    handleGoToLogin = () => { this.setState({ view: 'login' }) }

    handleSearch = query => {
        const { token } = sessionStorage
        searchVehicles(token, query, (error, vehicles) => {
            if (error) {
                this.setState({ vehicle: undefined })
            }
            const { protocol, host, pathname } = location
            const url = `${protocol}//${host}${pathname}?q=${query}`
            // const url = `${location.href}?q=${query}`
            history.pushState({ path: url }, '', url)
            this.setState({ query: query, vehicles, error: vehicles.length ? undefined : 'No results' })
            if (!vehicles.length) {
                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000)
            }
        })
    }

    handleDetail = id => {
        const { token } = sessionStorage

        retrieveVehicle(token, id, (error, vehicle) => {
            if (error) {
                this.setState({ error: error.message })
            } else {
                this.setState({ vehicle, view: 'detail' })
            }
        })
    }

    handleToBack = () => {

        const { query } = this.state
        searchVehicles(sessionStorage.token, query, (error, vehicles) => {
            if (error) {
                this.setState({ vehicle: undefined })
            }
            const { protocol, host, pathname } = location
            const url = `${protocol}//${host}${pathname}?q=${query}`
            // const url = `${location.href}?q=${query}`
            history.pushState({ path: url }, '', url)
            this.setState({ view: 'search', query: query, vehicles, vehicle: undefined, error: vehicles.length ? undefined : 'No results' })
            if (!vehicles.length) {
                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000)
            }
        })
    }

    handleFavs = id => {

        const { token } = sessionStorage
        toggleFavVehicle(id, token, error => {
            if (error) {
                this.setState({ error: error.message })
            } else {
                const { query } = this.state
                searchVehicles(token, query, (error, vehicles) => {
                    if (error) {
                        this.setState({ vehicle: undefined })
                    }
                    this.setState({ vehicles, error: vehicles.length ? undefined : 'No results' })
                })
            }
        })
    }

    handleFavsDetails = id => {

        const { token } = sessionStorage
        toggleFavVehicle(id, token, error => {
            if (error) {
                this.setState({ error: error.message })
            } else {
                if (this.state.view === 'favlist') {
                    searchFavs(token, (error, listOfFavs) => {
                        if (error) {
                            this.setState({ error: error.message })
                        } else {
                            this.setState({ view: 'favlist', vehicles: undefined, vehicle: undefined, listOfFavs })
                        }
                    })
                } else if (this.state.view === 'detail') {
                    retrieveVehicle(token, id, (error, vehicle) => {
                        if (error) {
                            this.setState({ error: error.message })
                        } else {
                            this.setState({ vehicle, view: 'detail' })

                        }
                    })
                }
            }
        })
    }

    handleListOfFavs = () => {

        const { token } = sessionStorage
        searchFavs(token, (error, listOfFavs) => {
            if (error) {
                this.setState({ error: error.message })
            } else {
                this.setState({ view: 'favlist', vehicles: undefined, vehicle: undefined, listOfFavs })
            }
        })
    }

    render() {
        const { props: { title }, state: { view, vehicles, vehicle, style, error, nameOfUser, listOfFavs }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleDetail, handleToBack, handleFavs, handleFavsDetails, handleListOfFavs } = this
        return <Fragment>
            {nameOfUser && <span>{nameOfUser}</span>}
            <br />
            <p className="favbutton" href="" onClick={handleListOfFavs}>GO TO LIST OF FAVORITES</p>
            <h1>{title}</h1>
            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}
            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}
            {view === 'search' && <Search title="Search" onSubmit={handleSearch} error={error} />}
            {view === 'search' && vehicles && <Results results={vehicles} onItemClick={handleDetail} onFavToggle={handleFavs} />}
            {view === 'detail' && vehicle && <Details detailInfo={vehicle} onBack={handleToBack} onFavToggle={handleFavsDetails} />}
            {view === 'favlist' && <FavsList results={listOfFavs} onBack={handleToBack} onFavToggle={handleFavsDetails} />}
        </Fragment>
    }
}