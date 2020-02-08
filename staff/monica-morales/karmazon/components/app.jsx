const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {

    state = { view: undefined, vehicles: undefined, vehicle: undefined, style: undefined, 
        error: undefined, query: undefined, warning: undefined, token: undefined, 
        nameOfUser: undefined }

    componentWillMount() {
        const { token, nameOfUser } = sessionStorage

        if (token)
            retrieveUser(token, (error, user) => {
                if (error)
                    return this.setState({ error: error.message + ' ' + IT })
                this.setState ({nameOfUser: `¡Hola ${user.name}, bienvenid@ de nuevo!`})
                
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
                      

                        this.setState({ view: 'search', user, nameOfUser: `¡Hola ${user.name}, bienvenid@ de nuevo!`})
                        sessionStorage.nameOfUser = nameOfUser

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

            this.setState({ query: query, vehicles, error: vehicles.length ? undefined : 'No results' })

            if (!vehicles.length) {
                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000)
            }
        })
    }

    handleDetail = id => {
        retrieveVehicle(id, (error,vehicle) =>{
            if(error) this.setState({error:error.message})
            else this.setState({ vehicle, view: 'detail'})
        }
        )
    }

    handleToBack = () => { this.setState({ vehicle: undefined, view: 'search'}) }
    
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

    
    render() {

        const { props: { title }, state: { view, vehicles, vehicle, style, error, nameOfUser }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleDetail, handleToBack,handleFavs } = this

        return <Fragment>

            {nameOfUser && <span>{nameOfUser}</span>}

            <h1>{title}</h1>


            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search title="Search" onSubmit={handleSearch} error={error} />}

            {view === 'search' && vehicles && <Results results={vehicles} onItemClick={handleDetail} onFavToggle={handleFavs} />}

            {view === 'detail' && vehicle && <Detail vehicle={vehicle} onBack={handleToBack} />}

        </Fragment>
    }

}