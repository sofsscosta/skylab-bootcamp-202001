const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {
    state = { vehicle: undefined, vehicles: undefined, style: undefined, view: 'login', error: undefined }

    handleLogin = (username, password) => {
        try {
            authenticate(username, password)
            this.setState({ view: 'search' })
        } catch (error) {
            this.setState({ error: error.message + ' ' + IT })
            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000);
        }
    }

    handleRegister = (name, surname, username, password) => {
        try {
            register(name, surname, username, password)
        } catch (error) {
            this.setState({ error: error.message + ' ' + IT })
            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000);
        }
    }

    handleSearch = (query) => {
        searchVehicles(query, vehicles => {
            this.setState({ vehicles, vehicle: undefined })
        })
    }

    handleItemClick = id => {
        retrieveVehicle(id, vehicle => {
            retrieveStyle(vehicle.style, style =>
                this.setState({ vehicle, style, vehicles: undefined })
            )
        })
    }

    handleItemBackButton = () => this.setState({ vehicle: undefined })
    handleNavigation = (toView) => this.setState({ view: toView })

    render() {
        const {props: {title}, state:{view, vehicle, vehicles, style, error}, handleLogin, handleRegister, handleSearch, handleItemClick, handleItemBackButton} = this
        
        return <Fragment>
            <h1>{title}</h1>
            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={() => handleNavigation('register')} error={error} />}
            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={() => handleNavigation('login')} error={error} />}
            {view === 'search' && <Search title="Search" onSubmit={handleSearch} />}
            {view === 'search' && vehicles && !vehicle && <Results results={vehicles} onItemClick={handleItemClick} />}
            {view === 'search' && vehicle && <Detail vehicle={vehicle} style={style} onBackButtonClick={handleItemBackButton} />}
        </Fragment>
    }
}