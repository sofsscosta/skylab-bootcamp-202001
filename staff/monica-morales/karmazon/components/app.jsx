const IT = '🎈🤡'

const { Component } = React

class App extends Component {
    constructor() {
        super()

        this.state = { loggedIn: false, registeredWindow: false, vehicles: undefined, vehicle: undefined, style: undefined }
    }

    render() {
        return <main>
            <h1>{this.props.title}</h1>


            {!this.state.loggedIn && !this.state.registeredWindow && <Login onSubmit={(username, password) => {
                try {
                    authenticate(username, password)
                    
                    this.setState({ loggedIn: true })
                } catch (error) {
                    //_login.showError(error.message + ' ' + IT)
                }
            }} onToRegister={() => {this.setState({ registeredWindow: true})}}/>}

            {!this.state.loggedIn && this.state.registeredWindow && <Register onSubmit={(name, surname, username, password) => {
                try {
                    register(name, surname, username, password)

                    this.setState({ registeredWindow: false })
                } catch (error) {
                    // _register.showError(error.message + ' ' + IT)
                }
            }} onToLogin={() => {this.setState({registeredWindow: false})}}/>}

            {this.state.loggedIn && !this.state.registeredWindow && <Search title="Search" onSubmit={query => {
                searchVehicles(query, vehicles =>
                    this.setState({ vehicles })
                )
            }} />}

            {this.state.vehicles && !this.state.vehicle && <Results results={this.state.vehicles} onItemClick={id => {
                retrieveVehicle(id, vehicle =>
                    // retrieveStyle(vehicle.style, style =>
                    //     this.setState({ vehicle, style })
                //     // )
                // )
                    this.setState({ vehicle })
                )}} />}

            {this.state.vehicle && <Detail vehicle={this.state.vehicle} onBack={() => {this.setState({ vehicle: undefined })}}/>}
        </main>
    }
}