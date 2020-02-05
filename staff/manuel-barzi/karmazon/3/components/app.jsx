const IT = '🎈🤡'

const { Component, Fragment } = React

class App extends Component {
    constructor() {
        super()

        this.state = { view: 'search', vehicles: undefined, vehicle: undefined, style: undefined, error: undefined }
    }

    render() {
        return <Fragment>
            <h1>{this.props.title}</h1>

            {this.state.view === 'login' && <Login onSubmit={(username, password) => {
                try {
                    authenticate(username, password)

                    this.setState({ view: 'search' })
                } catch (error) {
                    this.setState({ error: error.message + ' ' + IT })

                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
                }
            }} onToRegister={() => this.setState({ view: 'register' })} error={this.state.error} />}

            {this.state.view === 'register' && <Register onSubmit={(name, surname, username, password) => {
                try {
                    register(name, surname, username, password)

                    this.setState({ view: 'login' })
                } catch (error) {
                    this.setState({ error: error.message + ' ' + IT })

                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
                }
            }} onToLogin={() => this.setState({ view: 'login' })} error={this.state.error} />}

            {this.state.view === 'search' && <Search title="Search" onSubmit={query => {
                searchVehicles(query, vehicles => {
                    this.setState({ vehicles, vehicle: undefined, error: vehicles.length ? undefined : 'No results ' + IT })

                    if (!vehicles.length)
                        setTimeout(() => {
                            this.setState({ error: undefined })
                        }, 3000)
                })
            }} warning={this.state.error} />}

            {this.state.view === 'search' && this.state.vehicles && <Results results={this.state.vehicles} onItemClick={id => {
                retrieveVehicle(id, vehicle =>
                    retrieveStyle(vehicle.style, style =>
                        this.setState({ vehicle, style, vehicles: undefined })
                    )
                )
            }} />}

            {this.state.view === 'search' && this.state.vehicle && <Detail vehicle={this.state.vehicle} style={this.state.style} />}
        </Fragment>
    }
}