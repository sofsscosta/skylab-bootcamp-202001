function Search({ title, onSubmit, onLogout, onFavorites, name}) {
    return <form className="search" onSubmit={event => {
        event.preventDefault()

        const query = event.target.query.value

        onSubmit(query)
    }}>
    <h2>{title}</h2>
    
    {name && <span>Bienvenido, {name}!</span>}
        <input type="text" name="query" placeholder="criteria" />
        <button type="submit">Search</button>
    
    
    <button className="logout" onClick={event => {
            event.preventDefault();

            onLogout();
        }}>Logout</button>

    <a href="#" onClick={event=> {
        event.preventDefault()

        onFavorites()
    }}>Favorites</a>
    </form>
}
