const IT = '🎈🤡';

const {Component, Fragment} = React

class App extends Component {
    // constructor () {
    //     super()
        
         state = {view: "register", vehicle: undefined, vehicles: undefined, style: undefined, error: undefined}

         handleLogin = (username, password) => {
            try {
                authenticate(username, password)

                this.setState({view: "search"})
            } catch (error) {
                this.setState({error: `${error.message} ${IT}`})

                setTimeout(() =>{
                    this.setState({error: undefined})
                }, 3000)
            }
        }

        handleGoToLogin = () => this.setState({view: "login"})

        handleRegister = (name, surname, username, password) => {
            try{
                registerUser(name, surname, username, password)
                this.setState({view: "login"})
            } catch (error) {
                this.setState({error: `${error.message} ${IT}`})

                setTimeout(() =>{
                    this.setState({error: undefined})
                }, 3000)
            }
        }

        handleGoToRegister = () => this.setState({view: "register"})

        handleSearch = query => {
            searchVehicles(query, vehicles => {
                this.setState({ vehicles, vehicle: undefined, error: vehicles.length ? undefined : 'No results ' + IT  })

                if (!vehicles.length)
                    setTimeout(() =>{
                        this.setState({error: undefined})
                    }, 3000)
            })
        }
        
        handleDetail = id => {
            retrieveVehicle(id, vehicle =>
                retrieveStyle(vehicle.style, style =>
                    this.setState({ vehicles: undefined, vehicle, style})
                )
            )
        }

        
    render() {
        const {props:{title}, state:{vehicle, vehicles, view, style, error}, handleDetail, handleGoToLogin, handleGoToRegister, handleLogin, handleRegister, handleSearch} = this

        return <Fragment>

            <h1>{title}</h1>

            {view === "register" && <Register onSubmit = {handleRegister} onToLogin = {handleGoToLogin} error={error}/>}
            
            {view === "login" && <Login onSubmit = {handleLogin} onToRegister = {handleGoToRegister} error = {error} />}

            {view === "search" && <Search title = "Search" onSubmit = {handleSearch} warning = {error}/>}

            {view === "search" && vehicles && !vehicle && <Results results={vehicles} onItemClick={handleDetail}/>}

            {view === "search" && vehicle && <Detail vehicle={vehicle} style={style}/>}
        </Fragment>
    }
}