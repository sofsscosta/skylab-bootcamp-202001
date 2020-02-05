const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {
    state = { view: "login", vehicles: undefined, vehicle: undefined, style: undefined, error: undefined, userToPrint: undefined, token:undefined}

    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, token =>{
                if (token instanceof Error) {
                    this.setState({ error: `${token.message} ${IT}` })
                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
                }else{
                    retrieveUser(token, userToPrint =>{ 
                                     
                        this.setState({ view: "search", token, userToPrint })                  
                    })
                }
            })
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
    handleGoToUpdateUser = () =>{
        this.setState({view: 'updateuser'})
    }
    handleGoToUpdatePassword = () =>{
        this.setState({view: 'updatepassword'})
    }
    handleUpdateUser = (token, oldUser, newUser) => {
        updateUser(token, oldUser, newUser, callback =>{
            this.setState({view: 'login'})
        })

    }
    handleUpdatePassword = (token, oldPassword, newPassword) => {
        debugger
        updatePassword(token, oldPassword, newPassword, callback =>{
            this.setState({view: 'login'})
        })
    }

    render() {
        const { props: { title }, state: { view, vehicles, vehicle, style, error, userToPrint, token }, handleLogin, handleGoToRegister, handleGoToLogin, handleRegister, handleSearch, handleDetail, handleBack, handleUpdateUser, handleUpdatePassword, handleGoToUpdateUser, handleGoToUpdatePassword } = this

        return <Fragment>
            <h1>{title}</h1>
            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} on error={error} />}

            {view === 'search' && <Search  user={userToPrint} title="Search" onSubmit={handleSearch} onToUpdateUser={handleGoToUpdateUser} onToUpdatePassword={handleGoToUpdatePassword} warning={error} />}

            {view === 'search' && vehicles && !vehicle && <Results results={vehicles} onItemClick={handleDetail} />}

            {view === 'search' &&  vehicle && vehicles && <Detail vehicle={vehicle} style={style} onClick={handleBack} />}

            {view === 'updateuser' && <UpdateUser token={token} onSubmit={handleUpdateUser} />}

            {view === 'updatepassword' && <UpdatePassword token={token} onSubmit={handleUpdatePassword}  />}


        </Fragment>

    }
}

