function Update({onSubmit, user, onGoToSearch, error}){
    return <form className="update" onSubmit={event =>{
        event.preventDefault()

        const name = event.target.name.value
        const surname = event.target.surname.value
        const username = event.target.username.value
        const age = event.target.age.value
        const oldPassword = event.target.oldPassword.value
        const password = event.target.password.value

        const newUser = {name, surname, username, age, oldPassword, password}

        onSubmit(newUser)
    }}>

        <h3 className="update__title">Update</h3>
        <input type="text" name="name" defaultValue={user.name}/>
        <input type="text" name="surname" defaultValue={user.surname}/>
        <input type="text" name="username" defaultValue={user.username}/>
        <input type="text" name="age" defaultValue={user.age ? user.age : ""}/>
        <input type="text" name="oldPassword" placeholder="Enter your old password..."/>
        <input type="text" name="password" placeholder="Enter your new passoword..."/>
        <button>Update</button>
        <a href="" onClick={event=>{
            event.preventDefault()
            onGoToSearch()
        }}>Go back to Search</a>

        {error && <Feedback level="error" message={error}/>}
    </form>
}