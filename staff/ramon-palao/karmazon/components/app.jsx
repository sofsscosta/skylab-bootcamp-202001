const IT = '🎈🤡';

const {Component} = React

class App extends Component {
    constructor () {
        super()
        
        this.state = {loggedIn: !false, vehicles: undefined, vehicle: undefined, style: undefined}
    }
        
    render() {
        return <main>
            <h1>{this.props.title}</h1>
            
            {!this.state.loggedIn && <Login onSubmit = {(username, password) => {
                try {
                    authenticate(username, password)

                    this.setState({loggedIn: true})
                } catch (error) {
                    //_login.showError(error.message + " " + IT)
                }
            }} />}

            {this.state.loggedIn && <Search title = "Search" onSubmit = {query => {
                searchVehicles(query, vehicles =>
                    this.setState({ vehicles })
                )
            }}/>}

            {this.state.vehicles && !this.state.vehicle && <Results results={this.state.vehicles} onItemClick={id => {
                retrieveVehicle(id, vehicle =>
                    retrieveStyle(vehicle.style, style =>
                        this.setState({ vehicle, style})
                    )
                )
            }}/>}

            {this.state.vehicle && <Detail vehicle={this.state.vehicle} style={this.state.style} />}
        </main>
    }
}