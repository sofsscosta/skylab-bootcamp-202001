const {Component, Fragment} = React

class App extends Component {

    state = {view: "login", vehicles: undefined, vehicle: undefined, error: undefined, message: undefined, token: undefined, user: undefined}

    componentWillMount = () => {
        const { protocol, host, pathname } = location
        const url = `${protocol}//${host}${pathname}`
        history.pushState({ path: url }, '', url)

        const {token} = sessionStorage
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

    handleLogin = ({username, password}) => {
        try {
            authenticateUser(username, password, (error, token) => {
                // Asyn Error
                if (error) {
                    this.setState({error: error.message})
                    setTimeout(() => this.setState({error: undefined}), 3000);
                } else {
                    retrieveUser(token, (error, user) => {
                        if (error)
                            return this.setState({ error: error.message })

                        sessionStorage.token = token
                        this.setState({ view: 'search', user })
                    })
                }
            })
            // Sync Error
        } catch (error) {
            this.setState({error: error.message})
            setTimeout(() => this.setState({error: undefined}), 3000);
        }
    }

    handleGoToRegister = () => this.setState({view: "register"})

    handleRegister = user => {
        try {
            registerUser(user, (error, message) => {
                // Asyn Error
                if (error) {
                    this.setState({error: error.message})
                    setTimeout(() => this.setState({error: undefined}), 3000);
                }

                this.setState({view: "login", message})
                setTimeout(() => this.setState({message: undefined}), 3000);

            })
            
            // Sync Errror
        } catch (error) {
            this.setState({error: error.message})
            setTimeout(() => this.setState({error: undefined}), 3000);
        }
        
    }

    handleGoToLogin = () => this.setState({view: "login"})

    handleSearch = ({query}) => {
        try {
            if (!query) throw new Error("please enter a name car")
            
            searchVehicles(query, sessionStorage.token, (error, vehicles) => {
                if(error) {
                    this.setState({error: error.message})
                    setTimeout(() => this.setState({error: undefined}), 3000);
                } else {
                    const { protocol, host, pathname } = location
                    const url = `${protocol}//${host}${pathname}?q=${query}`
                    history.pushState({ path: url }, '', url)
                    
                    this.setState({ vehicles, vehicle: undefined, error: vehicles.length ? undefined : 'No results '})
                    if (!vehicles.length) setTimeout(() => this.setState({error: undefined}), 3000);
                }

            })

        } catch (error) {
            this.setState({error: error.message})
            setTimeout(() => this.setState({error: undefined}), 3000);
        }
        
    }

    handleDetail = id => {
        const {token} = sessionStorage

        retrieveVehicle(token, id, (error, result) => {
            this.setState({vehicle: result})
        })
    }

    handleUpdate = (user) => {
        const {token} = sessionStorage
        updateUser(user, token, msg => {
            console.log(msg);
        })
    }

    handleDetailHeart = id => {
        try {
            const {token} = sessionStorage
            toggleFavVehicle(token, id, error => {
                if (error) {
                    this.setState({error: error.message})
                    setTimeout(() => this.setState({error: undefined}), 3000);
                    
                } else {
                    retrieveVehicle(token, id, (error, result) => {
                        this.setState({vehicle: result})
                    })
                }
            })
        } catch (error) {
            this.setState({error: error.message})
            setTimeout(() => this.setState({error: undefined}), 3000);
        }
        
    }

    handleHeart = id => {

        try {
            const {token} = sessionStorage
            const {view} = this.state

            // if (view === 'favorites') return this.handleFavorites()
            toggleFavVehicle(token, id, (error, query) => {
                if (error)
                    this.setState({error: error.message})
                else {
                    if (view === 'search') this.handleSearch({query})
                    if (view === 'favorites') this.handleFavorites()
                }
                    this.handleSearch({query})
                    
            })
        } catch (error) {
            this.setState({error: error.message})
        }
    }

    handleFavorites = () => {
        try {
            const {token} = sessionStorage

            toggleFavorites(token, (error, vehicles) => {
                this.setState({vehicles, view: 'favorites'})
            })
            
        } catch (error) {
            
        }
    }

    onToSearch = () => {
        this.setState({view: 'search', vehicles: []})
    }
    
    render() {
        const {props: {title}, state: {view, vehicles, vehicle, error, message, user}, 
        handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, 
        handleDetail, handleUpdate, handleHeart, handleDetailHeart, handleFavorites, onToSearch} = this

        return <Fragment>
            {user && <Avatar user={user} toggleFavorites={handleFavorites} onToSearch={onToSearch} />}
            
            <h1>{title}</h1>

            {view === "login" && <Login onSubmit={handleLogin} handleGoToRegister={handleGoToRegister} error={error} message={message} />}
            
            {view === "register" && <Register onSubmit={handleRegister} handleGoToLogin={handleGoToLogin} error={error} />}

            {view === "search" && <Search title="Search" onSubmit={handleSearch} error={error} />}

            {view === "search" && <Update onSubmit={handleUpdate} />}

            {(view === "search" || view === "favorites") && vehicles && !vehicle && 
            
            <Results results={vehicles} onClickItem={handleDetail} toggleHeart={handleHeart} view={view}  />}

            {view === "search" && vehicle && <Detail result={vehicle} toggleHeart={handleDetailHeart} />}

        </Fragment>
    }
}

const styleP = {fontSize: "20px" ,padding: "10px 0px",color: 'white', backgroundColor: 'green', borderRadius: "10px"}