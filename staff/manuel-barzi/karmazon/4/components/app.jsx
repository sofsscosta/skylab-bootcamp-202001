const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {
    // ES6
    // constructor() {
    //     super()

    //     this.state = { view: 'login', vehicles: undefined, vehicle: undefined, style: undefined, error: undefined }

    //     this.handleLogin = this.handleLogin.bind(this)
    // }

    // ES.NEXT
    state = { view: 'login', vehicles: undefined, vehicle: undefined, style: undefined, error: undefined }

    // ES.NEXT
    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, token => {
                // WTF w/ token?
                this.setState({ view: 'search' })
            })
        } catch (error) {
            this.setState({ error: error.message + ' ' + IT })

            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleGoToRegister = () => this.setState({ view: 'register' })

    handleRegister = (name, surname, username, password) => {
        try {
            registerUser(name, surname, username, password, () => {
                this.setState({ view: 'login' })
            })
        } catch (error) {
            this.setState({ error: error.message + ' ' + IT })

            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleGoToLogin = () => this.setState({ view: 'login' })

    handleSearch = query => {
        searchVehicles(query, vehicles => {
            this.setState({ vehicles, vehicle: undefined, error: vehicles.length ? undefined : 'No results ' + IT })

            if (!vehicles.length)
                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000)
        })
    }

    handleDetail = id => {
        retrieveVehicle(id, vehicle =>
            retrieveStyle(vehicle.style, style =>
                this.setState({ vehicle, style, vehicles: undefined })
            )
        )
    }

    render() {
        const { props: { title }, state: { view, vehicles, vehicle, style, error }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleDetail } = this

        return <Fragment>
            <h1>{title}</h1>

            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search title="Search" onSubmit={handleSearch} warning={error} />}

            {view === 'search' && vehicles && <Results results={vehicles} onItemClick={handleDetail} />}

            {view === 'search' && vehicle && <Detail vehicle={vehicle} style={style} />}
        </Fragment>
    }
}