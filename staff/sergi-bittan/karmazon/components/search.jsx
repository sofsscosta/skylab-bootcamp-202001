function Search({ title, onSubmit, user }) {
    return (
        <form className="search" onSubmit={(event) => {
            event.preventDefault();
            const query = event.target.query.value;
            onSubmit(query);
        }
        }>
            <h2>{title}</h2>
            <h3>{user.name}</h3>
            <input type="text" name="query" placeholder="criteria" />
            <button type="submit">Search</button>

        </form>
    )
}






