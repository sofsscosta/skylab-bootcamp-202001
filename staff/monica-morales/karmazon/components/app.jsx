const IT = '🎈🤡'

const { Component } = React

class App extends Component {
    constructor() {
        super()

        this.state = { view: 'search', vehicles: undefined, vehicle: undefined, style: undefined, error: undefined, warning: undefined}
    }

    // handleLogin = 


    render() {
        return <main>
            <h1>{this.props.title}</h1>


            {this.state.view === 'login' && <Login onSubmit={(username, password) => {
                try {
                    authenticate(username, password)
                    
                    this.setState({ view:'search'})
                } catch (error) {
                    this.setState({error: error.message + ' ' + IT})
                }
            }} onToRegister={() => {this.setState({ view:'register'})}} error={this.state.error}/>}

            {this.state.view === 'register' && <Register onSubmit={(name, surname, username, password) => {
                try {
                    register(name, surname, username, password)

                    this.setState({ view: 'login' })
                } catch (error) {
                    this.setState({error: error.message + ' ' + IT})
                }
            }} onToLogin={() => {this.setState({view:'login'})}} error={this.state.error}/>}

            {this.state.view === 'search' && <Search title="Search" onSubmit={query => {
                searchVehicles(query, vehicles => {
                    if(this.state.vehicle) {
                        this.setState({ vehicle: undefined })
                    }

                        this.setState({ vehicles, error: vehicles.length? undefined:'No results' })
                    
                        if (!vehicles.length){
                        setTimeout(() => {
                            this.setState({ error: undefined })
                        }, 3000)
                    }
                }
                )


            }} error={this.state.error} />}

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