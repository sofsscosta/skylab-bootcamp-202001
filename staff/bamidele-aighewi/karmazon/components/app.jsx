const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {

    state = { view: undefined, favourites: [], favouritesList: [], query: undefined, token: undefined, user: undefined, vehicle: undefined, vehicles: undefined, style: undefined, level: 'error', error: undefined, maker: undefined, collection: undefined }

    handleFeedback = (message, level = 'error') => {
        this.setState({ error: message + ' ' + IT, level }, () => {
            setTimeout(() => {
                this.setState({ error: undefined, level: 'error' })
            }, 3000);
        })
    }

    handleToken = token => {
        // window.localStorage.setItem('authToken', token)
        // this.setState({token})
        window.sessionStorage.setItem('authToken', token)
    }

    handleRetrieveToken = () => {
        // window.localStorage.getItem('authToken')
        // return this.state.token
        return window.sessionStorage.getItem('authToken')
    }

    handleClearToken = () => window.sessionStorage.clear()

    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, (response) => {
                if (response instanceof Error) {
                    // throw new Error(response.message)
                    this.handleFeedback(response.message)
                    return
                }

                const token = response

                this.handleToken(token) // save token

                retrieveUser(token, (user) => {
                    this.setState({ view: 'search', user })
                })
            })
        } catch (error) {
            this.handleFeedback(error.message)
        }
    }

    handleRegister = (name, surname, username, password) => {
        try {
            registerUser(name, surname, username, password, (response) => {
                if (response instanceof Error) {
                    // throw new Error(response.message)
                    this.handleFeedback(response.message)
                    return
                }

                this.setState({ view: 'login' })
            })
        } catch (error) {
            this.handleFeedback(error.message)
        }
    }

    handleSearch = (query) => {
        try {
            const token = this.handleRetrieveToken()
            searchVehicles(query, token, response => {
                if (response instanceof Error) {
                    this.handleFeedback(response.message)
                } else {
                    const { vehicles, favourites } = response
                    history.pushState(location.href, '', `?q=${query}`)
                    this.setState({ view: 'search', vehicles, favourites, query, vehicle: undefined, favouritesList: [] })
                }
            })
        } catch (error) {
            this.handleFeedback(error.message)
        }
    }

    handleRetrieveVehicleDetails = (id, callback) => {
        retrieveVehicle(id, vehicle => {
            retrieveStyle(vehicle.style, style => {
                retrieveMaker(vehicle.maker, maker => {
                    retrieveCollection(vehicle.collection, collection => {
                        callback(vehicle, style, maker, collection)
                    })
                })
            })
        })
    }

    handleItemClick = id => {
        this.handleRetrieveVehicleDetails(id, (vehicle, style, maker, collection) => {
            this.setState({ vehicle, style, maker, collection, vehicles: undefined })
        })
    }

    handleUpdate = newUser => {
        try {
            // const newUser = { name, surname, username, password, oldPassword }

            const token = this.handleRetrieveToken()

            // remove empty values from user object
            for (const key in newUser)
                if (!newUser[key]) delete newUser[key]

            updateUser(newUser, token, response => {
                if (response instanceof Error) {
                    this.handleFeedback(response.message)
                } else {
                    this.handleFeedback('Update successfully', 'success')
                    this.setState({ user: Object.assign(this.state.user, newUser) })
                }
            })
        } catch (error) {
            this.handleFeedback(error.message)
        }
    }

    handleItemBackButton = () => this.setState({ vehicle: undefined })
    handleNavigation = (toView) => this.setState({ view: toView })

    getUrlQueryParams = () => {
        let queryParam = {}
        try {
            const search = location.search.substring(1);
            queryParam = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
        } catch (error) {
            console.log(error.message)
        }

        return queryParam
    }

    handleToggleFavVehicle = vehicleId => {
        try {
            const token = this.handleRetrieveToken()

            toggleFavVehicle(vehicleId, token, (response) => {
                if (response instanceof Error) {
                    this.handleFeedback(response.message)
                } else {
                    this.handleSearch(this.state.query)
                }
            })
        } catch (error) {
            this.handleFeedback(error.message)
        }
    }

    handleRetrieveFavourites = () => {
        try {
            const token = this.handleRetrieveToken()

            retrieveFavourites(token, (response) => {
                if (response instanceof Error) {
                    this.handleFeedback(response.message)
                } else {
                    const { favourites } = response
                    let results = []
                    let position = 0

                    const recursive = () => {
                        if (results.length !== favourites.length){
                            this.handleRetrieveVehicleDetails(favourites[position], (vehicle, style, maker, collection) => {
                                position++
                                results.push({ vehicle, style, maker, collection })

                                if (results.length !== favourites.length) {
                                    recursive()
                                }else{
                                    console.log('ARRIVED AT THE END OF RECURSIVITY.... YAYYYY')
                                    //this.setState({ vehicle, style, maker, collection, vehicles: undefined })
                                    this.setState({ favouritesList: results }, () => this.handleNavigation('search:favourites'))
                                }
                            })
                        }
                    }

                    recursive()
                }
            })
        } catch (error) {
            this.handleFeedback(error.message)
        }
    }

    /* REACT LIFECYCLES */

    componentWillMount() {
        const query = this.getUrlQueryParams().q
        this.setState({ query })
    }

    componentDidMount() {
        const token = this.handleRetrieveToken()
        if (token) {
            retrieveUser(token, (user) => {
                if (user instanceof Error) {
                    this.handleFeedback(user.message)
                    this.handleClearToken()
                    return
                }

                if (!!token.trim()) this.setState({ view: 'search', user }, () => {
                    if (this.state.query) {
                        this.handleSearch(this.state.query)
                    }
                })
            })
        } else {
            this.handleNavigation('login')
        }
    }

    render() {
        const { props: { title }, state: { view, vehicle, vehicles, style, maker, collection, error, user, level, query, favourites, favouritesList }, handleToggleFavVehicle, handleUpdate, handleLogin, handleRegister, handleSearch, handleItemClick, handleItemBackButton, handleNavigation, handleRetrieveFavourites } = this

        return <Fragment>
            <h1>{title}</h1>
            {user && <h1>{user.name}</h1>}
            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={() => handleNavigation('register')} error={error} />}
            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={() => handleNavigation('login')} error={error} />}
            {(view === 'search' || (view && view.includes('search:'))) && <Search title="Search" onSubmit={handleSearch} onToFavourites={handleRetrieveFavourites} onToUpdateProfile={() => handleNavigation('update')} user={user} query={query} error={error} level={level} />}
            {view === 'search' && vehicles && !vehicle && !favouritesList.length && <Results results={vehicles} onItemClick={handleItemClick} favourites={favourites} toggleFavVehicle={handleToggleFavVehicle} />}
            {view === 'search:favourites' && favouritesList.length && !vehicle && <Favourites results={favouritesList} onBackButtonClick={handleItemBackButton} />}
            {view === 'search' && vehicle && <Detail vehicle={vehicle} style={style} maker={maker} collection={collection} onBackButtonClick={handleItemBackButton} />}
            {view === 'update' && <Update onSubmit={handleUpdate} onToSearch={() => handleNavigation('search')} user={user} error={error} level={level} />}
        </Fragment>
    }
}