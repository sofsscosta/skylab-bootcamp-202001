const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {

    state = { view: "login", vehicles: undefined, vehicle: undefined, style: undefined, error: undefined}

    handleLogin = (username, password) => {
        try {
            authenticate(username, password)

            this.setState({ view: "search" })
        } catch (error) {
            this.setState({ error: `error.message ${IT}` })
            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleGoToRegister = () => this.setState({ view: "register" })

    handleRegister = (name, surname, username, password) => {
        try {
            register(name, surname, username, password)

            this.setState({ view: "login" })
        } catch (error) {
            this.setState({ error: `error.message ${IT}` })
            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleGoToLogin = () => this.setState({ view: "login" })

    handleSearch = query => {
        searchVehicles(query, vehicles => {
            this.setState({ vehicles, vehicle: undefined, error: vehicles.length ? undefined : `No results ${IT}` })

            if (!vehicles.length) {
                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000)
            }
        })
    }

    handleDetail = id => {
        retrieveVehicle(id, vehicle =>
            retrieveStyle(vehicle.style, style =>
                this.setState({ vehicle, style,}
                )
            )
        )

    }

    handleBack = () =>{
        this.setState({vehicle: undefined, view: 'search'})
    }

    render() {
        const { props: { title }, state: { view, vehicles, vehicle, style, error }, handleLogin, handleGoToRegister, handleGoToLogin, handleRegister, handleSearch, handleDetail, handleBack } = this

        return <Fragment>
            <h1>{title}</h1>
            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search title="Search" onSubmit={handleSearch} warning={error} />}

            {view === 'search' && vehicles && !vehicle && <Results results={vehicles} onItemClick={handleDetail} />}

            {view === 'search' &&  vehicle && vehicles && <Detail vehicle={vehicle} style={style} onClick={handleBack} />}


        </Fragment>

    }
}

