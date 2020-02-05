const {Component} = React

class App extends Component {
    state = {view: "login", vehicles: undefined, vehicle: undefined, error: undefined, msg: undefined}

    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, response => {
                const stringToken = JSON.parse(response.content).token
                localStorage.setItem("token", stringToken)
            })

            this.setState({view: "search"})
        } catch (error) {
            this.setState({error: error.message})
            setTimeout(() => this.setState({error: undefined}), 3000);
        }
    }

    handleGoToRegister = () => this.setState({view: "register"})

    handleRegister = user => {
        this.setState({view: "login"})
        registerUser(user, () => {
            this.setState({msg: "Successful User Registered"})
            setTimeout(() => {this.setState({msg: undefined})}, 5000);
        })
    }

    handleGoToLogin = () => this.setState({view: "login"})

    handleSearch = (query) => {
        
        try {
            if (!query) throw new Error("please enter a name car")
            
            searchVehicles(query, (vehicles) => {
                if (!vehicles.length) {
                    this.setState({error: "car not found"})
                    setTimeout(() => this.setState({error: undefined}), 3000);
                } else 
                    this.setState({ vehicles, vehicle: undefined})
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

    componentDidMount = () => {
        if (localStorage.getItem('token')) {
            this.setState({view: "search"})
        }
    }
    
    render() {

        const {props: {title}, state: {view, vehicles, vehicle, error, msg}, 
        handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleDetail} = this

        return <main>
            <h1>{title}</h1>
            {msg && <p style={styleP}>{msg}</p>}

            {view === "login" && <Login onSubmit={handleLogin} handleGoToRegister={handleGoToRegister} error={error}/>}
            
            {view === "register" && <Register onSubmit={handleRegister} handleGoToLogin={handleGoToLogin} />}

            {view === "search" && <Search title="Search" onSubmit={handleSearch} error={error} />}

            {view === "search" && vehicles && !vehicle && <Results results={vehicles} onClickItem={handleDetail}/>}

            {view === "search" && vehicle && <Details result={vehicle} />}
        </main>
    }
}

const styleP = {fontSize: "20px" ,padding: "10px 0px",color: 'white', backgroundColor: 'green', borderRadius: "10px"}