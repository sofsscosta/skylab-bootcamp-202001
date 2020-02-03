
const IT = '🎈🤡';

const { Component } = React

class App extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false,
            registered: true,
            vehicles: undefined,
            details: undefined
        }
    }

    render() {
        return <main>
            <h1>{this.props.title}</h1>
            {!this.state.loggedIn && <Login onSubmit={(username, password) => {
                try {
                    authenticate(username, password);
                    this.setState({ loggedIn: true, registered: true })
                } catch (error) {
                    //alert(error.message + ' ' + IT);
                    // _login.showError(error.message + ' ' + IT);
                }
            }} onToRegister={() => this.setState({ loggedIn: true, registered: false })} />}

            {!this.state.registered && <Register onSubmit={
                (name, surname, username, password) => {
                    try {
                        register(name, surname, username, password);
                        this.setState({ loggedIn: false, registered: true })
                    } catch (error) {
                        //alert(error.message + ' ' + IT);
                        // _register.showError(error.message + ' ' + IT);
                    }
                }} onToLogin={() => { this.setState({ loggedIn: false, registered: true }) }} />}

            {this.state.loggedIn && this.state.registered && <Search title="Search" onSubmit={(query) => {
                searchVehicles(query, vehicles => {
                    this.setState({ vehicles, details: undefined });
                })
            }} />}

            {this.state.vehicles && <Results results={this.state.vehicles} onItemClick={(productId) => {
                retrieveVehicle(productId, details => {
                    this.setState({ details, vehicles: undefined })
                })
            }} />}

            {this.state.details && <Detail product={this.state.details} backToResults={() => {
                this.setState({ details: undefined })
            }} />}
        </main>


        const _search = new Search({
            title: 'Search',

            onSubmit(query) {
                searchVehicles(query, vehicles => {
                    if (vehicles instanceof Error)
                        return _search.showError(vehicles.message + ' ' + IT);

                    if (!vehicles.length)
                        return _search.showWarning('No results ' + IT);

                    const _results = new Results({
                        results: vehicles,

                        onToItem(productId) {
                            retrieveVehicle(productId, vehicle => {

                                const _details = new Detail({
                                    product: vehicle,

                                    backToResults() {
                                        _details.container.replaceWith(_results.container);
                                        _previousResults = _results.container
                                    }
                                });

                                _results.container.replaceWith(_details.container);
                                _previousResults = _details.container;
                            });
                        }
                    });

                    if (!_previousResults) {
                        _previousResults = _results.container
                        app.append(_previousResults);
                    } else {
                        _previousResults.replaceWith(_results.container);

                        _previousResults = _results.container;
                    }
                });
            },

            onLogout() {
                if (_previousResults) {
                    _search.container.reset();
                    _previousResults = undefined;
                    document.querySelector('.results').remove();
                }
                _search.container.replaceWith(_login.container);


            }
        });

        let _previousResults;
    }

}

