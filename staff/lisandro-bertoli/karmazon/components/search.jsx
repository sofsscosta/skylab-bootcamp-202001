function Search({ title, onSubmit, onLogout, error, name }) {
    return <form className="search" onSubmit={event => {
        event.preventDefault();

        const query = event.target.query.value;

        onSubmit(query);
    }}>
        <h2>{title}</h2>
        <input type="text" name="query" placeholder="criteria" />

        {error && <Feedback level="warning" message={error} />}

        <button type="submit">Search</button>
        <button className="logout" onClick={event => {
            event.preventDefault();

            onLogout();
        }}>Logout</button>
    </form >
}

