const { Component, Fragment } = React // === const Component = React.Component


class App extends Component{
    state = { view: 'login', vehicles: undefined, vehicle: undefined, error: undefined }

    handleLogin = (credentials) =>  {
        try {
            authenticateUser(credentials, () => this.setState({ view: 'search' }))
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
            registerUser({ name, surname, username, password }, () => {
                this.setState({ view: 'login' })
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
        searchVehicles(query, vehicles => {
            this.setState({ vehicles, vehicle: undefined,  error: vehicles.length? undefined : 'No results' })
            
            if(!vehicles.length){
                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000);
            }
        })}

    handleOnToDetails = (id) => {
        searchDetails(id, vehicle => {
            this.setState({ vehicles: undefined })
            this.setState({ vehicle })
            this.setState({ view: 'details' })
        })
    }

    handleCloseDetails = () => {
        this.setState({ vehicle: undefined })
        this.setState({ view: 'search' })
    }
    
    render(){
        const {props: { title }, state: { view, vehicles, vehicle, error }, handleLogin, handleOnToRegister, handleRegister, handleOnToLogin, handleSearch, handleOnToDetails, handleCloseDetails} = this

        return <main className="app">
            <h1 className="app__title">{title}</h1>
            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleOnToRegister} error={error}  />}
            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleOnToLogin} error={error} />}
            {view === 'search' && <Search onSubmit={handleSearch} warning={error} />} 
            {view === 'search' && vehicles && <Results results={vehicles} onClick={handleOnToDetails} />}
            {view === 'details' && <Details details={vehicle} onCloseDetails={handleCloseDetails}/>}
        </main>
    }
}