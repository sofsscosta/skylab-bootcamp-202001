const IT = '🎈🤡'

const { Component } = React

class App extends Component {

    state = { view: undefined, vehicles: undefined, vehicle: undefined, error: undefined, token: undefined, user: undefined }

    componentWillMount() {
        const { token } = sessionStorage

        if (token)
            retrieveUser(token, (error, user) => {
                if (error)
                    return this.setState({ error: error.message + ' ' + IT })

                if (location.search) {
                    const query = location.search.split('=')[1]

                    searchVehicles(query, (error, vehicles) => {
                        if (error)
                            this.setState({ error: error.message + ' ' + IT })

                        this.setState({ view: 'search', user, query, vehicles, error: vehicles.length ? undefined : 'No results ' + IT })

                        if (!vehicles.length)
                            setTimeout(() => {
                                this.setState({ error: undefined })
                            }, 3000)
                    })
                } else
                    this.setState({ view: 'search', user })
            })
        else this.setState({ view: 'login' })
    }


    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, (error, token) => {
                if (error) {
                    this.setState({ error: error.message })

                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
                } else {

                    retrieveUser(token, (error, user) => { //TODO
                        if (error) {
                            this.setState({ error: error.message })
                            setTimeout(() => {
                                this.setState({ error: undefined })
                            }, 3000)
                        } else {
                            sessionStorage.token = token
                            this.setState({ view: 'search', user })
                        }
                    })
                }
            })

        } catch (error) {
            this.setState({ error: error.message })
            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
        }
    }


    handleToRegister = () => this.setState({ view: 'register' })

    handleRegister = (name, surname, username, password) => {
        try {
            registerUser(name, surname, username, password, (error) => {
                if (error) {
                    this.setState({ error: error.message })
                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)

                } else {
                    this.setState({ view: 'login' })
                }
            })

            this.setState({ view: 'login' })
        } catch (error) {
            this.setState({ error: error.message })
            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)

        }
    }

    handleToLogin = () => this.setState({ view: 'login' })

    handleSearch = query => {
        searchVehicles(query, (error, vehicles) => {
            if (error) return this.setState(error: error.message)

            const { protocol, host, pathname } = location

            const url = `${protocol}//${host}${pathname}?q=${query}`

            history.pushState({ path: url }, '', url)

            this.setState({ vehicles, vehicle: undefined, error: vehicles.length ? undefined : 'No results' })

            if (error) {
                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000)
            }


        })
    }



    handleDetail = id => {
        retrieveVehicle(id, vehicle =>
            this.setState({ vehicle })
        )
    }

    handleBack = () => {
        this.setState({ vehicle: undefined })
    }

    handleLogout = () => {
        sessionStorage.clear();
        const { protocol, host, pathname } = location
        const url = `${protocol}//${host}${pathname}`
        history.pushState({ path: url }, '', url)
        this.setState({ user: undefined, vehicles: undefined, view: 'login' })
    }

    handleHeartClick = id => {

        const token = sessionStorage.token
        toggleFavVehicle(id, token, (error, user) => {

            if (error) {
                this.setState({ error: error.message })
                setTimeout(() => {
                    this.setState({ error: undefined })
                }, 3000)

            } else {
                const query = location.search.split('=')[1]
                searchVehicles(query, token, (error, favs) => {
                    //TODO
                    this.setState({ view: 'search' })
                })
            }
        })
    }


    render() {
        const { props: { title }, state: { view, vehicle, vehicles, error, user }, handleDetail, handleLogin, handleRegister, handleSearch, handleToLogin, handleToRegister, handleBack, handleHeartClick, handleLogout } = this
        return <main>
            <h1>{title}</h1>

            {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleToRegister} error={error} />}

            {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleToLogin} error={error} />}

            {view === 'search' && <Search title="Search" name={user.name} onSubmit={handleSearch} onLogout={handleLogout} />}

            {view === 'search' && vehicles && !vehicle && <Results results={vehicles} onItemClick={handleDetail} onHeartClick={handleHeartClick} />}

            {view === 'search' && vehicle && <Detail vehicle={vehicle} onBack={handleBack} />}
        </main>
    }
}






// const IT = '🎈🤡';

// const { Component, Fragment } = React

// class App extends Component {

//     state = {
//         view: 'login',
//         vehicles: undefined,
//         vehicle: undefined,
//         error: undefined,
//         user: undefined
//     }

//     componentWillMount() {
//         const { token } = sessionStorage

//         if (token)
//             retrieveUser(token, (error, user) => {
//                 if (error)
//                     return this.setState({ error: error.message + ' ' + IT })

//                 if (location.search) {
//                     const query = location.search.split('=')[1]

//                     searchVehicles(query, (error, vehicles) => {
//                         if (error)
//                             this.setState({ error: error.message + ' ' + IT })

//                         this.setState({ view: 'search', user, query, vehicles, error: vehicles.length ? undefined : 'No results ' + IT })

//                         if (!vehicles.length)
//                             setTimeout(() => {
//                                 this.setState({ error: undefined })
//                             }, 3000)
//                     })
//                 } else
//                     this.setState({ view: 'search', user })
//             })
//         else this.setState({ view: 'login' })
//     }

//     handleLogin = (username, password) => {
//         try {
//             authenticateUser(username, password, (error, response) => {
//                 if (error) {
//                     this.setState({ error: error.message })

//                     setTimeout(() => {
//                         this.setState({ error: undefined })
//                     }, 3000)
//                 } else {
//                     retrieveUser(token, (error, user) => {
//                         if (error)
//                             return this.setState({ error: error.message })

//                         sessionStorage.token = token

//                         this.setState({ view: 'search', user })

//                     })
//                 }
//             })

//         } catch (error) {
//             this.setState({ error: error.message })
//             setTimeout(() => {
//                 this.setState({ error: undefined })
//             }, 3000)
//         }
//     }

//     handleGoToRegister = () => this.setState({ view: 'register' })

//     handleRegister = (name, surname, username, password) => {
//         try {
//             registerUser(name, surname, username, password, error => {
//                 if (error)
//                     return this.setState({ error: error.message })

//                 this.setState({ view: 'login' })
//             })


//         } catch (error) {
//             this.setState({ error: error.message + ' ' + IT })
//             setTimeout(() => {
//                 this.setState({ error: undefined })
//             }, 3000)
//         }

//     }

//     handleGoToLogin = () => this.setState({ view: 'login' })

//     handleSearch = (query) => {
//         searchVehicles(query, (error, vehicles) => {
//             if (error)
//                 return this.setState({ error: error.message + ' ' + IT })

//             const { protocol, pathname, host } = location

//             const url = `${protocol}//${host}${pathname}?=${query}`


//             this.setState({ vehicles })
//         })

//         setTimeout(() => {
//             this.setState({ error: undefined })
//         }, 3000)

//     }

//     handleBackToResults = () => {
//         this.setState({ vehicle: undefined })
//     }

//     handleItemClick = (productId) => {
//         retrieveVehicle(productId, vehicle => {
//             this.setState({ vehicle })
//         })
//     }



//     render() {
//         const { props: { title }, state: { view, vehicles, vehicle, error, user }, handleLogin, handleGoToRegister, handleRegister, handleGoToLogin, handleSearch, handleBackToResults, handleItemClick, handleLogout } = this
//         return <Fragment>

//             <h1>{title}</h1>
//             {user && <h2>{user.name}</h2>}
//             {view === 'login' && <Login onSubmit={handleLogin} onToRegister={handleGoToRegister} error={error} />}

//             {view === 'register' && <Register onSubmit={handleRegister} onToLogin={handleGoToLogin} error={error} />}

//             {view === 'search' && <Search title="Search" name={user} onSubmit={handleSearch} error={error} onLogout={handleLogout} />}

//             {vehicles && !vehicle && <Results results={vehicles} onItemClick={handleItemClick} />}

//             {vehicle && <Detail product={vehicle} backToResults={handleBackToResults} />}
//         </Fragment>


//     }

// }

