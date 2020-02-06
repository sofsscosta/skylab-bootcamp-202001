const {Component, Fragment} = React

class App extends Component {

    state = {view: "login", vehicles: undefined, vehicle: undefined, error: undefined, message: undefined, token: undefined, user: undefined}

    componentWillMount = () => {
        const { protocol, host, pathname } = location
        const url = `${protocol}//${host}${pathname}`
        history.pushState({ path: url }, '', url)
    }

    handleLogin = ({username, password}) => {
        try {
            authenticateUser(username, password, (error, token) => {
                // Asyn Error
                if (error) {
                    this.setState({error: error.message})
                    setTimeout(() => this.setState({error: undefined}), 3000);
                } else {
                    retrieveUser(token, (error, user) => {
                        if (error)
                            return this.setState({ error: error.message })

                        sessionStorage.token = token
                        this.setState({ view: 'search', user })
                    })
                }
            })
            // Sync Error
        } catch (error) {
            this.setState({error: error.message})
            setTimeout(() => this.setState({error: undefined}), 3000);
        }
    }

    handleGoToRegister = () => this.setState({view: "register"})

    handleRegister = user => {
        try {
            registerUser(user, (error, message) => {
                // Asyn Error
                if (error) {
                    this.setState({error: error.message})
                    setTimeout(() => this.setState({error: undefined}), 3000);
                }

                this.setState({view: "login", message})
                setTimeout(() => this.setState({message: undefined}), 3000);

            })
            
            // Sync Errror
        } catch (error) {
            this.setState({error: error.message})
            setTimeout(() => this.setState({error: undefined}), 3000);
        }
        
    }

    handleGoToLogin = () => this.setState({view: "login"})

    handleSearch = ({query}) => {
        try {
            if (!query) throw new Error("please enter a name car")
            
            searchVehicles(query, sessionStorage.token, (error, vehicles) => {
                if(error) {
                    this.setState({error: error.message})
                    setTimeout(() => this.setState({error: undefined}), 3000);
                } else {
                    const { protocol, host, pathname } = location
                    const url = `${protocol}//${host}${pathname}?q=${query}`
                    history.pushState({ path: url }, '', url)
                    
                    this.setState({ vehicles, vehicle: undefined, error: vehicles.length ? undefined : 'No results '})
                    if (!vehicles.length) setTimeout(() => this.setState({error: undefined}), 3000);
                }

            })

        } catch (error) {
            this.setState({error: error.message})
            setTimeout(() => this.setState({error: undefined}), 3000);
        }
        
    }

    handleDetail = id => {
        retrieveVehicle(id, result => {
            this.setState({vehicle: result})
        })
    }

    handleUpdate = (user) => {

        updateUser(user, this.state.token, msg => {
            console.log(msg);
        })
    }

    handleHeart = id => {
        try {
            toggleFavVehicle(sessionStorage.token, id, (error, query) => {
                if (error)
                    this.setState({error: error.message})
                else
                    this.handleSearch({query})
            })
        } catch (error) {
            this.setState({error: error.message})
        }
        
    }
    
    render() {
        const {props: {title}, state: {view, vehicles, vehicle, error, message, user}, 
        handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleDetail, handleUpdate, handleHeart} = this

        return <Fragment>
            {user && <Avatar user={user} />}
            
            <h1>{title}</h1>

            {view === "login" && <Login onSubmit={handleLogin} handleGoToRegister={handleGoToRegister} error={error} message={message} />}
            
            {view === "register" && <Register onSubmit={handleRegister} handleGoToLogin={handleGoToLogin} error={error} />}

            {view === "search" && <Search title="Search" onSubmit={handleSearch} error={error} />}

            {view === "search" && <Update onSubmit={handleUpdate} />}

            {view === "search" && vehicles && !vehicle && <Results results={vehicles} onClickItem={handleDetail} toggleHeart={handleHeart} />}

            {view === "search" && vehicle && <Detail result={vehicle} />}
        </Fragment>
    }
}

const styleP = {fontSize: "20px" ,padding: "10px 0px",color: 'white', backgroundColor: 'green', borderRadius: "10px"}