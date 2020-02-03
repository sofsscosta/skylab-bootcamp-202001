const IT = '🎈🤡'

const { Component } = React

class App extends Component {
    constructor() {
        this.state = {
            isLoggedIn: false
        };
    }

    render() {
        return <main>
            <h1>{this.props.title}</h1>
            {!this.state.isLoggedIn && <Login onSubmit={(username, password) => {
                try {
                    authenticate(username, password)
                    this.setState({ isLoggedIn: true })
                } catch (error) {
                    //_login.showError(error.message + ' ' + IT)
                }
            }} onToRegister={} />}
        </main>
    }
}

/*class App extends Component {
    constructor(props) {
        super(document.createElement('main'))
        const app = this.container

        app.innerHTML = '<h1>' + props.title + '</h1>'

        const _login = new Login({
            onSubmit(username, password) {
                try {
                    authenticate(username, password)

                    _login.container.replaceWith(_search.container)
                } catch (error) {
                    //alert(error.message + ' ' + IT)
                    _login.showError(error.message + ' ' + IT)
                }
            },
            onToRegister() {
                _login.container.replaceWith(_register.container)
            }
        })

        app.append(_login.container)

        const _register = new Register({
            onSubmit(name, surname, username, password) {
                try {
                    register(name, surname, username, password)

                    _register.container.replaceWith(_login.container)
                } catch (error) {
                    //alert(error.message + ' ' + IT)
                    _register.showError(error.message + ' ' + IT)
                }
            },
            onToLogin() {
                _register.container.replaceWith(_login.container)
            }
        })

        const _search = new Search({
            title: 'Search',

            onSubmit(query) {
                searchVehicles(query, function (vehicles) {
                    if (vehicles instanceof Error)
                        return _search.showError(vehicles.message + ' ' + IT)

                    if (!vehicles.length)
                        return _search.showWarning('No results ' + IT)

                    const __results = new Results({
                        results: vehicles,
                        onClick(details) {
                            const _details = new ItemDetails(details)
                            _results.replaceWith(_details)
                            const backButton = document.querySelector('.details .details__backButton span')
                            backButton.addEventListener('click', () => _details.replaceWith(_results))
                        }
                    })

                    if (!_results)
                        app.append(_results = __results)
                    else {
                        _results.replaceWith(__results)

                        _results = __results
                    }
                })
            }
        })

        document.addEventListener('DOMContentLoaded', () => {
            const timeout1 = setTimeout(() => {
                document.querySelector('form.login button').click()
                const timeout2 = setTimeout(() => {
                    document.querySelector('form.search button').click()
                    clearTimeout(timeout2)
                }, 100)
                clearTimeout(timeout1)
            }, 100)
        }, false)

        let _results
    }

}*/