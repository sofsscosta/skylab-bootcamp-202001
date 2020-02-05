const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {

    state = { view: 'login', vehicles: undefined, vehicle: undefined, error: undefined }
    
    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, response => { console.log('hola')
                this.setState({ view: 'search' })
                // retrieveUser = token => { debugger

                // }
            })

        } catch (error) {
            this.setState({error: error.message + " " + IT})
            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleGoToRegister = () => {this.setState({view: 'register'})}
    
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

    handleGoToLogin = () => {this.setState({view: 'login'})}

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

    handleBackToResults = () => {
        this.setState({ vehicle: undefined })}

    render() {

        const { props: {title}, state: { view, vehicles, vehicle, error }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleDetail, handleBackToResults } = this
        return <Fragment>
            <h1>{title}</h1>

            {view === "login" && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}
            
            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search title="Search" onSubmit={handleSearch} error={error}/>}

            {view === 'search' && vehicles && !vehicle && <Results results={vehicles} onItemClick={handleDetail}/>}

            {view === 'search' && vehicle && <Details detailInfo={vehicle} onBack={handleBackToResults} />}

        </Fragment>
    }
}