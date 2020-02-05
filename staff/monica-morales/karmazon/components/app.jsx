const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {

    state = { view: 'login', vehicles: undefined, vehicle: undefined, style: undefined, error: undefined, warning: undefined }


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

    handleGoToRegister = () => {
        this.setState({ view: 'register' })
    }

    handleRegister = (name, surname, username, password) => {
        try {
            registerUser(name, surname, username, password, () => {
                this.setState({ view: 'login'})
            })

        } catch (error) {
            this.setState({ error: error.message + ' ' + IT })
            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000);
        }
    }

    handleGoToLogin = () => { this.setState({ view: 'login' }) }

    handleSearch = query => {
        searchVehicles(query, vehicles => {
            if (this.vehicle) {
                this.setState({ vehicle: undefined })
            }

            this.setState({ vehicles, error: vehicles.length ? undefined : 'No results' })

            if (!vehicles.length) {
                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000)
            }
        })
    }

    handleDetail = id => {
        retrieveVehicle(id, vehicle =>
            this.setState({ vehicle, view: 'detail'})
        )
    }

    handleToBack = () => { this.setState({ vehicle: undefined, view: 'search'}) }

    

    render() {

        const { props: { title }, state: { view, vehicles, vehicle, style, error }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleDetail, handleToBack } = this

        return <Fragment>

            <h1>{title}</h1>


            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search title="Search" onSubmit={handleSearch} error={error} />}

            {view === 'search' && vehicles && <Results results={vehicles} onItemClick={handleDetail} />}

            {view === 'detail' && vehicle && <Detail vehicle={vehicle} onBack={handleToBack} />}

        </Fragment>
    }

}