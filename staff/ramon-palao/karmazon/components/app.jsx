const IT = '🎈🤡';

const {Component, Fragment} = React

class App extends Component {
    // constructor () {
    //     super()
        
         state = {view: "login", vehicle: undefined, vehicles: undefined, style: undefined}
        
    render() {
        return <Fragment>
            <h1>{this.props.title}</h1>
            
            {this.state.view === "login" && <Login onSubmit = {(username, password) => {
                try {
                    authenticate(username, password)

                    this.setState({view: "search"})
                } catch (error) {
                    //_login.showError(error.message + " " + IT)
                }
            }} />}

            {this.state.view === "search" && <Search title = "Search" onSubmit = {query => {
                searchVehicles(query, vehicles =>
                    this.setState({ vehicles, vehicle: undefined })
                )
            }}/>}

            {this.state.view === "search" && this.state.vehicles && !this.state.vehicle && <Results results={this.state.vehicles} onItemClick={id => {
                retrieveVehicle(id, vehicle =>
                    retrieveStyle(vehicle.style, style =>
                        this.setState({ vehicles: undefined, vehicle, style})
                    )
                )
            }}/>}

            {this.state.view === "search" && this.state.vehicle && <Detail vehicle={this.state.vehicle} style={this.state.style} />}
        </Fragment>
    }
}