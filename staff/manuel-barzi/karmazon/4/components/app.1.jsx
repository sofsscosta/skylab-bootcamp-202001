const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {
    // ES6
    // constructor() {
    //     super()

    //     this.state = { view: 'login', vehicles: undefined, vehicle: undefined, style: undefined, error: undefined }

    //     this.handleLogin = this.handleLogin.bind(this)
    // }

    // ES.NEXT
    state = { view: undefined, vehicles: undefined, vehicle: undefined, style: undefined, error: undefined, query: undefined }

    __handleError__(error) {
        this.setState({ error: error.message + ' ' + IT })

        setTimeout(() => {
            this.setState({ error: undefined })
        }, 3000)
    }

    componentWillMount() {
        const { token } = sessionStorage

        if (token)
            try {
                retrieveUser(token, (error, user) => {
                    if (error) {
                        //return this.__handleError__(error)

                        this.handleLogout()
                    }

                    if (location.search) {
                        const query = location.search.split('=')[1]

                        searchVehicles(token, query, (error, vehicles) => {
                            if (error)
                                return this.__handleError__(error)

                            this.setState({ view: 'search', user, query, vehicles, error: vehicles.length ? undefined : 'No results ' + IT })

                            if (!vehicles.length)
                                setTimeout(() => {
                                    this.setState({ error: undefined })
                                }, 3000)
                        })
                    } else
                        this.setState({ view: 'search', user })
                })
            } catch (error) {
                // this.setState({ error: error.message + ' ' + IT })

                // setTimeout(() => {
                //     this.setState({ error: undefined })
                // }, 3000)
                sessionStorage.clear()

                this.setState({ view: 'login' })
            }
        else this.setState({ view: 'login' })
    }

    // ES.NEXT
    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, (error, token) => {
                if (error) {
                    this.__handleError__(error)
                } else {
                    retrieveUser(token, (error, user) => {
                        if (error)
                            return this.__handleError__(error)

                        sessionStorage.token = token

                        this.setState({ view: 'search', user })
                    })
                }
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleGoToRegister = () => this.setState({ view: 'register' })

    handleRegister = (name, surname, username, password) => {
        try {
            registerUser(name, surname, username, password, error => {
                if (error) {
                    this.__handleError__(error)
                } else
                    this.setState({ view: 'login' })
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleGoToLogin = () => this.setState({ view: 'login' })

    handleSearch = query => {
        try {
            const { token } = sessionStorage

            searchVehicles(token, query, (error, vehicles) => {
                if (error)
                    return this.__handleError__(error)

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
            this.__handleError__(error)
        }
    }

    handleDetail = id => {
        try {
            retrieveVehicle(id, (error, vehicle) => {
                if (error)
                    return this.__handleError__(error)

                retrieveStyle(vehicle.style, (error, style) => {
                    if (error)
                        return this.__handleError__(error)

                    this.setState({ vehicle, style, vehicles: undefined })
                })
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleFav = id => {
        try {
            const { token } = sessionStorage

            toggleFavVehicle(token, id, error => {
                if (error)
                    return this.__handleError__(error)

                const { query } = this.state

                if (query)
                    this.handleSearch(query)
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleLogout = () => {
        sessionStorage.clear()

        // TODO clear querystring in url

        this.setState({ view: 'login', user: undefined })
    }

    render() {
        const { props: { title }, state: { view, vehicles, vehicle, style, error, user, query }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleDetail, handleFav, handleLogout } = this

        return <main>
            <h1>{title}</h1>

            {user && <Fragment><h2>{user.name} <button onClick={handleLogout}>Logout</button></h2></Fragment>}

            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search onSubmit={handleSearch} query={query} warning={error} />}

            {view === 'search' && vehicles && <Results results={vehicles} onItemClick={handleDetail} onItemFavClick={handleFav} />}

            {view === 'search' && vehicle && <Detail vehicle={vehicle} style={style} />}
        </main>
    }
}