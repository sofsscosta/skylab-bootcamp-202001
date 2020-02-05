const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {
    // constructor() {
    //     super()

    state = { view: "register", vehicles: undefined, vehicle: undefined, style: undefined, error: undefined , user: undefined}

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
            authenticateUser(username, password, (response)=>{ //token que he rebut
                if (response instanceof Error){
                    this.setState({error: response.message})
                }else{
                    const token = response
                    retrieveUser(token, (user)=>{   //user es content de retrieveUser
                        this.setState({view: "search", user})

                    })
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

        const {props:{title}, state:{view, vehicles, vehicle, style, error, user}, handleLogin, handleGoToLogin, handleRegister, handleGoToRegister, handleSearch,  handleDetail} = this
        return <Fragment>

            <h1>{title}</h1>
            

            {user && <h2>{user.name}</h2>}
            {view === "register" && <Register onSubmit={handleRegister}  onToLogin={handleGoToLogin} error={error}/>}

            {view === "login" && <Login onSubmit={handleLogin}  onToRegister={handleGoToRegister} error={error}/>}

            {view === "search" && <Search title="Search" onSubmit={handleSearch} user={user} />}

            {view === "search" && !vehicle && vehicles && <Results results={vehicles} onItemClick={handleDetail} />}

            {view === "search" && vehicle && <Detail vehicle={vehicle} style={style} />}
        </Fragment>
    }
}


