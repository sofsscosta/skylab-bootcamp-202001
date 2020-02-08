const IT = '🎈🤡'

const { Component } = React

class App extends Component {

    state= { view: undefined, vehicles: undefined, vehicle: undefined, error: undefined, token: undefined, user:undefined, favorites: undefined}
    
    componentWillMount() {
        const { token } = sessionStorage

        if (token)
            retrieveUser(token, (error, user) => {
                if (error)
                    return this.setState({ error: error.message + ' ' + IT })

                if (location.search) {
                    const query = location.search.split('=')[1]

                    searchVehicles(query, token, (error, vehicles) => {
                        if (error)
                            this.setState({ error: error.message + ' ' + IT })

                        this.setState({ view: 'search', user, query, vehicles, error: vehicles.length ? undefined : 'No results ' + IT})

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
            authenticateUser(username, password, (error, token)=>{
                if (error) {
                    this.setState ({error: error.message})

                    setTimeout(() => {
                    this.setState({ error: undefined })
                    }, 3000)
                } else { 
                    
                    retrieveUser(token, (error, user)=>{ //TODO
                        if(error){
                            this.setState ({error: error.message})
                            setTimeout(() => {
                            this.setState({ error: undefined })
                            }, 3000)
                        }else{
                        sessionStorage.token = token
                        this.setState({ view : 'search', user})
                        }
                    })
                }
            })

        } catch (error) {
            this.setState ({error: error.message})
            setTimeout(() => {
            this.setState({ error: undefined })
            }, 3000)
        }             
    }


    handleToRegister =()=> this.setState({view: 'register'})

    handleRegister =(name, surname, username, password)=> { 
        try{
            registerUser(name, surname, username, password, (error)=> {
                if(error) {
                    this.setState({error: error.message}) 
                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
            
                }else  {
                    this.setState({ view: 'login'})
                }
            }) 

            this.setState({ view: 'login'})
        } catch (error) {
            this.setState({error: error.message}) 
            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
            
        }
    }

    handleToLogin = () => this.setState({view: 'login'})

    handleSearch = query => {
        const token = sessionStorage.token
        searchVehicles(query, token, (error, vehicles) =>{
            if (error) return this.setState(error: error.message)

            const {protocol, host, pathname } = location

            const url = `${protocol}//${host}${pathname}?q=${query}`

            history.pushState({path: url}, '', url)

            this.setState({ vehicles, vehicle: undefined, error: vehicles.length ? undefined : 'No results' })

            if (error) {setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
            }

        })
    }

    handleDetail = id => {  
        const {token} = sessionStorage
        retrieveVehicle(id, token, (error, vehicle) => 
        
            this.setState({ vehicle, vehicles: undefined})
        )
    }

    handleBack = () => {
        const query = location.search.split('=')[1]
        this.handleSearch(query)
    }

    handleLogout = () => {
        sessionStorage.clear();

        const { protocol, host, pathname } = location

        const url = `${protocol}//${host}${pathname}`

        history.pushState({ path: url }, '', url)
        this.setState({ user: undefined, vehicles: undefined, view: 'login' })
    }

    handleHeart = id => {

        const {token} = sessionStorage
    
        toggleFavVehicle(id, token, (error) => {
            if (error) return this.state(error: error.message)
            const query = location.search.split('=')[1];
            
            if (this.state.vehicles){
                this.handleSearch(query)
            } else if (this.state.vehicle && this.state.vehicles === undefined){
                this.handleDetail(id)
            } else if (this.state.favorites) {
                this.handleOnToFavorites(token)
            }
        })
    }

    handleOnToFavorites = () => {
        
        const {token} = sessionStorage
        
        retrieveFavVehicles (token, (error, favorites)=> {
            
            if (error) return this.state({error: error.message})
            
            this.setState({vehicles: undefined, vehicle: undefined, view: 'favorites', favorites})
        })

    }

    render() {
        const { props: {title}, state: {view, vehicle, vehicles, error, user, favorites}, handleDetail, handleLogin, handleRegister, handleSearch, handleToLogin, handleToRegister, handleBack, handleLogout, handleHeart, handleOnToFavorites} = this
        return <main>
            <h1>{title}</h1>
            <a href="#" onClick={handleOnToFavorites}>Favorites</a>

            {view==='login' && <Login onSubmit={handleLogin} onToRegister = {handleToRegister} error={error}/>} 

            {view === 'register' && <Register onSubmit ={handleRegister} onToLogin = {handleToLogin} error={error}/>}

            {view=== 'search' && <Search title="Search" name={user.name} onSubmit={handleSearch} onLogout={handleLogout} />}

            {view === 'search' && vehicles && !vehicle && <Results results={vehicles} onItemClick={handleDetail} onFavSelection={handleHeart}/>}

            {view === 'search' && vehicle && <Detail vehicle={vehicle} onBack ={handleBack} onFavClick={handleHeart}/>}

             {view === 'favorites' && !vehicles && !vehicle && <Favorites favorites={favorites} onItemClick={handleDetail} onFavSelection={handleHeart} onToSearch ={handleBack}/>}
        </main>
    }
}