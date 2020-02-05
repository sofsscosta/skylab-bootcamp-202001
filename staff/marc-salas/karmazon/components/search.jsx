function Search({user, title, onSubmit, error}){
    
    return <form className="search" onSubmit={event =>{
        event.preventDefault()

        const query = event.target.query.value
        onSubmit(query);
    }}>
        <h2>{title}</h2>
        <p>User: {user} is logged in</p>
        <input type="text" name="query" placeholder="car"/>
        <button type="submit">Search</button>
        
        {error && <Feedback level="warning" message={error} />}

    </form>
}