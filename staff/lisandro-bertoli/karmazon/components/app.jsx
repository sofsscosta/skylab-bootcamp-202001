
const IT = '🎈🤡';

const { Component, Fragment } = React

class App extends Component {

    state = {
        view: 'login',
        vehicles: undefined,
        vehicle: undefined,
        error: undefined
    }

    handleLogin = (username, password) => {

        try {

            authenticateUser(username, password, response => {

                if (response instanceof Error) {
                    this.setState({ error: response.message })
                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
                } else { this.setState({ view: 'search' }) }
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
            registerUser(name, surname, username, password, error => {
                if (error) throw new Error(error)
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

    handleSearch = (query) => {
        searchVehicles(query, vehicles => {
            if (!vehicles.length) return this.setState({ error: 'No results ' + IT })
            this.setState({ vehicles })
        })

        setTimeout(() => {
            this.setState({ error: undefined })
        }, 3000)

    }

    handleBackToResults = () => {
        this.setState({ vehicle: undefined })
    }

    handleItemClick = (productId) => {
        retrieveVehicle(productId, vehicle => {
            this.setState({ vehicle })
        })
    }

    handleLogout = () => {
        localStorage.clear();
        this.setState({ vehicles: undefined, view: 'login' })
    }

    render() {
        const { props: { title }, state: { view, vehicles, vehicle, error }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleBackToResults, handleItemClick, handleLogout } = this
        return <Fragment>

            <h1>{title}</h1>

            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search title="Search" onSubmit={handleSearch} error={error} onLogout={handleLogout} />}

            {vehicles && !vehicle && <Results results={vehicles} onItemClick={handleItemClick} />}

            {vehicle && <Detail product={vehicle} backToResults={handleBackToResults} />}
        </Fragment>


    }

}

