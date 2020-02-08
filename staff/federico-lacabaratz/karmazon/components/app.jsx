const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {

    state = { view: undefined, vehicles: undefined, vehicle: undefined, style: undefined, maker: undefined, collection: undefined, userToPrint: undefined, _query: undefined, error: undefined, fav: undefined, token: undefined}

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
                retrieveUser(token, (error, userToPrint) => {
                    if (error)
                        this.handleLogout()

                    if (location.search) {
                        const query = location.search.split('=')[1]

                        searchVehicles(token, query, (error, vehicles) => {
                            if (error)
                                return this.__handleError__(error)

                                this.setState({ view: 'search', userToPrint, _query: query, vehicles, error: vehicles.length ? undefined : 'No results ' + IT })

                            if (!vehicles.length)
                                setTimeout(() => {
                                    this.setState({ error: undefined })
                                }, 3000)
                        })
                    } else
                        this.setState({ view: 'search', userToPrint })
                })
            } catch (error) {
                sessionStorage.clear()

                this.setState({ view: 'login' })
            }
        else this.setState({ view: 'login' })
    }
    
    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, (error, token) => {
                if (error) {
                    this.__handleError__(error)

                } else {
                    retrieveUser(token, (error, userToPrint) => {
                        if (error)
                        return this.__handleError__(error)
                        
                        sessionStorage.token = token

                        this.setState({ view: "search", token, userToPrint })
                    })
                }
            })

        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleGoToRegister = () => this.setState({ view: "register" })

    handleRegister = (name, surname, username, password) => {
        try {
            registerUser(name, surname, username, password, error => {
                if (error) {
                    return this.__handleError__(error)
                } else
                    this.setState({ view: "login" })
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleGoToLogin = () => this.setState({ view: "login" })

    handleSearch = query => {
        
        this.setState({_query: query})
        
        try{
            searchVehicles(sessionStorage.token, query, (error, vehicles, fav)=> {
                if (error) 
                    return this.__handleError__(error)

                const { protocol, host, pathname } = location

                const url = `${protocol}//${host}${pathname}?q=${query}`

                history.pushState({ path: url }, '', url)
                    
                    this.setState({ vehicles, vehicle: undefined, fav, error: vehicles.length ? undefined : `No results ${IT}`})
                                   
                    if (!vehicles.length) {
                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
                }
            })
        } catch (error){
            this.__handleError__(error)
        }
    }

    handleDetail = id => {
        try {
        retrieveVehicle(sessionStorage.token, id, (error, vehicle, fav) =>{
            if(error)
                return this.__handleError__(error)

                retrieveStyle(vehicle.style, (error, style) =>{
                    if(error)
                        return this.__handleError__(error)

                        retrieveMaker(vehicle.maker, (error, maker) => {
                            if(error)
                                return this.__handleError__(error)
                            
                                retrieveCollection(vehicle.collection, (error, collection) => {
                                    if(error)
                                        return this.__handleError__(error)

                                this.setState({ vehicle, style, error, maker, collection, vehicles: undefined, fav })
                            })
                        })
                    })
                })
        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleFav= id => { 
        try {
            const query = this.state._query
            
            toggleFavVehicle(sessionStorage.token, id, (error)=> {
                if(error)
                    return this.__handleError__(error)

                if (!this.state.vehicle) this.handleSearch(query)
                
                else this.handleDetail(id)
            })
        } catch (error) {
            this.__handleError__(error)
        }
    }

    handleLogout=  () => {
        sessionStorage.clear()
        this.setState({ view: 'login', userToPrint: undefined })
    }

    render() {

        const { props: { title }, state: { view, vehicles, vehicle, style, maker, collection, error, userToPrint, query, fav }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleDetail, handleFav, handleLogout } = this

        return <main>
            <h1>{title}</h1>

            {userToPrint && <Fragment><h2>{userToPrint.name} <button onClick={handleLogout}>Logout</button></h2></Fragment> }

            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search user={userToPrint} title="Search" query={query} onSubmit={handleSearch} warning={error} />}

            {view === 'search' && vehicles && <Results results={vehicles} onItemClick={handleDetail} fav={fav} onFav={handleFav}/>}

            {view === 'search' && vehicle && <Detail vehicle={vehicle} style={style} maker={maker} collection={collection} fav={fav} onFav={handleFav}/>}
        </main>
    }
}

