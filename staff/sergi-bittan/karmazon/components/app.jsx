const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {
    // constructor() {
    //     super()

    state = { view: "register", vehicles: undefined, vehicle: undefined, style: undefined, error: undefined }

    handleRegister = (name, surname, username, password) => {
        try {
            registerUser(name, surname, username, password, (response)=>{
                if (response instanceof Error) {
                    this.setState({error: response.message})
                }else{
                this.setState({ view: "login" })
            }})

        } catch (error) {
            this.setState({error: `${error.message} ${IT}`})

            setTimeout(()=>{
                this.setState({error: undefined})
            },3000)
        }
    }

    handleGoToLogin =  ()=> this.setState({view: "login"})


    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, (response)=>{
                if (response instanceof Error){
                    this.setState({error: response.message})
                }else{
                    this.setState({view: "search"})
                }
            })

           
        } catch (error) {
            this.setState({error: `${error.message} ${IT}`})

            setTimeout(()=>{
                this.setState({error: undefined})
            }, 3000)
            //_login.showError(error.message + ' ' + IT)
        }
    }

    handleGoToRegister = ()=> this.setState({view: "register"})

    handleSearch = query => {
        searchVehicles(query, vehicles =>
            this.setState({ vehicles, vehicle: undefined })
        )
    }

    handleDetail = id => {
        retrieveVehicle(id, vehicle =>
            retrieveStyle(vehicle.style, style =>
                this.setState({ vehicle, style, vehicles: undefined })
            )
        )
    }


    render() {

        const {props:{title}, state:{view, vehicles, vehicle, style, error}, handleLogin, handleGoToLogin, handleRegister, handleGoToRegister, handleSearch,  handleDetail} = this
        return <Fragment>

            <h1>{title}</h1>

            {view === "register" && <Register onSubmit={handleRegister}  onToLogin={handleGoToLogin} error={error}/>}

            {view === "login" && <Login onSubmit={handleLogin}  onToRegister={handleGoToRegister} error={error}/>}

            {view === "search" && <Search title="Search" onSubmit={handleSearch} />}

            {view === "search" && !vehicle && vehicles && <Results results={vehicles} onItemClick={handleDetail} />}

            {view === "search" && vehicle && <Detail vehicle={vehicle} style={style} />}
        </Fragment>
    }
}


