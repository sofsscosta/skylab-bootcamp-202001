const IT = '🎈🤡';

const { Component, Fragment } = React

class App extends Component {

    state = { view: 'login', vehicles: undefined, vehicle: undefined, style: undefined, error: undefined, warning: undefined, token:undefined, nameOfUser: undefined }


    handleLogin = (username, password) => {

        authenticateUser(username, password, token => {
            if (token instanceof Error) {
                this.setState({ error: token + ' ' + IT })

                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000);

            }
            
            else {
                retrieveUser(token, send =>{
                    if(send instanceof Error){
                        console.log('odio tu vida')
                    }else this.setState({nameOfUser: `Hola ${send.name}, bienvenido de nuevo`})
                })
                this.setState({ view: 'search' })
            }
        })



    }

    handleGoToRegister = () => {
        this.setState({ view: 'register' })
    }

    handleRegister = (name, surname, username, password) => {
        registerUser(name, surname, username, password, response => {
            if (response instanceof Error) {
                this.setState({ error: response + ' ' + IT })
                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000)
            } else this.setState({ view: 'login' })
        })
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
            this.setState({ vehicle, view: 'detail' })
        )
    }

    handleToBack = () => { this.setState({ vehicle: undefined, view: 'search' }) }

    render() {

        const { props: { title }, state: { view, vehicles, vehicle, nameOfUser, error }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleDetail, handleToBack } = this

        return <Fragment>
            {nameOfUser && <span>{nameOfUser}</span>}
            <h1>{title}</h1>


            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search title="Search" onSubmit={handleSearch} error={error} />}

            {view === 'search' && vehicles && <Results results={vehicles} onItemClick={handleDetail} />}

            {view === 'detail' && vehicle && <Detail vehicle={vehicle} onBack={handleToBack} />}

        </Fragment>
    }

}


