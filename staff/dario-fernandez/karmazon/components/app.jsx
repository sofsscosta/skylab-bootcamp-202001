const { Component, Fragment } = React // === const Component = React.Component


class App extends Component{
        state = { view: undefined, vehicles: undefined, vehicle: undefined, error: undefined, userName: undefined }
    
    componentWillMount() {
        const { token } = sessionStorage
        if(token) {
            getUserInfo(token, userInfo => {
                this.setState({ userName: `${userInfo.name} ${userInfo.surname}` })
                this.setState({ view: 'search' })
            })

        } else {
            this.setState({ view: 'login' })
        }
    }
    
    handleLogin = (credentials) =>  {
        try {
            authenticateUser(credentials, (error, token) => {
                if(error) {
                    this.setState({ error: 'Wrong credentials' })

                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
                } else {
                    sessionStorage.token = token
                    getUserInfo(token, userInfo => {
                        this.setState({ userName: `${userInfo.name} ${userInfo.surname}` })
                    })
                    
                    this.setState({ view: 'search' })
                }     
                
            })
        } catch(error) {
            this.setState({ error: error.message })

            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleOnToRegister = () => {
        this.setState({ view: 'register' })
    }
    
    handleRegister = ({ name, surname, username, password }) => {
        try{
            registerUser({ name, surname, username, password }, error => {
                if(error) {
                    this.setState({ error: undefined })
                    this.setState({ error: `${username} is in use` })

                    setTimeout(() => {
                    }, 3000)
                } else {
                    this.setState({ view: 'login' })
                }
            })

        } catch (error) {
            this.setState({ error: error.message })

            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000);
        }
    }

    handleOnToLogin = () => {
        this.setState({ view: 'login' })
    }

    handleSearch = (query) => {
        searchVehicles(query, (error, vehicles) => {
            if(error) {
                this.setState({ error: error.message })

                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000)
            } else {
                this.setState({ vehicles, vehicle: undefined,  error: vehicles.length? undefined : 'No results' })
            }
            
        })}

    handleOnToDetails = (id) => {
        searchDetails(id, (error, vehicle) => {
            if(error) {
                this.setState({ error: error.message })

                setTimeout(() => {
                    this.setState({  })
                })
            } else {
                this.setState({ vehicles: undefined })
                this.setState({ vehicle })
                this.setState({ view: 'details' })
            }
        })
    }

    handleCloseDetails = () => {
        this.setState({ vehicle: undefined })
        this.setState({ view: 'search' })
    }
    
    render(){
        const {props: { title }, state: { view, vehicles, vehicle, error, userName }, handleLogin, handleOnToRegister, handleRegister, handleOnToLogin, handleSearch, handleOnToDetails, handleCloseDetails} = this

        return <main className="app">
            <h1 className="app__title">{title}</h1>
            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleOnToRegister} error={error}  />}
            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleOnToLogin} error={error} />}
            {view === 'search' && <Search onSubmit={handleSearch} warning={error} user={userName}/>} 
            {view === 'search' && vehicles && <Results results={vehicles} onClick={handleOnToDetails} />}
            {view === 'details' && <Details details={vehicle} onCloseDetails={handleCloseDetails}/>}
        </main>
    }
}