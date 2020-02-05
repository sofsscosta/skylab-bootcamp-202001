function Search({user, title, onSubmit, onToUpdateUser, onToUpdatePassword, error}){
    
    return <form className="search" onSubmit={event =>{
        event.preventDefault()

        const query = event.target.query.value
        onSubmit(query);
    }}>
        <h2>{title}</h2>
        <p>User: {user} is logged in</p>
        <input type="text" name="query" placeholder="car"/>
        <button type="submit">Search</button>
        <a href="" onClick={event=>{
            event.preventDefault()

            onToUpdateUser()
        }}>change username</a>
                <a href="" onClick={event=>{
            event.preventDefault()

            onToUpdatePassword()
        }}>change password</a>
        
        {error && <Feedback level="warning" message={error} />}

    </form>
}