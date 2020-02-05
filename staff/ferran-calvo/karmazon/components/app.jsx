// const IT = '🎈🤡'

// const { Component } = React

// //const Component = React.Component

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {loggedIn: true, toRegister: false, vehicles: undefined}
//     }

//     render() {
//         return <main>
//             <h1>{this.props.title}</h1>

//             {this.state.loggedIn && <Login onSubmit= {(username, password) => {
//                 try { 
//                     authenticate(username, password)

//                     this.setState({ toRegister: false}) //_login.container.replaceWith(_search.container)
//                     this.setState({ loggedIn: false }) //_login.container.replaceWith(_search.container)
//                 } catch (error) {
//                     //alert(error.message + ' ' + IT)
//                     //_login.showError(error.message + ' ' + IT)
//                 }
//             }} onToRegister= { () => {
//                 this.setState({ toRegister: true })
//                 this.setState({ loggedIn: false })
//                 }
//             } /> }

//             {this.state.toRegister && <Register onSubmit={(name, surname, username, password) => {
//                 try {
//                     register(name, surname, username, password)

//                     this.setState({ loggedIn: true })
//                     // _register.container.replaceWith(_login.container)
//                 } catch (error) {
//                     //alert(error.message + ' ' + IT)
//                     //_register.showError(error.message + ' ' + IT)
//                 }
//             }} onToLogin= { () => {
//                 this.setState({loggedIn: true})
//                 this.setState({toRegister: false})

//                 }
//             } />}

//             {!this.state.loggedIn && !this.state.toRegister && <Search title="Search" onSubmit={query => {
//                 searchVehicles(query, vehicles => {
//                     this.setState({ vehicles })
//                 })
//             }}

//             />}

//             {this.state.vehicles && <Results results={this.state.vehicles} onItemClick={event => {
//                 event.preventDefault()

//             }
//             }/>}



//         </main>

//         let _results
//     }
// }








///



const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {
   
    state = { view: 'login', vehicles: undefined, vehicle: undefined, style: undefined, error: undefined }

    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, token => {
                // WTF w/ token?
                const stringToken = JSON.parse(token.content).token
                localStorage.setItem("token", stringToken)

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
                this.setState({ vehicle, style})
            )
        )
    }

    handleChangeUsername = (newUsername) => {
        const token = localStorage.getItem("token")
        console.log(token)
            updateUser(newUsername, token, () => {
                this.setState({view: "login"}) 
            })
        
    }

    handleOnToChangeUsername = () => this.setState({view: "changeUsername"}) 

    handleOnToChangePassword = ()  => this.setState({view: "changePassword"})

    handleChangePassword = (oldPassword, password) => {
        const token = localStorage.getItem("token")
        console.log(token)
            updatePassword(oldPassword, password, token, () => {
                this.setState({view: "login"}) 
            })
    }

    handleOnToDeleteUser = () => this.setState({view: "deleteUser"}) 

    handleDeleteUser = (password) => {
        const token = localStorage.getItem("token")
        console.log(token)
            deleteUser(password, token, () => {
                this.setState({view: "login"}) 
            })
    }

    handleGoBack =  () => this.setState({ vehicle : undefined})

    render() {
        const { props: { title }, state: { view, vehicles, vehicle, style, error }, handleLogin, 
        handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleDetail, 
        handleGoBack, handleChangeUsername, handleOnToChangeUsername, handleOnToChangePassword, 
        handleChangePassword, handleDeleteUser, handleOnToDeleteUser } = this

        return <Fragment>
            <h1>{title}</h1>

            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === 'search' && <Search title="Search" onSubmit={handleSearch} warning={error} onToChangeUsername={handleOnToChangeUsername} onToChangePassword={handleOnToChangePassword} onToDeleteUser={handleOnToDeleteUser}/>}

            {view === 'changeUsername' && <ChangeUsername onToLogin={handleGoToLogin} onSubmit={handleChangeUsername} error={error}/>}

            {view === 'changePassword' && <ChangePassword onToLogin={handleGoToLogin} onSubmit={handleChangePassword} error={error}/>}

            {view === 'deleteUser' && <DeleteUser onToLogin={handleGoToLogin} onSubmit={handleDeleteUser} error={error}/>}

            {view === 'search' && vehicles && !vehicle && <Results results={vehicles} onItemClick={handleDetail} />}

            {view === 'search' && vehicle && vehicles && <Detail vehicle={vehicle} style={style} goBack={handleGoBack}/>}
        </Fragment>
    }
}









// const IT = '🎈🤡'

// const { Component, Fragment } = React

// class App extends Component {

//         state = { view: 'login', vehicles: undefined, vehicle: undefined, style: undefined, error: undefined}

//         handleRegister = (name, surname, username, password) => {
//             try {
//                 register(name, surname, username, password)

//                 this.setState({ view: 'login'})
//             } catch (error) {
//                 this.setState({error: `${error}.message ${IT}`})

//                 setTimeout(()=>{
//                     this.setState({error: undefined})
//                 },3000)
//             }
//         }

//         handleLogin = (username, password) => {
//             try {
//                 authenticate(username, password)

//                 this.setState({ view: 'search'})
//             } catch (error) {
//                 this.setState({error: `${error}.message ${IT}`})
//                 setTimeout(()=>{
//                     this.setState({error: undefined})
//                 },3000)
//             }
//         }

//         handleGoToRegister = () => this.setState({view: 'register'})

//         handleGoToLogin = () => this.setState({view: 'login'})

//         handleSearch = query => {
//             searchVehicles(query, vehicles =>
//                 this.setState({ vehicles })
//             )
//         }

//         handleDetail = id => {
//             retrieveVehicle(id, vehicle =>
//                 retrieveStyle(vehicle.style, style => {
//                     this.setState({ vehicle, style })
//                 }
//                 )
//             )
//         }

//         handleGoBack =  () => this.setState({ vehicle : undefined})
    

//     render() {

//         const {props: {title}, state: {view, vehicles, vehicle, style, error}, handleLogin, handleRegister, 
//         handleGoToRegister, handleGoToLogin, handleSearch, handleDetail, handleGoBack} = this

//         return <Fragment>
//             <h1>{title}</h1>

//             {view === 'login' && <Login onSubmit={handleLogin} goToRegister={handleGoToRegister} error={error}/>}

//             {view === 'register' && <Register onSubmit={handleRegister} goToLogin={handleGoToLogin} error={error}/>}

//             {view === 'search' && <Search title="Search" onSubmit={handleSearch} warning={error}/>}

//             {view === 'search' && vehicles && !vehicle && <Results results={vehicles} onItemClick={handleDetail} />}

//             {view === 'search' && vehicle && <Detail vehicle={vehicle} style={style} goBack={handleGoBack}
//             />}
//         </Fragment>
//     }
// }