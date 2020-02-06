const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {

    state = { view: 'login', vehicles: undefined, vehicle: undefined, error: undefined, nameOfUser: undefined }
    
    handleLogin = (username, password) => {
        authenticateUser(username, password, token => {
            if (token instanceof Error) {
                this.setState({error: error.message + " " + IT})
                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000)
            } else {
                retrieveUser(token, send => { 
                    if (send instanceof Error) {
                        this.setState({error: error.message + " " + IT})
                        setTimeout(() => {
                            this.setState({ error: undefined })
                        }, 3000)
                    } else {
                        this.setState({ nameOfUser: `¡Hola ${send.name} ${send.surname}, bienvenid@ de nuevo!` })
                    }
                })

                this.setState({ view: 'search' })
            }
        })

     
    }

    handleGoToRegister = () => this.setState({view: 'register'})
    
    handleRegister = (name, surname, username, password) => {
        try {
            registerUser(name, surname, username, password, () => {
                this.setState({ view: 'login' })
            })

        } catch (error) {
            this.setState({error: error.message + " " + IT})

            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleGoToLogin = () => this.setState({view: 'login'})

    handleSearch = query => {
        searchVehicles(query, vehicles => {
            if(this.vehicle) {
                this.setState({vehicle: undefined})
            }
            this.setState({query: {query}})
            this.setState({ vehicles, vehicle: undefined, error: vehicles.length ? undefined : 'No results ' + IT })
        

            if (!vehicles.length)
            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        })
    }

    handleDetail = id => {
        retrieveVehicle(id, vehicle => this.setState({ vehicle }))
    }

    handleBackToResults = () => this.setState({ vehicle: undefined })

    render() {

        const { props: {title}, state: { view, vehicles, vehicle, error, nameOfUser }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleDetail, handleBackToResults } = this
        return <Fragment>
            <h1>{title}</h1>

            {view === "login" && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}
            
            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search title="Search" onSubmit={handleSearch} error={error} nameOfUser={nameOfUser}/>}

            {view === 'search' && vehicles && !vehicle && <Results results={vehicles} onItemClick={handleDetail}/>}

            {view === 'search' && vehicle && <Details detailInfo={vehicle} onBack={handleBackToResults} />}

        </Fragment>
    }
}