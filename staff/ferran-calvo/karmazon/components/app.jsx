const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {

        state = { view: 'login', vehicles: undefined, vehicle: undefined, style: undefined, error: undefined}

        handleRegister = (name, surname, username, password) => {
            try {
                register(name, surname, username, password)

                this.setState({ view: 'login'})
            } catch (error) {
                this.setState({error: `${error}.message ${IT}`})

                setTimeout(()=>{
                    this.setState({error: undefined})
                },3000)
            }
        }

        handleLogin = (username, password) => {
            try {
                authenticate(username, password)

                this.setState({ view: 'search'})
            } catch (error) {
                this.setState({error: `${error}.message ${IT}`})
                setTimeout(()=>{
                    this.setState({error: undefined})
                },3000)
            }
        }

        handleGoToRegister = () => this.setState({view: 'register'})

        handleGoToLogin = () => this.setState({view: 'login'})

        handleSearch = query => {
            searchVehicles(query, vehicles =>
                this.setState({ vehicles })
            )
        }

        handleDetail = id => {
            retrieveVehicle(id, vehicle =>
                retrieveStyle(vehicle.style, style => {
                    this.setState({ vehicle, style })
                }
                )
            )
        }

        handleGoBack =  () => this.setState({ vehicle : undefined})
    

    render() {

        const {props: {title}, state: {view, vehicles, vehicle, style, error}, handleLogin, handleRegister, 
        handleGoToRegister, handleGoToLogin, handleSearch, handleDetail, handleGoBack} = this

        return <Fragment>
            <h1>{title}</h1>

            {view === 'login' && <Login onSubmit={handleLogin} goToRegister={handleGoToRegister} error={error}/>}

            {view === 'register' && <Register onSubmit={handleRegister} goToLogin={handleGoToLogin} error={error}/>}

            {view === 'search' && <Search title="Search" onSubmit={handleSearch} warning={error}/>}

            {view === 'search' && vehicles && !vehicle && <Results results={vehicles} onItemClick={handleDetail} />}

            {view === 'search' && vehicle && <Detail vehicle={vehicle} style={style} goBack={handleGoBack}
            />}
        </Fragment>
    }
}