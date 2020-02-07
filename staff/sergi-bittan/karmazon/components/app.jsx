const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {
    // constructor() {
    //     super()

    state = { view: "login", vehicles: undefined, query: undefined, vehicle: undefined, style: undefined, error: undefined , user: undefined, favorites: []}


    handleRetrieveToken = () => sessionStorage.getItem("token") //retorna el token

    handleStoreToken = (token) => sessionStorage.setItem("token", token) //guarder token en session storage

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
                    this.handleStoreToken(token)
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
        const token = this.handleRetrieveToken()
        searchVehicles(query, token,  response =>{
            const {vehicles, favorites} = response
            this.setState({ vehicles,favorites, vehicle: undefined , query})

        })
       
    }

    handleDetail = id => {
        retrieveVehicle(id, vehicle =>
            retrieveStyle(vehicle.style, style =>
                this.setState({ vehicle, style, vehicles: undefined })
            )
        )
    }

    handleUpdate=(newUser)=>{
        try{
            const token = this.handleRetrieveToken()
            updateUser(token, newUser, (response) =>{
                if (response instanceof Error) {
                    this.setState({error: response.message})
                }else{
                    this.setState({error: "update correcte", user: Object.assign(this.state.user, newUser)})
                }

            })

        }catch(error){
            this.setState({error: `${error.message} ${IT}`})

            setTimeout(()=>{
                this.setState({error: undefined})
            }, 3000)

        }
    }
    handleGoToSearch = () => this.setState({view: "search"})

    handleGoToUpdate = () => this.setState({view:"update"})

    handleFav = (id) => {
        const token = this.handleRetrieveToken()
        toggleVehicle(token, id, response =>{
            if (response instanceof Error){
                this.setState({error: response.message})
        }else{
                console.log("toggle vehicle ok")
                this.handleSearch(this.state.query)
        }})
    } 

   



    render() {

        const {props:{title}, state:{view, vehicles, vehicle, style, error, user, favorites}, handleLogin, handleGoToLogin, handleRegister, handleGoToRegister, handleSearch,  handleDetail, handleUpdate, handleGoToSearch, handleGoToUpdate, handleFav} = this
        return <Fragment>

            <h1>{title}</h1>
            

            {user && <h2>{user.name}</h2>}
            {view === "update" && <Update onSubmitValidar={handleUpdate} onGoToSearch={handleGoToSearch} user={user}/>}

            {view === "register" && <Register onSubmit={handleRegister}  onToLogin={handleGoToLogin} error={error}/>}

            {view === "login" && <Login onSubmit={handleLogin}  onToRegister={handleGoToRegister} error={error}/>}

            {view === "search" && <Search title="Search" onSubmit={handleSearch} onGoToUpdate={ handleGoToUpdate} user={user} />}

            {view === "search" && !vehicle && vehicles && <Results results={vehicles} onItemClick={handleDetail} onToggleFav={handleFav} favorites={favorites}/>}

            {view === "search" && vehicle && <Detail vehicle={vehicle} style={style} onToggleFav={handleFav} favorites={favorites} />}
        </Fragment>
    }
}


