const {Component} = React

class App extends Component {
    state = {view: "login", details: undefined, vehicles: undefined, vehicle: undefined, error: undefined}

    onSubmitLogin = (username, password) => {
        try {
            authenticate(username, password)
            this.setState({view: "search"})
        } catch (error) {
            this.setState({error: error.message})
            setTimeout(() => this.setState({error: undefined}), 3000);
        }
    }

    onToRegister = () => this.setState({view: "register"})

    onSubmitRegister = user => {
        this.setState({view: "login"})
        users.push(user)
    }

    onToLogin = () => this.setState({view: "login"})

    onSubmitSearch = query => {
        searchVehicles(query, vehicles => {
            this.setState({ vehicles, vehicle: undefined})
        })
    }

    onToDetails = id => {
        retrieveVehicle(id, result => {
            this.setState({vehicle: result})
        })
    }
    
    render() {
        const {props: {title}, state: {view, details, vehicles, vehicle, error}, 
        onSubmitLogin, onToRegister, onSubmitRegister, onToLogin, onSubmitSearch, onToDetails} = this

        return <main>
            <h1>{title}</h1>

            {view === "login" && <Login onSubmit={onSubmitLogin} onToRegister={onToRegister} error={error}/>}
            
            {view === "register" && <Register onSubmit={onSubmitRegister} onToLogin={onToLogin} />}

            {view === "search" && <Search title="Search" onSubmit={onSubmitSearch} />}

            {vehicles && !vehicle && <Results results={vehicles} onClickItem={onToDetails}/>}

            {vehicle && <Details result={vehicle} />}
        </main>
    }
}