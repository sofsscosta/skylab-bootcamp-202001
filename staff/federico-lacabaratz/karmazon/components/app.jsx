const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {

    state = { view: undefined, vehicles: undefined, vehicle: undefined, style: undefined, maker: undefined, collection: undefined, userToPrint: undefined, _query: undefined, error: undefined, fav: undefined, token: undefined}

    componentWillMount() { 
        const { token } = sessionStorage

        if (token)
            retrieveUser(token, (error, userToPrint) => {
                if (error)
                    return this.setState({ error: `${error.message} ${IT}`})

                if (location.search) {
                    const query = location.search.split('=')[1]

                    searchVehicles(token, query, (error, vehicles) => {
                        if (error)
                            this.setState({ error: `${error.message} ${IT}` })

                            this.setState({ view: 'search', userToPrint, _query: query, vehicles, error: vehicles.length ? undefined : 'No results ' + IT })

                        if (!vehicles.length)
                            setTimeout(() => {
                                this.setState({ error: undefined })
                            }, 3000)
                    })
                } else
                    this.setState({ view: 'search', userToPrint })
            })
        else this.setState({ view: 'login' })
    }
    
    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, (error, token) => {
                if (error) {
                    this.handleLogout()

                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)

                } else {
                    retrieveUser(token, (error, userToPrint) => {
                        if (error)
                        return this.setState({ error: `${error.message} ${IT}` })
                        
                        sessionStorage.token = token
                        this.setState({ view: "search", token, userToPrint: userToPrint.username })
                    })
                }
            })

        } catch (error) {
            // this.setState({ error: `${error.message} ${IT}` })
            // setTimeout(() => {
            //     this.setState({ error: undefined })
            // }, 3000)
            sessionStorage.clear()

            this.setState({ view: "login" })
        }
    }

    handleGoToRegister = () => this.setState({ view: "register" })

    handleRegister = (name, surname, username, password) => {
        try {
            registerUser(name, surname, username, password, error => {
                if (error) {
                    this.setState({ error: `${error.message} ${IT}` })

                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
                } else
                    this.setState({ view: "login" })
            })
        } catch (error) {
            this.setState({ error: `${error.message} ${IT}` })
            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleGoToLogin = () => this.setState({ view: "login" })

    handleSearch = query => {
        
        this.setState({_query: query})
        
        try{
            searchVehicles(sessionStorage.token, query, (error, vehicles, fav)=> {
                if (error) 
                    this.setState({ error: `${error.message} ${IT}` })

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
            this.setState({ error: `${error.message} ${IT}` })

            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleDetail = id => {
        retrieveVehicle(sessionStorage.token, id, (error, vehicle, fav) =>{
            retrieveStyle(vehicle.style, (error, style) =>
                retrieveMaker(vehicle.maker, (error, maker) =>
                    retrieveCollection(vehicle.collection, (error, collection) =>
                        this.setState({ vehicle, style, error, maker, collection, vehicles: undefined, fav })
                    )
                )
            )
        }

        )
    }
    handleFav= id => { 

        const query = this.state._query
        
        toggleFavVehicle(sessionStorage.token, id, ()=> {
            if (!this.state.vehicle) this.handleSearch(query)
            else this.handleDetail(id)
        })
    }

    handleLogout=  (username, password) => {
        sessionStorage.clear()
        this.setState({ view: 'login' })
    }

        
    
    render() {

        const { props: { title }, state: { view, vehicles, vehicle, style, maker, collection, error, userToPrint, query, fav }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleDetail, handleFav } = this

        return <main>
            <h1>{title}</h1>

            {user && <Fragment><h2>{user.name} <button onClick={handleLogout}>Logout</button></h2></Fragment> }

            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search user={userToPrint} title="Search" query={query} onSubmit={handleSearch} warning={error} />}

            {view === 'search' && vehicles && <Results results={vehicles} onItemClick={handleDetail} fav={fav} onFav={handleFav}/>}

            {view === 'search' && vehicle && <Detail vehicle={vehicle} style={style} maker={maker} collection={collection} fav={fav} onFav={handleFav}/>}
        </main>
    }
}

