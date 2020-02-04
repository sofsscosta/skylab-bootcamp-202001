const IT = '🎈🤡'

const { Component } = React

class App extends Component {
    constructor() {
        super()

        this.state = { loggedIn: !false, vehicles: undefined, vehicle: undefined, style: undefined }
    }

    render() {
        return <main>
            <h1>{this.props.title}</h1>

            {!this.state.loggedIn && <Login onSubmit={(username, password) => {
                try {
                    authenticate(username, password)

                    this.setState({ loggedIn: true })
                } catch (error) {
                    //_login.showError(error.message + ' ' + IT)
                }
            }} />}

            {this.state.loggedIn && <Search title="Search" onSubmit={query => {
                searchVehicles(query, vehicles =>
                    this.setState({ vehicles })
                )
            }} />}

            {this.state.vehicles && !this.state.vehicle && <Results results={this.state.vehicles} onItemClick={id => {
                retrieveVehicle(id, vehicle =>
                    retrieveStyle(vehicle.style, style =>
                        this.setState({ vehicle, style })
                    )
                )
            }} />}

            {this.state.vehicle && <Detail vehicle={this.state.vehicle} style={this.state.style} />}
        </main>
    }
}








//     const _login = new Login({
//         onSubmit(username, password) {
//             try {
//                 authenticate(username, password);

//                 _login.container.replaceWith(_search.container);
//             } catch (error) {
//                 _login.showError(error.message + ' ' + IT);
//             }
//         },
//         onToRegister() {
//             _login.container.replaceWith(_register.container);
//         }
//     });

//     app.append(_login.container);

//     const _register = new Register({
//         onSubmit(name, surname, username, password) {
//             try {
//                 register(name, surname, username, password);

//                 _register.container.replaceWith(_login.container);
//             } catch (error) {
//                 //alert(error.message + ' ' + IT);
//                 _register.showError(error.message + ' ' + IT);
//             }
//         },
//         onToLogin() {
//             _register.container.replaceWith(_login.container);
//         }
//     });

//     const _search = new Search({
//         title: 'Search',

//         onSubmit(query) {
//             searchVehicles(query, vehicles => {
//                 if (vehicles instanceof Error)
//                     return _search.showError(vehicles.message + ' ' + IT);

//                 if (!vehicles.length)
//                     return _search.showWarning('No results ' + IT);

//                 const __results = Results({ 
//                     results: vehicles, 
//                     onResultClicked(resultId) 
//                     {
//                         retrieveVehicle(resultId, vehicle => {
//                             retrieveStyle(vehicle.style, style => {

//                                 const detail = new Detail(results);

//                                 _results.replaceWith(detail.container);

//                                 _results = detail.container
//                             })

//                         })

                        
//                     } 
//                 });

//                 if (!_results)
//                     app.append(_results = __results.container);
//                 else {
//                     _results.replaceWith(__results.container);

//                     _results = __results.container;
//                 }
//             });
//         }
//     });

//     //app.append(_search.container) // BYPASS for quick testing search on screen (without going through login)

//     let _results;

// }
// }