function Search({ title, onSubmit, onLogout, name}) {
    return <form className="search" onSubmit={event => {
        event.preventDefault()

        const query = event.target.query.value

        onSubmit(query)
    }}>
    <h2>{title}</h2>
    {name && <span>{name}</span>}
        <input type="text" name="query" placeholder="criteria" />
        <button type="submit">Search</button>

    <button className="logout" onClick={event => {
            event.preventDefault();

            onLogout();
        }}>Logout</button>
    </form>
}
