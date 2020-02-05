const IT = '🎈🤡';

const { Component, Fragment } = React

class App extends Component {
    // constructor () {
    //     super()

    state = { view: "login", vehicle: undefined, vehicles: undefined, style: undefined, error: undefined, user: undefined }

    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, (response) => {
                if (response instanceof Error) {
                    this.setState({ error: `${response.message} ${IT}` })

                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
                } else {
                    const token = response
                    retrieveUser(token, user =>{
                        this.setState({ view: "search", user })
                    })
                }
            })

        } catch (error) {
            this.setState({ error: `${error.message} ${IT}` })

            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleGoToLogin = () => this.setState({ view: "login" })

    handleRegister = (name, surname, username, password) => {
        try {
            registerUser(name, surname, username, password, (response) => {
                if (response instanceof Error) {
                    this.setState({ error: `${response.message} ${IT}` })

                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
                } else {
                    this.setState({ view: "login" })
                }
            })

        } catch (error) {
            this.setState({ error: `${error.message} ${IT}` })

            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }

    handleGoToRegister = () => this.setState({ view: "register" })

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
                this.setState({ vehicles: undefined, vehicle, style })
            )
        )
    }

    handleUpdate = () => this.setState({ view: "update" })


    render() {
        const { props: { title }, state: { vehicle, vehicles, view, style, error, user }, handleDetail, handleGoToLogin, handleGoToRegister, handleLogin, handleRegister, handleSearch, handleUpdate } = this

        return <Fragment>

            <h1>{title}</h1>

            {user && <h2>{user.name}</h2>}

            {view === "register" && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

            {view === "login" && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} onToUpdate={handleUpdate} error={error} />}

            {view === "update" && <Update onSubmit={handleUpdate}/>}

            {view === "search" && <Search title="Search" onSubmit={handleSearch} warning={error} user={user} />}

            {view === "search" && vehicles && !vehicle && <Results results={vehicles} onItemClick={handleDetail} />}

            {view === "search" && vehicle && <Detail vehicle={vehicle} style={style} />}
        </Fragment>
    }
}