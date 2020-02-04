const IT = '🎈🤡'

const { Component } = React

class App extends Component {
    constructor() {
        super()

        this.state = { loggedIn: !false, registered: undefined, vehicles: undefined, vehicle: undefined}
    }
    render() {
        return <main>
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

        </main>
    }
}

