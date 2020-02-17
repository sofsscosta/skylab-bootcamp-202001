const IT = '🎈🤡';

const { Component, Fragment } = React

class App extends Component {
    // constructor () {
    //     super()

    state = { view: "login", vehicle: undefined, vehicles: undefined, style: undefined, error: undefined, user: undefined, token: undefined, query: undefined, favs: [] }

    handleRetrieveToken = () => {
        return sessionStorage.token
    }

    handleStoreToken = (token) => {
        sessionStorage.token = token
    }

    handleClearToken = () => window.sessionStorage.clear()

    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, (response) => {
                if (response instanceof Error) {
                    this.setState({ error: `${response.message} ${IT}` })

                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
                } else {
                    const token = response
                    this.handleStoreToken(token)
                    retrieveUser(token, user => {
                        this.setState({ view: "search", user })

                    })
                }
            })

        } catch (error) {
            this.setState({ error: `${error.message} ${IT}` })

            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleGoToLogin = () => this.setState({ view: "login" })

    handleRegister = (name, surname, username, password) => {
        try {
            registerUser(name, surname, username, password, (response) => {
                if (response instanceof Error) {
                    this.setState({ error: `${response.message} ${IT}` })

                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
                } else {
                    this.setState({ view: "login" })
                }
            })

        } catch (error) {
            this.setState({ error: `${error.message} ${IT}` })

            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleGoToRegister = () => this.setState({ view: "register" })

    handleSearch = query => {
        const token = this.handleRetrieveToken()
        searchVehicles(token, query, response => {

            // const { protocol, host, pathname } = location
            // const url = `${protocol}//${host}${pathname}?q=${query}`
            // history.pushState({ path: url }, '', url)
            const {vehicles, favs} = response
            this.setState({ vehicles, vehicle: undefined, error: vehicles.length ? undefined : 'No results ' + IT, query, favs })

            if (!vehicles.length)
                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000)
        })
    }

    handleDetail = id => {
        retrieveVehicle(id, vehicle =>
            retrieveStyle(vehicle.style, style =>
                this.setState({ vehicles: undefined, vehicle, style })
            )
        )
    }

    handleUpdate = (newUser) => {
        try {
            const token = this.handleRetrieveToken()
            updateUser(token, newUser, response => {
                if (response instanceof Error) {
                    this.setState({ error: `${response.message} ${IT}` })
                } else {
                    this.setState({ user: Object.assign(this.state.user, newUser), })
                }
            })

        } catch (error) {
            this.setState({ error: `${error.message} ${IT}` })

            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleGoToUpdate = () => this.setState({ view: "update" })

    handleGoToSearch = () => this.setState({ view: "search" })

    handleFav = id => {
        try {
            const token = this.handleRetrieveToken()
            toggleVehicle(token, id, response => {
                if (response instanceof Error) {
                    this.setState({ error: `${response.message}${IT}` })
                } else {
                    searchVehicles(token, this.state.query, response => {
                        // const { protocol, host, pathname } = location
                        // const url = `${protocol}//${host}${pathname}?q=${query}`
                        // history.pushState({ path: url }, '', url)
                        const {vehicles, favs} = response
                        this.setState({ vehicles, vehicle: undefined, error: vehicles.length ? undefined : 'No results ' + IT, favs })
            
                        if (!vehicles.length)
                            setTimeout(() => {
                                this.setState({ error: undefined })
                            }, 3000)
                    })


                }
            })
        } catch (error) {
            this.setState({error: `${error.message} ${IT}`})

            setTimeout(() =>{
                this.setState({error: undefined})
            }, 3000)

        }


    }


    render() {
        const { props: { title }, state: { vehicle, vehicles, view, style, error, user, favs }, handleDetail, handleGoToLogin, handleGoToRegister, handleLogin, handleRegister, handleSearch, handleUpdate, handleGoToUpdate, handleGoToSearch, handleFav, handleLogout } = this

        return <Fragment>

            <h1>{title}</h1>

            {user && <h2>{user.name}</h2>}

            {view === "register" && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === "login" && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === "update" && <Update onSubmit={handleUpdate} user={user} onGoToSearch={handleGoToSearch} error={error} />}

            {view === "search" && <Search title="Search" onSubmit={handleSearch} warning={error} onGoToUpdate={handleGoToUpdate} onLogout={handleLogout} />}

            {view === "search" && vehicles && !vehicle && <Results results={vehicles} onItemClick={handleDetail} onToggleFav={handleFav} favs={favs} />}

            {view === "search" && vehicle && <Detail vehicle={vehicle} style={style} onToggleFav={handleFav} favs={favs} />}

        </Fragment>
    }
}