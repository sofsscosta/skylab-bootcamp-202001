const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {



        state = { view: "Login", vehicles: undefined, vehicle: undefined, style: undefined, error: undefined}
    
        handleLogin = (username, password) => {
            try {
                authenticate(username, password)

                this.setState({ view: "search"})
            } catch (error) {
                this.setState ({error:`error.message ${IT}`})
                setTimeout (()=> {
                 this.setState({error: undefined})   
                }, 3000)
            }
        }

        handleGoToRegister=()=> this.setState({ view: "register" })
            
        handleRegister=(name, surname, username, password)=> {
            try {
                register(name, surname, username, password)

                this.setState({view: "login"})
            } catch (error) {
                this.setState ({error:`error.message ${IT}`})
                setTimeout (()=> {
                this.setState({error: undefined})   
                }, 3000)
            }
        }

        handleGoToLogin=()=> this.setState({ view: "login" })





    render() {
        return <Fragment>
            <h1>{this.props.title}</h1>

            {this.state.loggedIn && <Login onSubmit={(username, password) => {
                try {
                    authenticate(username, password)

                    this.setState({ loggedIn: false, vehicles: true})
                } catch (error) {
                    //_login.showError(error.message + ' ' + IT)
                }
            }} 
            onToRegister={() =>{
                this.setState({ loggedIn: false, registered: true })
            }}
            />}

            {this.state.registered && <Register onSubmit={(name, surname, username, password) =>{
                 try {
                    register(name, surname, username, password)

                    this.setState({loggedIn: true, registered: false})
                } catch (error) {
                    //alert(error.message + ' ' + IT)
                    //register.showError(error.message + ' ' + IT)
                }

            }} 
            onToLogin={() =>{
                this.setState({ loggedIn: true, registered: false })
            }}
            />}
            {this.state.vehicles && <Search title="Search" onSubmit={query => {
                searchVehicles(query, vehicles =>
                    this.setState( vehicles))
            }} />}

        </Fragment>
    }
}

