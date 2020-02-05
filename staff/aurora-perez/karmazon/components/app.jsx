const IT = '🎈🤡'

const { Component } = React

class App extends Component {

    state= { view: 'login', vehicles: undefined, vehicle: undefined, error: undefined, token: undefined, user:undefined}
    

    handleLogin = (username, password) => {
        try {
            authenticateUser(username, password, (response)=>{
                if (response instanceof Error) {
                    this.setState ({error: response.message})

                    setTimeout(() => {
                    this.setState({ error: undefined })
                    }, 3000)
                } else { 
                    
                    retrieveUser(response, name=>{
                        console.log(name)
                        this.setState({ view : 'search', token : response, user: name})
                        
                    })
                }
            })

        } catch (error) {
            this.setState ({error: error.message})
            setTimeout(() => {
            this.setState({ error: undefined })
            }, 3000)
        }             
    }


    handleToRegister =()=> this.setState({view: 'register'})

    handleRegister =(name, surname, username, password)=> { 
        try{
            registerUser(name, surname, username, password, (response)=> {
                if(response instanceof Error) {
                    this.setState({error: response.message}) 
                    setTimeout(() => {
                        this.setState({ error: undefined })
                    }, 3000)
            
                }else  {
                    this.setState({ view: 'login'})
                }
            }) 

            this.setState({ view: 'login'})
        } catch (error) {
            this.setState({error: error.message}) 
            setTimeout(() => {
                this.setState({ error: undefined })
            }, 3000)
            
        }
    }

    handleToLogin = () => this.setState({view: 'login'})

    handleSearch = query => {
        searchVehicles(query, vehicles =>
            this.setState({ vehicles })
        )
    }

    handleDetail = id => {
        retrieveVehicle(id, vehicle => 
            this.setState({ vehicle})
        )
    }

    handleBack = () => {
        this.setState({vehicle: undefined})
    }


    render() {
        const { props: {title}, state: {view, vehicle, vehicles, error, user}, handleDetail, handleLogin, handleRegister, handleSearch, handleToLogin, handleToRegister, handleBack} = this
        return <main>
            <h1>{title}</h1>

            {view==='login' && <Login onSubmit={handleLogin} onToRegister = {handleToRegister} error={error}/>} 

            {view === 'register' && <Register onSubmit ={handleRegister} onToLogin = {handleToLogin} error={error}/>}

            {view=== 'search' && <Search title="Search" name={user} onSubmit={handleSearch} />}

            {view === 'search' && vehicles && !vehicle && <Results results={vehicles} onItemClick={handleDetail}/>}

            {view === 'search' && vehicle && <Detail vehicle={vehicle} onBack ={handleBack}/>}
        </main>
    }
}